import { ShowcaseHeader } from "./ShowcaseHeader";
import { ShowcaseInfo } from "./ShowcaseInfo";
import { ShowcaseSocial } from "./ShowcaseSocial";

export const ShowcaseContent = () => {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-6xl flex-col items-stretch justify-between p-10 2xl:h-auto">
      <ShowcaseHeader />
      <ShowcaseInfo />
      <div className="flex flex-col-reverse items-end justify-between md:flex-row">
        <ShowcaseSocial />
      </div>
    </div>
  );
};
