import { useEffect, useState } from "react";
import { ShowcaseContent } from "./ShowcaseContent";
import { ShowcaseSlider } from "./ShowcaseSlider";

export const Showcase = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <section className='flex flex-col-reverse bg-gray-50 transition duration-300 dark:bg-black lg:max-h-screen lg:flex-row '>
      {/* <ShowcaseSlider /> */}
      <ShowcaseContent />
    </section>
  );
};
