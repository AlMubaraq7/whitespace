import clsx from "clsx";
import { lato } from "./font";
import HeroBg from "./components/svg/HeroBackground";

export default function Home() {
  return (
    <div className="text-center bg-darkblue p-48 text-eggwhite relative overflow-hidden">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-5xl font-bold capitalize">
          Get More Done with Whitespace
        </h1>
        <p className={clsx(`${lato.className} font-[300] text-lg`)}>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
      </div>
      <HeroBg className="absolute top-0 left-0" />
    </div>
  );
}
