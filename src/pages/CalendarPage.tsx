import { useEffect } from "react"
import { Loader } from "lucide-react"
import { LINKS } from "@/utils/constants"

const CalendarPage = () => {
  useEffect(() => {
    window.location.href = LINKS.BOOK_APPOINTMENT
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader className="h-8 w-8 animate-spin" />
    </div>
  )
}

export default CalendarPage
