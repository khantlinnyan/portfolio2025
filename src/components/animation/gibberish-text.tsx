"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Letter = ({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) => {
  const isUpperCase = letter === letter.toUpperCase();
  const [code, setCode] = useState(letter.charCodeAt(0));

  useEffect(() => {
    let count = Math.floor(Math.random() * 30) + 5;
    const interval = setInterval(() => {
      const randomCode = Math.floor(Math.random() * 26) + 65;
      setCode(isUpperCase ? randomCode : randomCode + 32);
      count--;
      if (count === 0) {
        setCode(letter.charCodeAt(0));
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [letter, isUpperCase]);

  return (
    <span className={cn("h-fit w-fit ", className)}>
      {String.fromCharCode(code)}
    </span>
  );
};
