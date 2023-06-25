import Pencil from "@/components/icons/Pencil";
import Trash from "@/components/icons/Trash";
import CenteredBox from "@/components/layout/CenteredBox";
import PlayerItem from "@/components/ui/PlayerItem";

const players = [
  {
    id: 1,
    name: "علی کاظمی",
  },
  {
    id: 1,
    name: "سجاد قدیری",
  },
  {
    id: 1,
    name: "قدرت نصیری",
  },
  {
    id: 1,
    name: "سعید خادمی",
  },
];

const Index = () => {
  return (
    <CenteredBox>
      <ul className="flex flex-col gap-4 w-full">
        {players.map((player) => (
          <PlayerItem player={player} key={player.id} />
        ))}
      </ul>
    </CenteredBox>
  );
};

export default Index;
