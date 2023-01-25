import { useEffect, useState } from "react";
import { ShowcaseContent } from "./ShowcaseContent";

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
    <section className='flex w-full flex-col-reverse transition duration-300 dark:bg-black lg:flex-row xl:h-screen xl:snap-start 2xl:min-h-[900px] '>
      <ShowcaseContent />
    </section>
  );
};
