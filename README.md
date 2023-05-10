# 💪 Workout Bud

### 💻 Code Stack
JavaScript, Node.js, React, Material UI, CSS, Express.js, Knex.js, MySQL database

### 📋 Overview
Workout Bud is a full-stack web application that allows users to track and build their workouts by logging them! The reason Workout Bud was created is because I am very passionate about going to the gym. I wanted to help others to feel more confident about going and stay consistent. 

Starting my fitness journey, I had a buddy who helped me. He showed me what exercises to do, how to do them properly, what I should and shouldn't do. Without him, I probably would have quit going. I realized everyone not has that buddy to help them track their workouts, and show them what to do. This is what Workout Bud solves. 

### ✨ Features
- Exercise database
  - Contains description, muscle group and equipment neede for each exercise
- Log workout page
- Dashboard page
  - Shows recent activity of the user
  - Sorted from newest to oldest
  - Ability to delete workouts
- User accounts
  - Registration and login system
  - Secured passwords by hashing them using bcrypt
- User settings
  - Ability to change password
  - Ability to delete account

### 🛠️ Installation
1. Open integrated terminals for the "api" and "ui" folders.
2. In each terminal, run `npm install` to install dependencies
3. Make sure you have an instance of Docker running.
4. Create a database named `workoutbud_db`. 
6. In the "api" intergrated terminal, run `npx knex migrate:latest` and `npx knex seed:run` to create and seed tables

### 🚀 Starting the app
1. Using both intergrated terminals, run `npm start` to start the app! 
  * This should automatically open your browser with the link http://localhost:3000 to access the app.

2. To start, create an account! Click the login button on the navbar. In this page, it has a link "create an account" which will take you to the register page to create an account!

### 👩‍💻 Created by Addie
Addie's [GitHub](https://github.com/im-addie), [LinkedIn](https://www.linkedin.com/in/apasok/), and [Twitter](https://twitter.com/addie8fud)
