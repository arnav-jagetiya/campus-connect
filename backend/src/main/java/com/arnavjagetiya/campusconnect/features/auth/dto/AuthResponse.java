package com.arnavjagetiya.campusconnect.features.auth.dto;

/**
 * Response DTO returned after successful login or registration.
 */
public record AuthResponse(
        UserDto user,
        String accessToken,
        String refreshToken
) {}
