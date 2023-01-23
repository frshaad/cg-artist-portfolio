import { DarkModeProvider } from "./contexts/DarkMode";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
};
