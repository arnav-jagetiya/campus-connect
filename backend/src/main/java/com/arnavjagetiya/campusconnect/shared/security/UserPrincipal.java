package com.arnavjagetiya.campusconnect.shared.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

/**
 * Custom {@link UserDetails} implementation that carries the authenticated user's identity.
 */
public record UserPrincipal(UUID id, String email) implements UserDetails {

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return null; // Not needed for JWT-based auth
    }

    @Override
    public String getUsername() {
        return email;
    }
}
