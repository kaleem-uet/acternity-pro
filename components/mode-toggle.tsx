"use client"
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'

export default function ModeToggle() {
      const { theme, setTheme } = useTheme();

      const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </button>
  );
}
