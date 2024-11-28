# Authentication App

A simple authentication application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to register, log in, and manage their recovery codes for account recovery.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- User registration and login
- Password recovery and management
- View and download recovery codes
- Secure user authentication

## Technologies Used

- **MongoDB**: NoSQL database for storing user data
- **Express.js**: Web application framework for Node.js
- **React.js**: JavaScript library for building user interfaces
- **Node.js**: JavaScript runtime environment for server-side development

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hharsh0805/authentication-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd authentication-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up your environment variables. Create a `.env` file in the root directory and add the necessary configurations (e.g., database connection string, JWT secret).

5. Start the application:
   ```bash
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your web browser to access the application.
- Follow the on-screen instructions to register and log in.

## API Endpoints

- **POST /api/register**: Register a new user
- **POST /api/login**: Log in an existing user
- **GET /api/recovery-codes**: Retrieve recovery codes for the logged-in user

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Contact

For any inquiries or feedback, please reach out to [your_email@example.com].

