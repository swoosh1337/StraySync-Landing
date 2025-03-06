import Link from "next/link"
import Image from "next/image"
import { MapPin, Navigation, Bell, Settings, Camera, Map, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import SmoothScroll from "@/components/SmoothScroll"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-[#4CAF50]" />
            <span className="text-xl font-bold text-[#4CAF50]">StraySync</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
                Features
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
                Contact
              </a>
            </nav>
            <Button variant="outline" className="md:hidden" size="icon">
              <PawPrint className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#E8F5E9] via-[#F1F8E9] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#2E7D32]">
                    Help Stray Animals Find Their Way
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    StraySync helps you locate and track stray animals in your area. Pin locations, upload photos, and
                    connect with others to help our furry friends.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white">Download Now</Button>
                  <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50]">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[40px] border-[8px] border-black bg-black shadow-xl">
                  <div className="absolute inset-0 bg-[#E8F5E9]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/df6b9434-38a1-41d1-9407-f2d81dae0dc8-FGqkK6phTkxjdK7zPayJCNrcMNzAXv.jpeg"
                      alt="StraySync App Screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute top-0 inset-x-0 h-6 bg-black">
                    <div className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-[#E8F5E9] px-3 py-1 text-sm text-[#2E7D32]">Features</div> */}
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#2E7D32]">
                  Everything You Need to Help Stray Animals
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StraySync provides powerful tools to locate, track, and help stray animals in your community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <Map className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#2E7D32]">Interactive Map</h3>
                    <p className="text-gray-600">
                      View stray animal sightings on a Google Maps-like interface with real-time updates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#2E7D32]">Add Animal Sightings</h3>
                    <p className="text-gray-600">
                      Upload photos and mark the exact location of stray cats and dogs you encounter.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#2E7D32]">Animal Details</h3>
                    <p className="text-gray-600">
                      View photos, descriptions, and get directions to stray animal locations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#2E7D32]">Proximity Notifications</h3>
                    <p className="text-gray-600">
                      Get alerts when you're near a stray animal location to help you find them.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#2E7D32]">Customizable Settings</h3>
                    <p className="text-gray-600">
                      Set notification radius and time frame preferences to personalize your experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#2E7D32]">Directions</h3>
                    <p className="text-gray-600">Get directions to stray animal locations directly from the app.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="screenshots" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5F5] via-[#F9FBE7] to-[#E8F5E9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#2E7D32]">
                See StraySync in Action
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the intuitive interface and powerful features of StraySync.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-black bg-black shadow-xl">
                  <div className="absolute inset-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/af848b72-735d-46e2-915a-2302f20a464f-TqoioIkey5RK3YvfEjJmB6TEjHXnj4.jpeg"
                      alt="StraySync Animals List"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#2E7D32]">Browse Animals</h3>
                <p className="text-sm text-gray-600 text-center">
                  View a list of all reported stray animals in your area
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-black bg-black shadow-xl">
                  <div className="absolute inset-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37f14ec5-66fa-4d99-90a2-8ed1dc94bd4e-xcbAxZ2ofscLBWewqI43pXkCkVTnPJ.jpeg"
                      alt="StraySync Add Animal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#2E7D32]">Report Sightings</h3>
                <p className="text-sm text-gray-600 text-center">
                  Easily add new animal sightings with photos and descriptions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-black bg-black shadow-xl">
                  <div className="absolute inset-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f77b32cc-ffb7-4fe8-90a3-ab24accaebbc-eV6dcg6qO2cY44zbEAU4wI3tybN1xA.jpeg"
                      alt="StraySync Map View"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#2E7D32]">Interactive Map</h3>
                <p className="text-sm text-gray-600 text-center">
                  View animal locations on an interactive map with filters
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#E8F5E9] via-[#F1F8E9] to-[#F5F5F5]">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-4 lg:pt-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#2E7D32]">Get in Touch</h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or suggestions? We'd love to hear from you. Fill out the form and we'll get back to you
                  as soon as possible.
                </p>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F5F5] via-[#F9FBE7] to-[#FAFAFA]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#2E7D32]">
                  Download StraySync Today
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community and help stray animals in your area find their way.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white">Download for iOS</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-8 bg-gradient-to-b from-[#FAFAFA] to-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-[#4CAF50]" />
            <span className="text-xl font-bold text-[#4CAF50]">StraySync</span>
          </div>
          <div className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} StraySync. All rights reserved.
          </div>
          <nav className="flex gap-4 md:gap-6">
            <a href="#features" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
              Features
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

