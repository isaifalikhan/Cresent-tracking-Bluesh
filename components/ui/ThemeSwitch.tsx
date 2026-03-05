"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  
  const isDark = theme === "dark"
  
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }
  
  // Default to light theme if not set
  React.useEffect(() => {
    if (!theme) {
      setTheme("light")
    }
  }, [theme, setTheme])
  
  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}