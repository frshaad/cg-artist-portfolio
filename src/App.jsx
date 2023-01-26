import { useEffect, useState } from "react";
import { DarkModeProvider } from "./contexts/DarkMode";
import { Home } from "./pages/Home";
import "./styles/loading-screen.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6500);
  }, []);

  return (
    <DarkModeProvider>
      {loading ? (
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
              ></pattern>
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
              className='text-2xl md:text-6xl xl:text-9xl'
              text-anchor='middle'
            >
              MAHDI BAHMANI
            </text>
          </svg>
        </div>
      ) : (
        <Home />
      )}
    </DarkModeProvider>
  );
};
