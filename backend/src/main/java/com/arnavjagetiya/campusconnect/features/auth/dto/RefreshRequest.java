package com.arnavjagetiya.campusconnect.features.auth.dto;

import jakarta.validation.constraints.NotBlank;

/**
 * Request DTO for token refresh.
 */
public record RefreshRequest(
        @NotBlank(message = "Refresh token is required")
        String refreshToken
) {}
