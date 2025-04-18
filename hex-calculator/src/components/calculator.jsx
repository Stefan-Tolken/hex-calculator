'use client';

import { useRef, useState } from "react";
import HexKeys from "./hexKeys";
import Operators from "./operatorKeys";
import FunctionKeys from "./functionKeys";
import HexInput from "./hexInput";
import { add, sub, mul, div } from "@/lib/hex";
import { toast } from 'sonner'

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

  function evaluateExpression(expression) {
    const operatorMatch = expression.match(/[\+\-\*\/]/);
  
    if (!operatorMatch) {
      return 'No operator found. Use one of +, -, *, /';
    }
  
    const operator = operatorMatch[0];
    const [left, right] = expression.split(operator);
  
    switch (operator) {
      case '+': return add(left, right);
      case '-': return sub(left, right);
      case '*': return mul(left, right);
      case '/': return div(left, right);
      default: return 'Unsupported operator';
    }
  }

  const handleEquals = () => {
    const result = evaluateExpression(input);

    const isError =
      result === 'No operator found. Use one of +, -, *, /' ||
      result === 'Unsupported operator' ||
      result === 'Input values must not exceed 2 hex digits' ||
      result === 'Inputs must be valid hexadecimal numbers (00 to FF)' ||
      result === 'Result exceeds 4 hex digits' ||
      result === 'Subtraction cannot result in a negative value' ||
      result === 'Division by zero is not allowed';

    if (isError) {
      toast.error(result, {
        duration: 3000,
      });
      setInput('');
    } else {
      setInput(result);

      setTimeout(() => {
        inputRef.current?.setSelectionRange(result.length, result.length);
      }, 0);
    }
  };

  return (
    <div className="space-y-4 p-6 rounded-2xl bg-background shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff] max-w-md w-full mx-auto">
      <HexInput ref={inputRef} value={input} onChange={setInput} />
      <HexKeys onClick={handleInsert} />
      <Operators onClick={handleInsert} />
      <FunctionKeys
        onClear={() => setInput("")}
        onBackspace={handleBackspace}
        onEquals={handleEquals}
      />
    </div>
  );
}