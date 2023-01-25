import { useEffect, useState } from "react";
// import Fade from "react-reveal/Fade";
// import { AnimatePresence, motion } from "framer-motion";
import HashLoader from "react-spinners/HashLoader";
import { DarkModeProvider } from "./contexts/DarkMode";
import { Home } from "./pages/Home";
import "./styles/loading-screen.scss";

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
        // <div id='loading-container'>
        //   <HashLoader color='#36d7b7' loading size={120} speedMultiplier={1} />
        // </div>
        <div class='patterns fade-loading'>
          <svg width='100%' height='100%'>
            <defs>
              <pattern
                id='polka-dots'
                x='0'
                y='0'
                width='100'
                height='100'
                patternUnits='userSpaceOnUse'
              >
                {/* <circle fill='rgb(14, 116, 144)' cx='25' cy='25' r='3'></circle> */}
              </pattern>
              <style>
                @import url("https://fonts.googleapis.com/css?
                family=Lora:400,400i,700,700i");
              </style>
            </defs>

            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#polka-dots)'
            >
              {" "}
            </rect>

            <text
              x='50%'
              y='50%'
              className='text-2xl font-display uppercase md:text-6xl xl:text-9xl'
              text-anchor='middle'
            >
              Mahdi Bahmani
            </text>
          </svg>
        </div>
      ) : (
        <Home />
      )}
    </DarkModeProvider>
  );
};
