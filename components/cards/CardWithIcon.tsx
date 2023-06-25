import Image from "next/image";
import Scroll from "../icons/Scroll";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { cn } from "@/lib/utils";

const CardWithIcon = ({
  img,
  title,
  className,
}: {
  img: string;
  title: string;
  className?: string;
}) => {
  return (
    <Card className={cn("cursor-pointer card w-[150px] sm:w-full", className)}>
      <div className="flex items-center justify-center mt-4">
        <Image src={img} alt="mafia" width="64" height="64" />
      </div>

      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardWithIcon;
