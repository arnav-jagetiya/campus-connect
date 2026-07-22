package com.arnavjagetiya.campusconnect.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Type-safe binding for JWT configuration properties under the {@code app.jwt} namespace.
 */
@ConfigurationProperties(prefix = "app.jwt")
public record JwtProperties(
        String secret,
        long accessTokenExpiration,
        long refreshTokenExpiration
) {}
