import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Phone, CheckCircle, Star, Info, Mountain, Clock } from "lucide-react"
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
            <h1 className="text-2xl font-bold text-primary">Wasatch Custom Fitz</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden sm:block bg-primary hover:bg-primary/90">
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
          backgroundImage: `url(${IMAGE_URLS.MOUNTAINS_2})`,
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
            <Button size="lg" variant="secondary" asChild>
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
                  Shop Hours & Booking Update
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-amber-700 dark:text-amber-300 leading-relaxed text-base">
                  Thank you so much for booking with me — I truly appreciate you being here.
                </p>
                <div className="space-y-3">
                  <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                    The new booking link found on this website is now my primary booking tool, and it's the best place
                    to schedule your visit. The Google Calendar link is still available for now, but any appointments
                    made through Google will require a deposit to hold your spot.
                  </p>
                  <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                    If you do use Google Calendar, please double-check the time zone in your confirmation email and
                    email me right away if it looks off.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 text-lg">Winter Shop Hours</h4>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mb-4">October 1st - April 1st</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Sunday:</span>
                      <span className="text-amber-700 dark:text-amber-300">10 AM–6 PM</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Monday:</span>
                      <span className="text-amber-700 dark:text-amber-300">2 PM–7 PM</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Tuesday:</span>
                      <span className="text-amber-700 dark:text-amber-300">Closed</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Wednesday:</span>
                      <span className="text-amber-700 dark:text-amber-300">2 PM–7 PM</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Thursday:</span>
                      <span className="text-amber-700 dark:text-amber-300">2 PM–7 PM</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Friday:</span>
                      <span className="text-amber-700 dark:text-amber-300">9 AM–6 PM</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-amber-800 dark:text-amber-200 w-24">Saturday:</span>
                      <span className="text-amber-700 dark:text-amber-300">9 AM–6 PM</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 space-y-2">
                  <p className="text-sm text-amber-600 dark:text-amber-400 italic">
                    Times are for appointments and boot pickups. All fittings and work is still by appointment.
                  </p>
                  <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                    Thanks again — I'm excited to see you in the shop, and as always… let's keep doing our pray-for-snow
                    dances!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
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
            <h3 className="text-3xl font-bold text-center text-secondary mb-8">How It Works</h3>
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
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Services & Pricing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Boot Fit Analysis</CardTitle>
                <CardDescription>New Boot Recommendation or Old Boot Refit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-secondary mb-4">$180</div>
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
                <div className="text-lg font-bold text-secondary mb-2">$65</div>
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
                <div className="text-lg font-bold text-secondary mb-2">$85</div>
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
                <div className="text-lg font-bold text-secondary mb-2">$85</div>
                <div className="text-sm text-muted-foreground mb-4">per service</div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle style={{ color: "var(--dark-blue)" }}>Hardware Services</CardTitle>
                <CardDescription>Buckles, Straps & Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-base font-bold text-secondary mb-4">Various Pricing</div>
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
                <div className="text-lg font-bold text-secondary mb-2">$20-$100</div>
                <div className="text-sm text-muted-foreground mb-4">based on complexity</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-secondary mb-12">Additional Services</h3>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3 py-3 border-b border-border/50">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Snowboarding Boots</span>
              </li>
              <li className="flex items-center gap-3 py-3 border-b border-border/50">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-foreground">Hockey Skates</span>
                  <span className="text-sm text-muted-foreground">Stretches and insoles</span>
                </div>
              </li>
              <li className="flex items-center gap-3 py-3 border-b border-border/50">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Running, Hiking, or Everyday Shoes</span>
              </li>
              <li className="flex items-center gap-3 py-3 border-b border-border/50">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Bike Insoles</span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Golf Shoes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Name Brand Products */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGE_URLS.MOUNTAINS_1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Premium Name Brand Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img
                src={IMAGE_URLS.FOOTBED}
                alt="Sidas Footbed - Custom orthotic insoles for ski boots"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-white mb-2">Sidas Footbeds</h4>
              <p className="text-sm text-white/90">
                Professional-grade custom footbeds designed to provide superior arch support and alignment
              </p>
            </div>
            <div className="text-center">
              <img
                src={IMAGE_URLS.INTUITION}
                alt="Intuition Liners - Premium ski boot liners"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-white mb-2">Intuition Liners</h4>
              <p className="text-sm text-white/90">
                Premium boot liners that mold to your foot shape when heated for exceptional comfort
              </p>
            </div>
            <div className="text-center">
              <img
                src={IMAGE_URLS.ZIPFIT}
                alt="ZipFit Liners - Cork-filled moldable ski boot liners"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-white mb-2">ZipFit Liners</h4>
              <p className="text-sm text-white/90">
                Revolutionary cork-filled liners that compress and conform to create a truly custom fit
              </p>
            </div>
            <div className="text-center">
              <img
                src={IMAGE_URLS.BOOSTER_STRAP}
                alt="Booster Strap - Power strap for ski boots"
                className="w-full max-h-64 object-contain mb-4"
              />
              <h4 className="font-semibold text-white mb-2">Booster Strap</h4>
              <p className="text-sm text-white/90">
                Aftermarket power strap that improves heel hold and power transmission for better control
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/90 mb-4">
              All products are professionally installed and fitted to ensure optimal performance
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href={LINKS.BOOK_APPOINTMENT} target="_blank" rel="noopener noreferrer">
                Schedule Your Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Boot Fitting Process */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Professional Boot Fitting Process</h3>
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
            <h3 className="text-3xl font-bold text-center text-secondary mb-8">Why Choose Wasatch Custom Fitz</h3>
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
            <h3 className="text-3xl font-bold text-primary mb-6">About the Fitter</h3>
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

      {/* Customer Reviews */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-secondary mb-12">What Our Customers Say</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg" style={{ color: "var(--dark-blue)" }}>
                      Paulina
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "My first time working with a bootfitter and I'm so glad I chose to work with Mandy!! She made the
                    process super chill and pleasant, yet you can tell she is a DIALED master of her craft. I came in
                    with boot pain from boots that were breaking down and slightly too big for me. I sent it and chose
                    to downsize my new pair and brought those in with me. She can immediately tell what the fit is like
                    and what needs to happen, thanks to her talent and many years of experience! (15+!!) I have very
                    high arches and collapsing feet, and a fun little pinky bunion. I pinpointed where it hurt and she
                    punched it out with expertise. Viola! Not only do they feel great, but I can already tell these will
                    level up my skiing! So much more control! Aw yeah! Thank you so much Mandy, you are a rockstar!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg" style={{ color: "var(--dark-blue)" }}>
                      Mike
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Mandy is the best! She knows more about ski boots and feet than anyone on earth, I think. If you
                    ski more than a few days a season and need new boots you should absolutely get a professional
                    fitting done, and I can't recommend Mandy enough. It is so worth it, you can't put a price on a
                    custom fit when you're wearing a piece of equipment that isn't designed for comfort. A custom fit
                    will make all the difference! Mandy's process is so thorough and she will get you into a boot that
                    works for you."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg" style={{ color: "var(--dark-blue)" }}>
                      Robert
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Wow. I will lead with this: I've been skiing on custom fitted boots for 15 years and never met
                    anyone as good as Mandy. If you have an issue, a question, a problem, or you just want the absolute
                    best fitting boots, go see Mandy. Wait if you have to (she gets busy) but just GO. Other fitters may
                    be intelligent and skilled, but no one cares as much about getting you skiing on equipment that
                    works. She doesn't sell boots, so her sole purpose is to help fix what you have, or help you get
                    into the right ones, then do the work to perfect them. Despite seeing other well known fitters
                    around the Wasatch area I have skied in compromised boots for years. Now I'm sure it was a
                    combination of the fact that most shops will sell you what they have, whether it's correct or not.
                    And, they're only going to work so hard to get them right. Mandy spent SIX HOURS on my boots today,
                    and they fit like they were poured around my feet. She never got frustrated, always encouraged me to
                    be patient, and she nailed them. I can't wait to take them out."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-primary mb-8">Visit Our Shop</h3>

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
                    href="mailto:mandy@wasatchfitz.com"
                    className="text-primary font-medium hover:text-primary/80 transition-colors block mb-2"
                  >
                    mandy@wasatchfitz.com
                  </a>
                  <p className="text-muted-foreground mb-3">Email for questions, or concerns</p>
                  <a
                    href={`tel:${TELEPHONE}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors text-sm block"
                  >
                    (801) 683-9425
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">Or call if preferred</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "var(--dark-blue)" }}>
                  <Clock className="h-5 w-5" />
                  Winter Shop Hours
                </CardTitle>
                <CardDescription>October 1st - April 1st</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Sunday:</span>
                    <span className="text-muted-foreground">10 AM–6 PM</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Monday:</span>
                    <span className="text-muted-foreground">2 PM–7 PM</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Tuesday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Wednesday:</span>
                    <span className="text-muted-foreground">2 PM–7 PM</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Thursday:</span>
                    <span className="text-muted-foreground">2 PM–7 PM</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Friday:</span>
                    <span className="text-muted-foreground">9 AM–6 PM</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-foreground w-24">Saturday:</span>
                    <span className="text-muted-foreground">9 AM–6 PM</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                  Times are for appointments and boot pickups. All fittings and work is still by appointment.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href={LINKS.BOOK_APPOINTMENT} target="_blank" rel="noopener noreferrer">
                  Book Your Appointment Online
                </a>
              </Button>
              <div className="flex flex-col items-center mt-6 space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto text-sm">
                      <Info className="h-3 w-3 mr-1" />
                      View After-Hours Appointments & Waitlist Information
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl">After-Hours Appointments & Waitlist</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">
                          Need to Get in Quicker or Different Time?
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          I know schedules can be tricky, so I offer a limited number of after-hours appointments for an
                          additional $50 out-of-hours fee. If you need a time outside my posted hours, just reach out —
                          I'll do my best to accommodate when I can. These are available by request and based on
                          availability, which is very limited.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Waitlist</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          I do keep a waitlist for true last-minute openings — usually when someone has to cancel within
                          24 hours due to an emergency. These spots come up quickly, are often short notice, and rare.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          For the waitlist to work smoothly, I'll need a little information from you ahead of time:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                          <li>Your last-minute availability (days/times you can come on short notice)</li>
                          <li>How long it takes you to get to the shop</li>
                          <li>What service or work you need (so I know whether the opening is long enough)</li>
                        </ul>
                        <p className="text-sm text-muted-foreground italic mb-3">
                          Please note that if someone cancels in advance (within the allowed cancellation window), those
                          spots usually get booked immediately through the system before I even see them — so the
                          waitlist mainly applies to same-day or last-minute openings.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          If you'd like to be added to the waitlist, just reach out with the details above and I'll
                          contact you if a matching spot opens up.
                        </p>
                        <p className="text-sm text-muted-foreground italic mb-2">
                          Please keep in mind that last-minute openings are limited and not guaranteed, but I'll reach
                          out if something becomes available.
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          Waitlist spots go to the first person who confirms they can make it.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto text-sm">
                      <Info className="h-3 w-3 mr-1" />
                      View Appointment, Cancellation & Refund Policy
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl">Appointment, Cancellation & Refund Policy</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <p className="text-muted-foreground">
                        We're grateful you've chosen us for your boot fitting. Because we work by appointment only and
                        stay fully booked during the winter season, your time is reserved just for you.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <div className="space-y-3">
                            <div>
                              <p className="font-medium text-sm">Cancellations & Reschedules</p>
                              <p className="text-sm text-muted-foreground">
                                We kindly ask for at least 24–48 hours' notice if you need to cancel or reschedule. You
                                can cancel from your confirmation email and reschedule from the link provided.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">No-Shows & Late Cancellations</p>
                              <p className="text-sm text-muted-foreground">
                                If you cancel with less than 24 hours' notice or don't show up, a $50 fee will be
                                charged to the card on file. This ensures waitlisted clients have a fair chance to take
                                the spot.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Refunds & Exchanges</p>
                              <p className="text-sm text-muted-foreground">
                                Because our services and products are customized for each skier, we don't offer refunds
                                or exchanges. Please feel free to reach out if we need to find a fair and reasonable
                                solution.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Life Happens</p>
                              <p className="text-sm text-muted-foreground">
                                We understand emergencies (and unexpected storms) happen. Please reach out, and we'll do
                                what we can to accommodate.
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
              <span className="font-semibold text-primary">Wasatch Custom Fitz</span>
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
