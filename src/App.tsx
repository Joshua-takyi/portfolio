import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
