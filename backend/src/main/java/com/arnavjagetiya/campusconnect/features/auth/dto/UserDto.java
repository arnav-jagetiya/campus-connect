package com.arnavjagetiya.campusconnect.features.auth.dto;

import com.arnavjagetiya.campusconnect.features.auth.User;

import java.time.Instant;
import java.util.UUID;

/**
 * Safe user projection that never exposes the password hash.
 */
public record UserDto(
        UUID id,
        String fullName,
        String email,
        Instant createdAt
) {
    /**
     * Factory method to create a {@link UserDto} from a {@link User} entity.
     */
    public static UserDto from(User user) {
        return new UserDto(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getCreatedAt()
        );
    }
}
