package com.arnavjagetiya.campusconnect.config;

import org.flywaydb.core.Flyway;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

/**
 * Explicit Flyway configuration for Spring Boot 4.x.
 *
 * <p>Spring Boot 4.x removed built-in Flyway auto-configuration classes from spring-boot-autoconfigure.
 * This configuration manually initializes and executes Flyway migrations eagerly upon bean creation
 * ensuring all migrations complete before JPA/Hibernate connects to the database.</p>
 */
@Configuration
public class FlywayConfig {

    private static final Logger log = LoggerFactory.getLogger(FlywayConfig.class);

    @Bean
    public Flyway flyway(DataSource dataSource) {
        log.info("Running Flyway database migrations...");
        Flyway flyway = Flyway.configure()
                .dataSource(dataSource)
                .locations("classpath:db/migration")
                .load();

        var result = flyway.migrate();
        log.info("Flyway migrations complete — {} migration(s) applied.", result.migrationsExecuted);

        return flyway;
    }
}
