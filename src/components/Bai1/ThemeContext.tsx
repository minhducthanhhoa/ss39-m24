import React, {useState, createContext } from 'react'
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }

export default function ThemeContext() {
    const ThemeContext = createContext<ThemeContextType | null>(null);
    const [theme, setTheme] = useState("blue");
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "blue" ? "red" : "blue");
      };
  return (
    <div>
       
    </div>
  )
}
