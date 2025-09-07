import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Phone, CheckCircle, Star, Info, Mountain } from "lucide-react"
import ThemeToggle from "@/components/theme/ThemeToggle"
import SnowmanLogo from "@/components/snowman/SnowmanLogo"
import { IMAGE_URLS, LINKS, TELEPHONE } from "@/utils/constants"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SnowmanLogo className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-foreground">Wasatch Custom Fitz</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={LINKS.BOOK_APPOINTMENT} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGE_URLS.SUN_1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 text-white border-0" style={{ backgroundColor: "var(--dark-blue)" }}>
            15 Years of Experience
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Expert Ski Boot Fitting in Salt Lake City</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Personalized, precision-driven bootfitting rooted in patience, inclusivity, and deep listening. Eliminate
            pain, improve performance, and ski with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href={LINKS.BOOK_APPOINTMENT} target="_blank" rel="noopener noreferrer">
                Schedule Your Fitting
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
              style={{ borderColor: "white" }}
              asChild
            >
              <a href={`tel:${TELEPHONE}`}>
                <Phone className="h-4 w-4" />
                (801) 683-9425
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Scheduling Update Notice */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 dark:border-amber-800 bg-amber-100/50 dark:bg-amber-950/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <Info className="h-5 w-5" />
                  Notice of Scheduling Update
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                  Starting October 1st, I'll be using a new appointment system designed to make booking easier and
                  clearer. You'll notice updated appointment types, credit card required for booking, and a new
                  cancellation policy to help keep the schedule running smoothly. If you've already booked an
                  appointment before that date, your time is still confirmed — no action needed. But as always, for the
                  first little bit, please check that the time zones are accurate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Wasatch Custom Fitz, I am dedicated to delivering a personalized, precision-driven bootfitting
              experience rooted in patience, inclusivity, and deep listening. Backed by apprenticeship, classroom
              learning, and 15 years of hands-on experience. Every customer is met with care and expertise as we work
              together to understand and alleviate pain points—creating solutions that bring comfort, confidence, and
              performance to every step on the mountain.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">How It Works</h3>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The right fit changes everything. That's why I don't sell ski boots — I want the freedom to recommend
                what's truly right for you, without bias or sales pressure. My only goal is to get you skiing, running,
                or adventuring in comfort and confidence.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle style={{ color: "var(--dark-blue)" }}>Full Fit Session</CardTitle>
                    <CardDescription>Where we start - the foundation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Think of it as the foundation: I'll evaluate your fit, take notes, and often begin custom work
                      like footbeds during this first step. The second step is your Final Fit Session, where we refine,
                      mold, and make sure your setup feels right before you're out the door.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle style={{ color: "var(--dark-blue)" }}>Boot Work Drop-Off</CardTitle>
                    <CardDescription>Need something quick?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A Boot Work Drop-Off lets you leave your boots with me for adjustments, and I'll have them ready
                      in order of arrival — usually by the next day.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 transition-colors md:col-span-2">
                  <CardHeader>
                    <CardTitle style={{ color: "var(--dark-blue)" }}>Custom Fit Session</CardTitle>
                    <CardDescription>When your needs fall somewhere in between</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A Custom Fit Session gives us time together to handle liner molding, footbeds, or detailed
                      adjustments on the spot. It's hands-on, collaborative, and built around you.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Services & Pricing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Boot Fit Analysis</CardTitle>
                <CardDescription>New Boot Recommendation or Old Boot Refit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">$180</div>
                <div className="text-sm text-muted-foreground mb-4">or $90/hour</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    In-depth foot assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Biomechanics evaluation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Personalized fit strategy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Boot Modifications</CardTitle>
                <CardDescription>Stretches, Punches & Grinding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">$65</div>
                <div className="text-sm text-muted-foreground mb-4">per area or $225 for boot pair package</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Targeted pressure relief
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Custom shell modifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Professional precision work
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Liner Services</CardTitle>
                <CardDescription>Heat Molding & Custom Fitting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">$85</div>
                <div className="text-sm text-muted-foreground mb-4">included with new liner purchase</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Professional heat molding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Custom fit optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Comfort enhancement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Shell Molding</CardTitle>
                <CardDescription>Custom Shell Modifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">$85</div>
                <div className="text-sm text-muted-foreground mb-4">per service</div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Hardware Services</CardTitle>
                <CardDescription>Buckles, Straps & Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-foreground mb-4">Various Pricing</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Buckle Replacements: $35-$75
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Booster Strap Install: $25
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Heating System Install: $25
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Volume Reduction</CardTitle>
                <CardDescription>Foam Padding Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">$20-$100</div>
                <div className="text-sm text-muted-foreground mb-4">based on complexity</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Boot Fitting Process */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Professional Boot Fitting Process</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img
                src={IMAGE_URLS.FOOT_MEASUREMENT}
                alt="Professional foot measurement using precision tools"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2">Precision Measurement</h4>
              <p className="text-sm text-muted-foreground">
                Using professional-grade tools to ensure accurate foot measurements and proper boot sizing
              </p>
            </div>
            <div className="text-center">
              <img
                src={IMAGE_URLS.MANDY_BOOT}
                alt="Custom fitted ski boot showing professional craftsmanship"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2">Custom Craftsmanship</h4>
              <p className="text-sm text-muted-foreground">
                Professional modifications and adjustments tailored to your unique foot shape and skiing style
              </p>
            </div>
            <div className="text-center">
              <img
                src={IMAGE_URLS.BOOT_FITTING_PROCESS}
                alt="Ski boot fitting process with professional equipment"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2">Expert Fitting</h4>
              <p className="text-sm text-muted-foreground">
                Hands-on boot fitting with attention to detail and personalized adjustments for optimal comfort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">Why Choose Wasatch Custom Fitz</h3>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-lg text-foreground leading-relaxed italic">
                "I know that some customers come in feeling like they've been dismissed or talked over in the past—like
                they haven't been given the full picture because someone assumed they wouldn't understand. That doesn't
                sit right with me. I believe everyone deserves clear, respectful communication, no matter their
                experience level. My goal is to create a space where questions are always welcome, curiosity is
                encouraged, and you leave not just with a better fit, but with a better understanding of your gear."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">About the Fitter</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bootfitting is part science, part art—and a little bit therapy. Every fit is a collaboration: I listen
              deeply, analyze each detail, and craft solutions that not only remove discomfort but also unlock
              confidence and performance. My goal? To help you forget about your feet so you can focus on the adventure
              ahead.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--dark-blue)" }}
                >
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">15 Years Experience</h4>
                <p className="text-sm text-muted-foreground">Backed by apprenticeship and classroom learning</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Precision-Driven</h4>
                <p className="text-sm text-muted-foreground">Millimeter-perfect adjustments for optimal fit</p>
              </div>
              <div className="text-center">
                <div
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--dark-blue)" }}
                >
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Local Expertise</h4>
                <p className="text-sm text-muted-foreground">Understanding Utah's unique skiing conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">Visit Our Shop</h3>

            <div className="flex justify-center mb-12">
              <img
                src={IMAGE_URLS.WASATCH_BANNER_LOGO}
                alt="Wasatch Custom Fitz Boot Fitting Logo"
                className="max-w-md w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" style={{ color: "var(--dark-blue)" }}>
                    <MapPin className="h-5 w-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">357 E 3300 S #9</p>
                  <p className="text-muted-foreground">South Salt Lake, UT 84115</p>
                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Button variant="secondary" size="sm" asChild className="text-xs">
                      <a href={LINKS.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                      </a>
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="text-xs">
                      <a href={LINKS.APPLE_MAPS} target="_blank" rel="noopener noreferrer">
                        Open in Apple Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" style={{ color: "var(--dark-blue)" }}>
                    <Phone className="h-5 w-5" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${TELEPHONE}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    (801) 683-9425
                  </a>
                  <p className="text-muted-foreground">Call to schedule or ask questions</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href={LINKS.BOOK_APPOINTMENT} target="_blank" rel="noopener noreferrer">
                  Book Your Appointment Online
                </a>
              </Button>
              <div className="flex flex-col items-center mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Rush jobs and out-of-hours appointments available for a premium
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto text-sm">
                      <Info className="h-3 w-3 mr-1" />
                      View Appointment & Cancellation Policy
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl">Appointment & Cancellation Policy</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <p className="text-muted-foreground">
                        We're grateful you've chosen us for your boot fitting. Because we work by appointment only and
                        stay fully booked in the winter season, your time is reserved.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-3">To keep things fair for everyone:</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="font-medium text-sm">Deposit:</p>
                              <p className="text-sm text-muted-foreground">
                                A small deposit is required at booking. This goes toward your service.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Cancellations/Reschedules:</p>
                              <p className="text-sm text-muted-foreground">
                                We kindly ask for at least 24-48 hours' notice if you need to cancel or reschedule. You
                                can cancel from the confirmation email you receive, and reschedule from the link
                                provided. With proper notice, your deposit will be applied to your new appointment.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">No-Shows & Late Cancellations:</p>
                              <p className="text-sm text-muted-foreground">
                                If you cancel with less than 24 hours' notice or don't show up, the deposit is
                                non-refundable. This ensures our waitlist clients have a fair chance to take the spot.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Life Happens:</p>
                              <p className="text-sm text-muted-foreground">
                                We understand emergencies and unexpected storms happen. Please reach out, and we'll do
                                our best to accommodate.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t text-sm text-muted-foreground">
                        This policy helps us respect your time, our time, and every skier waiting for a spot. Thank you
                        for helping us keep things running smoothly!
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <SnowmanLogo className="h-6 w-6" />
              <span className="font-semibold text-foreground">Wasatch Custom Fitz</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Website engineered by{" "}
              <a
                href={LINKS.GEE_LINSKY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Garrett Polinsky
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
