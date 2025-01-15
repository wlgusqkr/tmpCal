import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WeeklyMealPlan from "./pages/WeeklyMealPlan/WeeklyMealPlan";
import SignUpPage from "./pages/SignUp/SignUp";
import Home from "./components/Home/Home";
import SignInPage from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/week-meal-plan" element={<WeeklyMealPlan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
