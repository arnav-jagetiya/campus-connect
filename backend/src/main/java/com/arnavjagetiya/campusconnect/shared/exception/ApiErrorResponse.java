package com.arnavjagetiya.campusconnect.shared.exception;

import java.time.Instant;
import java.util.Map;

/**
 * Uniform API error response shape returned by all exception handlers.
 */
public record ApiErrorResponse(
        int status,
        String error,
        String message,
        Map<String, String> fieldErrors,
        Instant timestamp
) {
    public ApiErrorResponse(int status, String error, String message) {
        this(status, error, message, null, Instant.now());
    }

    public ApiErrorResponse(int status, String error, String message, Map<String, String> fieldErrors) {
        this(status, error, message, fieldErrors, Instant.now());
    }
}
