import CardWithIcon from "@/components/cards/CardWithIcon";
import CenteredBox from "@/components/layout/CenteredBox";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <CenteredBox>
        <CardWithIcon img="/mafia.png" title="بازی جدید" />
      </CenteredBox>
    </div>
  );
}
