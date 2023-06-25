import CardWithIcon from "@/components/cards/CardWithIcon";
import CenteredBox from "@/components/layout/CenteredBox";
import Link from "next/link";

export default function Home() {
  return (
    <CenteredBox>
      <div className="w-full">
        <CardWithIcon img="/mafia.png" title="بازی جدید" className="w-full" />
      </div>
      <div className="flex flex-row justify-center gap-4 w-full flex-wrap sm:flex-nowrap">
        <Link href="/players">
          <CardWithIcon img="/player.png" title="بازیکن‌ها" />
        </Link>
        <CardWithIcon img="/list.png" title="بازی‌ها" />
      </div>
    </CenteredBox>
  );
}
