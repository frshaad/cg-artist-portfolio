import { Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkMode";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export const App = () => {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </DarkModeProvider>
  );
};
