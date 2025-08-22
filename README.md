# EIMS: Educational Information Management System - Department Edition

A modern, full-stack web application for managing academic course enrollments and user management within educational departments. Built with the MERN stack and featuring role-based access control.

##  Features

### **Multi-Role System**
- **Admin**: Full system management, user administration, course creation
- **Instructor**: Course management, student enrollment approval, Faculty Advisor capabilities
- **Student**: Course enrollment, status tracking, academic progress monitoring

### **Modern UI/UX**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Interface**: Clean, professional design with smooth animations
- **Intuitive Navigation**: Sidebar navigation with role-based menu items
- **Real-time Feedback**: Toast notifications and loading states

### **Course Management**
- **Course Creation**: Admins can create and manage courses with detailed information
- **Enrollment System**: Multi-level approval workflow (Instructor → Faculty Advisor)
- **Status Tracking**: Real-time enrollment status updates
- **Department Management**: Organized by academic departments

### **User Management**
- **Secure Authentication**: JWT-based authentication with OTP verification
- **Role-based Access**: Granular permissions based on user roles
- **Profile Management**: User profiles with department assignments
- **Email Notifications**: Automated email alerts for account creation and updates

##  Technology Stack

### **Frontend**
- **React.js** - Modern UI library with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing
- **Axios** - HTTP client for API communication
- **Heroicons** - Beautiful SVG icons

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Nodemailer** - Email sending functionality

##  Project Structure

```
Eims-DEP/
├── backend/
│   ├── index.js              # Main server file
│   ├── modals/               # Database models
│   │   ├── user.modal.js     # User schema
│   │   ├── course.modal.js   # Course schema
│   │   └── otp.modal.js      # OTP schema
│   └── utilities.js          # Helper functions
├── frontend/
│   ├── src/
│   │   ├── Components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   │   ├── Dashboard/   # Role-based dashboards
│   │   │   ├── Login/       # Authentication pages
│   │   │   └── Home/        # Landing page
│   │   └── utils/           # Utility functions
│   └── package.json
└── README.md
```

##  Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naveen0030/EIMS-Clg-Portal.git
   cd EIMS-Clg-Portal
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   PORT=8000
   ```

5. **Start the application**
   
   **Backend:**
   ```bash
   cd backend
   npm start
   ```
   
   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

##  Quick Start

### Development URLs
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

##  API Endpoints

### **Authentication**
- `POST /create-account` - User registration
- `POST /login` - User login
- `POST /send-otp` - Send OTP for verification
- `POST /verify-otp` - Verify OTP and complete registration
- `GET /get-user` - Get current user information

### **Course Management**
- `POST /add-course` - Create new course (Admin only)
- `GET /available-courses` - Get available courses for students
- `POST /enroll-course` - Enroll in a course
- `GET /enrolled-courses` - Get user's enrolled courses

### **User Management**
- `GET /all-users` - Get all users (Admin only)
- `POST /add-user` - Add new user (Admin only)
- `GET /view-user/:id` - Get specific user details

### **Instructor Operations**
- `GET /instructor/pending-enrollments` - Get pending enrollments
- `POST /instructor/update-enrollment` - Approve/reject enrollments
- `GET /FetchCourses` - Get instructor's courses

##  Key Features

### **Dashboard Analytics**
- **Stats Cards**: Real-time statistics for each role
- **Quick Actions**: Easy access to common tasks
- **Profile Information**: User details and account management

### **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Sidebar Navigation**: Collapsible navigation for mobile
- **Touch-Friendly**: Optimized for touch interactions

### **Security Features**
- **JWT Authentication**: Secure token-based authentication
- **OTP Verification**: Two-factor authentication via email
- **Role-based Access**: Granular permissions system
- **Input Validation**: Server-side and client-side validation


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Acknowledgments

- React.js community
- Tailwind CSS team
- MongoDB documentation
- Express.js framework

---

**EIMS-Portal** - Streamlining educational management with modern technology. 
