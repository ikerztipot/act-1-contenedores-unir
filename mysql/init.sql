CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
    ('Unai Ruiz', 'unai@example.com'),
    ('Juan Nuñez', 'juan@example.com');