CREATE TABLE IF NOT EXISTS tracker(
    id SERIAL PRIMARY KEY,
    user_plant_id INTEGER REFERENCES user_plants(id),
    day_watered TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);