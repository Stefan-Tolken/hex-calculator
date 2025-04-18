import { Button } from "@/components/ui/button";

const operators = ["+", "-", "*", "/"];

export default function Operators({ onClick }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {operators.map((op) => (
        <Button key={op} onClick={() => onClick?.(op)}>
          {op}
        </Button>
      ))}
    </div>
  );
}