import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import StudentLayout from "../layouts/StudentLayout";

// Public Pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Features from "../pages/public/Features";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

// Student Pages
import Dashboard from "../pages/student/Dashboard";
import AIRoadmap from "../pages/student/AIRoadmap";
import MyLearning from "../pages/student/MyLearning";
import Progress from "../pages/student/Progress";
import Profile from "../pages/student/Profile";

// AI Pages
import CareerGuidance from "../pages/ai/CareerGuidance";
import LearningChat from "../pages/ai/LearningChat";

// Not Found
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  // PUBLIC ROUTES
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "features",
        element: <Features />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // STUDENT ROUTES
  {
    path: "/student",
    element: <StudentLayout />,

    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "ai-roadmap",
        element: <AIRoadmap />,
      },

      {
        path: "my-learning",
        element: <MyLearning />,
      },

      {
        path: "progress",
        element: <Progress />,
      },

      {
        path: "profile",
        element: <Profile />,
      },

      // AI ROUTES
      {
        path: "career-guidance",
        element: <CareerGuidance />,
      },

      {
        path: "learning-chat",
        element: <LearningChat />,
      },
    ],
  },
]);

export default router;