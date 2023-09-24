import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Timeline from "./pages/timeline";
import Contact from "./pages/contact";
import NotFound from "./pages/not_found";
import Rick from "./components/rick";
import RickMessageState from "./context/rick/rickMessageState";

function App() {
  return (
    <RickMessageState>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<About />} errorElement={<NotFound />} />
          <Route
            path="/projects"
            element={<Projects />}
            errorElement={<NotFound />}
          />
          <Route
            path="/timeline"
            element={<Timeline />}
            errorElement={<NotFound />}
          />
          <Route
            path="/contact"
            element={<Contact />}
            errorElement={<NotFound />}
          />
        </Routes>
        <Rick />
      </BrowserRouter>
    </RickMessageState>
  );
}

export default App;
