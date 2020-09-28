CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    text VARCHAR(1000) NOT NULL,
    UNIQUE(week)
);

INSERT INTO reports (week, text) VALUES (1, "Test text.");
INSERT INTO reports (week, text) VALUES (2, "Test text.");
INSERT INTO reports (week, text) VALUES (3, "Test text.");
INSERT INTO reports (week, text) VALUES (4, "Test text.");
INSERT INTO reports (week, text) VALUES (5, "Test text.");
INSERT INTO reports (week, text) VALUES (6, "Test text.");
INSERT INTO reports (week, text) VALUES (10, "Test text.");