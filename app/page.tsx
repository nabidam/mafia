import CardWithIcon from "@/components/cards/CardWithIcon";
import CenteredBox from "@/components/layout/CenteredBox";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <CenteredBox>
        <div className="w-full">
          <CardWithIcon img="/mafia.png" title="بازی جدید" className="w-full" />
        </div>
        <div className="flex flex-row justify-center gap-4 w-full flex-wrap sm:flex-nowrap">
          <CardWithIcon img="/player.png" title="بازیکن‌ها" />
          <CardWithIcon img="/list.png" title="بازی‌ها" />
        </div>
      </CenteredBox>
    </div>
  );
}
