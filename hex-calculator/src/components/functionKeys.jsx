import { Button } from "@/components/ui/button";

export default function FunctionKeys({ onClear, onBackspace, onEquals }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button onClick={onClear}>C</Button>
      <Button onClick={onBackspace}>⌫</Button>
      <Button onClick={onEquals}>=</Button>
    </div>
  );
}