import { useEffect, useState } from "react";
// import Fade from "react-reveal/Fade";
// import { AnimatePresence, motion } from "framer-motion";
import HashLoader from "react-spinners/HashLoader";
import { DarkModeProvider } from "./contexts/DarkMode";
import { Home } from "./pages/Home";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <DarkModeProvider>
      {loading ? (
        <div id='loading-container'>
          <HashLoader color='#36d7b7' loading size={120} speedMultiplier={1} />
        </div>
      ) : (
        <Home />
      )}
    </DarkModeProvider>
  );
};
