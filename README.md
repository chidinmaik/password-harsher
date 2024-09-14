# Password Hasher & Encrypter

This project is a web application built with React that provides functionalities for password hashing and encryption. It also features a floating WhatsApp button for easy contact.

## Features

- **Password Hashing**: Securely hash passwords using the latest algorithms.
- **Password Encryption**: Encrypt passwords for secure storage.
- **Password Decryption**: Decrypt encrypted passwords.
- **WhatsApp Contact Button**: A floating button that allows users to contact you via WhatsApp directly.

## Technologies Used

- React
- Express.js (for backend APIs)
- Font Awesome (for WhatsApp icon)
- CSS for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

   Your application will be running on `http://localhost:3000`.

### Configuration

- **Backend APIs**: This project assumes that the backend is running locally on `http://localhost:5000`. Adjust API URLs if needed.
- **WhatsApp Button**: Update the phone number and message in `WhatsAppButton.js`:

    ```javascript
    const phoneNumber = '1234567890'; // Replace with your number
    const message = 'Hello, I would like to get more information!'; // Predefined message
    ```

### Folder Structure

- `src/`
  - `components/`
    - `NavBar.js` – Navigation bar component
    - `Footer.js` – Footer component
    - `WhatsAppButton.js` – Floating WhatsApp button component
    - `WhatsAppButton.css` – Styles for WhatsApp button
    - `NavBar.css` – Styles for navigation bar
    - `Footer.css` – Styles for footer
  - `App.js` – Main application component
  - `App.css` – Styles for the main app
- `public/` – Public assets
- `.gitignore` – Specifies files to ignore in Git

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact:

- **Email**: blessingchidinmaik@gmail.com
- **WhatsApp**: [Your WhatsApp Number](https://wa.me/+2348133282698)
