package com.arnavjagetiya.campusconnect.features.auth.dto;

/**
 * Response DTO returned after successful token refresh.
 */
public record TokenResponse(String accessToken) {}
