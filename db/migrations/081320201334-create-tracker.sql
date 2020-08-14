CREATE TABLE IF NOT EXISTS tracker(
    id SERIAL PRIMARY KEY,
    user_plant_id INTEGER REFERENCES users_plants(id),
    day_fed TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);