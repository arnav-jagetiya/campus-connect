package com.arnavjagetiya.campusconnect.features.auth;

import com.arnavjagetiya.campusconnect.features.auth.dto.*;
import com.arnavjagetiya.campusconnect.shared.exception.ConflictException;
import com.arnavjagetiya.campusconnect.shared.exception.ResourceNotFoundException;
import com.arnavjagetiya.campusconnect.shared.security.JwtService;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

/**
 * Business logic for authentication operations: register, login, and token refresh.
 */
@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    /**
     * Register a new user account.
     *
     * @throws ConflictException if the email is already registered
     */
    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new ConflictException("An account with this email already exists");
        }

        User user = new User(
                request.fullName(),
                request.email(),
                passwordEncoder.encode(request.password())
        );

        user = userRepository.save(user);

        String accessToken = jwtService.generateAccessToken(user.getId(), user.getEmail(), user.getFullName());
        String refreshToken = jwtService.generateRefreshToken(user.getId());

        return new AuthResponse(UserDto.from(user), accessToken, refreshToken);
    }

    /**
     * Authenticate a user with email and password.
     *
     * @throws BadCredentialsException if credentials are invalid
     */
    @Transactional
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BadCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new BadCredentialsException("Invalid email or password");
        }

        user.setLastLoginAt(Instant.now());
        userRepository.save(user);

        String accessToken = jwtService.generateAccessToken(user.getId(), user.getEmail(), user.getFullName());
        String refreshToken = jwtService.generateRefreshToken(user.getId());

        return new AuthResponse(UserDto.from(user), accessToken, refreshToken);
    }

    /**
     * Issue a new access token using a valid refresh token.
     *
     * @throws BadCredentialsException if the refresh token is invalid
     */
    @Transactional(readOnly = true)
    public TokenResponse refreshToken(RefreshRequest request) {
        String token = request.refreshToken();

        if (!jwtService.isTokenValid(token) || !jwtService.isRefreshToken(token)) {
            throw new BadCredentialsException("Invalid or expired refresh token");
        }

        UUID userId = jwtService.extractUserId(token);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new BadCredentialsException("User not found"));

        String accessToken = jwtService.generateAccessToken(user.getId(), user.getEmail(), user.getFullName());
        return new TokenResponse(accessToken);
    }

    /**
     * Retrieve the currently authenticated user's profile.
     *
     * @throws ResourceNotFoundException if the user does not exist
     */
    @Transactional(readOnly = true)
    public UserDto getCurrentUser(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return UserDto.from(user);
    }
}
