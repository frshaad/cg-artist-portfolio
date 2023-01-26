import { useEffect, useState } from "react";
import { ShowcaseContent } from "./ShowcaseContent";

export const Showcase = () => {
  return (
    <section className='flex w-full flex-col-reverse transition duration-300 dark:bg-black lg:flex-row xl:h-screen xl:snap-start 2xl:min-h-[900px] '>
      <ShowcaseContent />
    </section>
  );
};
