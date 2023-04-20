import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Services } from "./Services";
import { Contact } from "./Contact";
import Blog from "./Blog";

export const Layout = () => {
  return (
    <Routes>
          <Route path="/" element={<Blog />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={ <Contact/>}></Route>
        </Routes>
  )
}
