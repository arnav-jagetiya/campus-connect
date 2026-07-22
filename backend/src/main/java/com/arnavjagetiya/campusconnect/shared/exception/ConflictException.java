package com.arnavjagetiya.campusconnect.shared.exception;

/**
 * Thrown when a resource conflict occurs, such as a duplicate email (HTTP 409).
 */
public class ConflictException extends RuntimeException {
    public ConflictException(String message) {
        super(message);
    }
}
