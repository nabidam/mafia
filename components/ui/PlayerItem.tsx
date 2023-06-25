import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import Pencil from "../icons/Pencil";
import Trash from "../icons/Trash";

const PlayerItem = ({
  className,
  children,
  player,
  ...props
}: {
  className?: string;
  children?: ReactNode;
  player: {
    id: number;
    name: string;
  };
}) => (
  <li
    className={cn(
      "flex flex-row w-full rounded-lg border bg-card text-card-foreground shadow-sm py-2 px-4 with-shadow",
      className
    )}
    {...props}
  >
    {children ?? (
      <>
        <div className="w-[90%]">{player.name}</div>
        <div className="flex gap-2">
          <div className="cursor-pointer">
            <Pencil />
          </div>
          <div className="cursor-pointer">
            <Trash />
          </div>
        </div>
      </>
    )}
  </li>
);

export default PlayerItem;
