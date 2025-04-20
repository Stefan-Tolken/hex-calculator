import { Input } from "@/components/ui/input";
import { forwardRef } from "react";

const HexInput = forwardRef(({ value, onChange }, ref) => {
  return (
    <Input
      ref={ref}
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="text-right text-xl"
    />
  );
});

export default HexInput;