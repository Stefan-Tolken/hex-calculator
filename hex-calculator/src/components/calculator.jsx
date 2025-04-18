'use client';

import { useRef, useState } from "react";
import HexKeys from "./hexKeys";
import Operators from "./operatorKeys";
import FunctionKeys from "./functionKeys";
import HexInput from "./hexInput";

export default function Calculator() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleInsert = (val) => {
    const el = inputRef.current;
    const cursorPos = el.selectionStart;
  
    const before = input.slice(0, cursorPos);
    const after = input.slice(cursorPos);
  
    const newVal = before + val + after;
    setInput(newVal);
  
    setTimeout(() => {
      el.focus();
      const newCursorPos = cursorPos + val.length;
      el.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBackspace = () => {
    const el = inputRef.current;
    const cursorPos = el.selectionStart;

    if (cursorPos === 0) return;

    const before = input.slice(0, cursorPos - 1);
    const after = input.slice(cursorPos);

    const newVal = before + after;
    setInput(newVal);

    setTimeout(() => {
      el.focus();
      el.setSelectionRange(cursorPos - 1, cursorPos - 1);
    }, 0);
  };

  return (
    <div className="space-y-4 p-6 rounded-2xl bg-background shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff] max-w-md w-full mx-auto">
      <HexInput ref={inputRef} value={input} onChange={setInput} />
      <HexKeys onClick={handleInsert} />
      <Operators onClick={handleInsert} />
      <FunctionKeys
        onClear={() => setInput("")}
        onBackspace={handleBackspace}
        onEquals={() => {/* hook this up later */}}
      />
    </div>
  );
}