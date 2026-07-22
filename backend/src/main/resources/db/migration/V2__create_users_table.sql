-- Campus Connect: User Management Schema
-- Creates the users table with authentication and profile fields.

CREATE TABLE users (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name           VARCHAR(100)  NOT NULL,
    email               VARCHAR(255)  NOT NULL UNIQUE,
    password_hash       VARCHAR(255)  NOT NULL,
    profile_picture_url VARCHAR(500)  NULL,
    bio                 VARCHAR(500)  NULL,
    enabled             BOOLEAN       NOT NULL DEFAULT TRUE,
    last_login_at       TIMESTAMPTZ   NULL,
    created_at          TIMESTAMPTZ   NOT NULL DEFAULT now(),
    updated_at          TIMESTAMPTZ   NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_email ON users (email);
