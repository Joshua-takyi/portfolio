import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/homepage";
import ProjectPage from "./pages/projects/project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
