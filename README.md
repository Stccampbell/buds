# Deployed Heroku
    - https://morning-fortress-64023.herokuapp.com/

# buds
This app allows the user to keep track of their individual plants and the last date they watered them. In future updates they will be able to pull information about their plant from a large api that will be more specfic on what they need for the plant. Unfortunately that was not added this time.

# WireFrames and Schema
these are included in the pre-production folder.

# User stories
    - The user should be able to login.
    - The user should be able to register.
    - The user should be able to see their plants when they login.
    - The user should be able to add new plants.
    - The user should be able to change the name of their plants.
    - The user should be able to view the last time they fed their plant.
    - The user should be able to update the last time they fed their plant.
    - The user should be able to remove plants from their list.

    Unreached User Stories
    - The user should be able to search through different plants.
    - The user should be able to add plants from the search section.
    - The user should be able to view photos of info about plants associated with their own.
    - The user should be able to get reminders of when their plants are needing watering.
    - The user should be able to see a monthly view of their watering habits.

# Run Locally
in your .env file you will need to create a database name. I went with buds but as long as you have DB_NAME="your_db_name" you will be fine. You will also need to create a secret key SECRET_KEY="your_secret_key" for the user auth. Finally in the update where I add the trefle api functionality you will need to include your own user auth in there as well TREFLE_API_KEY="your_trefle_key."

you will need to run npm install as well for the various packages included.

# Future updates
currently nothing on the site is broken unfortunately things are a little limited since the api was not integrated. There are three future updates.
    - The first will add the api and allow you to search through plants, add plants to your profile from the search page, and view your plants mixed with info from the api.
    - The second update will improve upon the tracking system. You will be able to see this months calander and the days in which you watered the plant. A email reminder will also be sent to you alerting you of your next watering.
    - The last update will be mostly cosmetic fixing up the styling of the site.

# HTTP routes
    - https://morning-fortress-64023.herokuapp.com
        - renders the page that leads the user to one page or another.

    - https://morning-fortress-64023.herokuapp.com/auth/login
        - get: brings the user to the ejs page to login.
        - post: logs the user in.

    - https://morning-fortress-64023.herokuapp.com/auth/logout
        - get: logs the user out.

    - https://morning-fortress-64023.herokuapp.com/user/new
        - get: renders the ejs for the user to register.

    - https://morning-fortress-64023.herokuapp.com/plants
        - get: give a full index of all plants associated with that user.
        - post: creates a new user associated with that user.
    - https://morning-fortress-64023.herokuapp.com/plants/:id([0-9]+)
        - get: shows an individual plant by id associated with that user.
        - post: adds a new time log for the plant that is asociated with that user.
        - put: updates the name of that users plant.
        - delete: deletes that plant.


