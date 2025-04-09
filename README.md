# Crappy-Blog-Application

A simple blog application built with Node.js, Express, and EJS templating engine.

## About

This project represents my **first attempt** at building a full-stack blog application. It allows users to create, read, ~update~, and ~delete~ blog posts through a web interface.

> **Note**: This was my first try at an actual project, and I acknowledge that the code base has some inconsistencies with random classes and styling. I would love to receive feedback to improve in future projects!

## Technologies Used

- **Backend**: Node.js with Express.js
- **Templating Engine**: EJS
- **Development Tools**: Nodemon for automatic server restarts
- **Frontend**: HTML with plain CSS for styling

## Installation & Setup

Follow these steps to run the project on your local machine:

1. **Clone the repository**

   ```bash
   git clone https://github.com/null-kaustubh/Crappy-Blog-Application.git
   cd Crappy-Blog-Application
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   nodemon index.js
   ```

   This command will start the server using nodemon, which automatically restarts when changes are detected.

4. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
Crappy-Blog-Application/
├── node_modules/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   └── images/
├── views/
│   ├── partials/
│   ├── pages/
│   └── ... (EJS template files)
├── routes/
├── controllers/
├── models/
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Features

- ✏️ Create new blog posts
- 📖 Read existing posts
- 🔄 Update posts
- 🗑️ Delete posts

## Future Improvements

- 🔄 Update posts
- 🗑️ Delete posts
- 🔐 Implement user authentication
- 🏷️ Add categories/tags for posts
- 🎨 Improve styling and code organization
- 💬 Add comment functionality

## Contributing

Feel free to open issues or submit pull requests with improvements or suggestions. **All feedback is welcome!**

## Contact

Kaustubh Sankhe  
Email: kaustubhs2903@gmail.com  
LinkedIn: [Kaustubh Sankhe](https://www.linkedin.com/in/kaustubhsankhe/)  
GitHub: [Kaustubh Sankhe](https://github.com/null-kaustubh)
