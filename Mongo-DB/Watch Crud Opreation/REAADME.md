# Watch CRUD Operation

A simple and clean **CRUD (Create, Read, Update, Delete)** web application for managing watch products.
Built using **Node.js**, **Express**, **EJS**, and **MongoDB**, with image upload functionality.

---

## 🚀 Features

* Add new watch products
* Edit existing products
* Delete products
* View all watches in a clean UI
* Image upload support (stored in `/uploads`)
* MVC-based folder structure
* Public assets (CSS, JS, Images) served from `/public`

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **EJS (Templating Engine)**
* **Multer (Image Upload)**
* **CSS / JavaScript (Frontend)**

---

## 📂 Project Structure

```
Watch Crud Operation
│
├── config/              # Database configuration
├── model/               # Mongoose schemas
├── public/              # CSS, JS, Images
├── uploads/             # Uploaded watch images
├── views/               # EJS templates
├── server.js            # Main server file
├── package.json
└── package-lock.json
```

---

## 📦 Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node server.js
```

### 3. Go to browser

```
http://localhost:8000
```

---

## 🖼️ Usage Flow

1. Open the homepage
2. Add a watch using the form
3. Edit or delete existing watches
4. Uploaded images automatically save in the `/uploads` folder

---

## 🔧 Environment Variables (Optional)

If you want a `.env` file:

```
PORT=8000
MONGODB_URL=your_mongodb_connection_string
```

---

## 📌 Notes

* Ensure MongoDB is installed and running
* Folder names must stay the same (`uploads`, `public`, etc.)
* You can customize UI inside `/views` and `/public/css`

---

## 📄 License

This project is for personal or educational use.
Feel free to modify and customize it.
