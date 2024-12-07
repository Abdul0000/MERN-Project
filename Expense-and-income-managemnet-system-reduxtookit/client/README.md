# **Expense Management System**

An **Expense Management System** designed to help users effectively manage and track their income and expenses. The system provides powerful visualization, filtering, and exporting functionalities.

---

## **Features**

### **User Authentication**

- Secure **user registration** and **login**.
- Secret question functionality for **password recovery**.
- JWT-based **authentication and session management**.

### **Dashboard**

- Visual representation of data with:
  - **Line Charts** for income and expense trends.
  - **Bar Charts** for month-wise comparisons.
  - **Pie Charts** for visualizing total income and expenses.
- Displays **email-specific expenses**.

### **Expense Management**

- **Filter Expenses**:
  - Filter by a date range.
  - Search expenses by description or keywords.
- **Export Data**:
  - Export filtered expenses as a **CSV file**.
- Add, delete, and modify income/expenses seamlessly.

### **Responsive Design**

- Fully responsive design using **TailwindCSS**, ensuring usability across devices.

---

## **Installation and Setup**

### **Requirements**

- Node.js
- MongoDB (local or hosted, e.g., MongoDB Atlas)

### **Steps to Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repository/expense-management.git
   cd expense-management
   ```

2. **Backend Setup**

   - Navigate to the project root and install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Start the backend server:
     ```bash
     npm run server
     ```

3. **Frontend Setup**

   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`.

---

## **Tech Stack**

### **Frontend**

- ReactJS
- Redux Toolkit
- TailwindCSS
- Recharts (charts and data visualization)

### **Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## **How to Use**

1. **Register/Login**:

   - Register with your email and create an account.
   - Recover your password using the secret question if needed.

2. **Dashboard**:

   - View expense and income trends through interactive charts.

3. **Filter Expenses**:

   - Search or filter expenses by dates and keywords.

4. **Export Data**:

   - Export filtered expenses as a **CSV file**.

5. **Logout**:
   - Safely log out from the system.

---

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit your changes and push to your fork.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

### **Contact**

For issues, questions, or suggestions, feel free to contact [your-email@example.com](mailto:your-email@example.com).

---

Start managing your finances with the **Expense Management System**! 🚀
