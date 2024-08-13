"use client";
import { useEffect } from "react";

import { Switch } from "@/components/ui/switch";
import { useRecoilState } from "recoil";
import { DarkModeState } from "@/store/atom";

function ThemeToggle() {
  const [darkModeState, setDarkModeState] = useRecoilState(DarkModeState);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkModeState ? "light" : "dark");
    root.classList.add(darkModeState ? "dark" : "light");
  }, [darkModeState]);

  return (
    <div className="mr-10">
      <Switch
        checked={darkModeState}
        onClick={() => setDarkModeState(!darkModeState)}
      />
    </div>
  );
}

export default ThemeToggle;
