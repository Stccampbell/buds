CREATE TABLE IF NOT EXISTS user_plants (
    id SERIAL PRIMARY KEY,
    api_reference VARCHAR(500),
    plant_name VARCHAR(255),
    user_id INTEGER REFERENCES users(id)
);