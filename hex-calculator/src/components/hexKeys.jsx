import { Button } from "@/components/ui/button";

const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

export default function HexKeys({ onClick }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {hexValues.map((val) => (
        <Button key={val} onClick={() => onClick?.(val)}>
          {val}
        </Button>
      ))}
    </div>
  );
}