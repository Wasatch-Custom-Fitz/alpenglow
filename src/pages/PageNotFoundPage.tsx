import { Button } from "@/components/ui/button"
import { Mountain, Home } from "lucide-react"
import { Link } from "react-router-dom"

const PageNotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Mountain className="h-16 w-16" style={{ color: "var(--dark-blue)" }} />
        </div>

        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>

        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link to="/">
            <Home className="h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default PageNotFoundPage
