CREATE TABLE IF NOT EXISTS user_tracker(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    tracker_id INTEGER REFERENCES tracker(id),
    api_reference VARCHAR(500),
    plant_name VARCHAR(255)
)