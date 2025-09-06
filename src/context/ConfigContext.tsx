import { useState, useContext, createContext } from "react"
import type { Dispatch, SetStateAction } from "react"

interface ConfigContextType {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

const ConfigContext = createContext<ConfigContextType | null>(null)

export const useConfigContext = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error("useConfigContext must be used within a ConfigProvider")
  }
  return context
}

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("color")
      if (stored) return stored === "dark"
      return false // Default to light mode
    }
    return false // Default to light mode
  })

  return (
    <ConfigContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
