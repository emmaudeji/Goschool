import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header/Header";
import Footer from "./common/Footer";
import {
  Home,
  About,
  Contact,
  Courses,
  Journals,
  Instructors,
  NotFound,
  Pricing,
  Login,
  SignUp,
  Profile,
} from "./pages";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="journals" element={<Journals />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
