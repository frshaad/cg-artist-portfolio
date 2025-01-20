import { motion } from "framer-motion";
import { useEffect } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useDarkMode } from "../contexts/DarkMode";
import "../index.css";

export const ShowcaseHeader = () => {
  const { isOn, setIsOn } = useDarkMode();

  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isOn]);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="font-sans mb-4 flex items-center justify-between fade-down relative">
      <p className="cursor-pointer text-base text-gray-800 dark:text-gray-50 md:text-lg">
        <span className="font-bold">Mahdi</span>
        <span className="font-extralight">Bahmani</span>
      </p>

      <div className="flex items-center justify-center">
        <a
          href="#contact"
          className="dark-shadow dark:light-shadow  mx-auto mr-6 hidden items-center rounded-lg bg-black px-8 py-2 text-center text-white dark:bg-white dark:text-black md:block"
        >
          Contact
        </a>

        <div className="switch " data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring}>
            {isOn ? (
              <div className="hidden h-full w-full items-center justify-center text-white  dark:flex ">
                <MdOutlineLightMode />
              </div>
            ) : (
              <div className="flex h-full w-full -rotate-45 items-center justify-center text-black  dark:hidden">
                <MdOutlineNightlight />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
