import clsx from "clsx";
// import { openSans } from "@/app/font";

type ButtonProps = {
  color: "blue" | "yellow";
  children: React.ReactNode;
};
export const Button = ({ color, children }: ButtonProps) => {
  return (
    <div
      className={clsx(
        `px-6 py-2 rounded-md font-medium cursor-pointer`,
        color === "blue"
          ? "text-eggwhite bg-lightblue"
          : "text-darkblue bg-accent"
      )}
    >
      {children}
    </div>
  );
};
