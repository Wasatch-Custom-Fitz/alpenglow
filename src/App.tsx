import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFoundPage"
import { useConfigContext } from "./context/ConfigContext"
import { useEffect } from "react"
import { initGA } from "./utils/analytics"
import { logPageView } from "./utils/analytics"
import ComponentShowcasePage from "./pages/ComponentShowcasePage"

const App = () => {
  const { isDark } = useConfigContext()
  const location = useLocation()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    logPageView(location.pathname + location.search)
  }, [location])

  useEffect(() => {
    const root = window.document.documentElement

    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("color", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("color", "light")
    }
  }, [isDark])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/component-showcase" element={<ComponentShowcasePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
