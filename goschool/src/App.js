import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header/Header";
import Footer from "./common/Footer";
import Authprovider from "./common/auth";

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
    <Authprovider>
      <Header />
      <Routes>
        <Route path="goschool" element={<Home />} />
        <Route path="goschool/about" element={<About />} />
        <Route path="goschool/journals" element={<Journals />} />
        <Route path="goschool/courses" element={<Courses />} />
        <Route path="goschool/contact" element={<Contact />} />
        <Route path="goschool/instructors" element={<Instructors />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path="goschool/pricing" element={<Pricing />} />
        <Route path="goschool/profile" element={<Profile />} />
        <Route path="goschool/login" element={<Login />} />
        <Route path="goschool/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Authprovider>
  );
}

export default App;
