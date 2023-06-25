import Image from "next/image";
import Scroll from "../icons/Scroll";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

const CardWithIcon = ({ img, title }: { img: string; title: string }) => {
  return (
    <Card className="cursor-pointer card">
      <div className="flex items-center justify-center mt-4">
        <Image src={img} alt="mafia" width="64" height="64" />
      </div>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardWithIcon;
