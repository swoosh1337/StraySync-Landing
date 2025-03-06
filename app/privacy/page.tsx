import Link from "next/link"
import { PawPrint } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-white py-4">
        <div className="container">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <PawPrint className="h-6 w-6 text-[#4CAF50]" />
            <span className="text-xl font-bold text-[#4CAF50]">StraySync</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-12 bg-gradient-to-b from-white via-[#FAFAFA] to-[#FAFAFA]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2E7D32] mb-8">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2E7D32] mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              StraySync is committed to protecting your privacy. This Privacy Policy explains our practices regarding
              data collection and usage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2E7D32] mb-4">Data Collection</h2>
            <p className="text-gray-700 mb-4">
              StraySync collects minimal data to provide the best stray animal tracking experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Location Data (Optional):</strong> We may access your location data with your explicit
                permission to provide insights into nearby stray animals. This data is used only for real-time display
                and analysis.
              </li>
              <li>
                <strong>Photos:</strong> Photos you upload of stray animals are stored on our servers to help others
                locate these animals.
              </li>
              <li>
                <strong>User Information:</strong> Basic account information such as email address for authentication
                purposes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2E7D32] mb-4">Data Usage</h2>
            <p className="text-gray-700 mb-4">The data we collect is:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Used solely for displaying insights and trends related to stray animal sightings</li>
              <li>Used to help other users locate and assist stray animals</li>
              <li>Never shared with third parties for marketing purposes</li>
              <li>Only accessed when you grant permission through your device's settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2E7D32] mb-4">Data Storage</h2>
            <p className="text-gray-700 mb-4">All app data, including your:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Animal sighting reports</li>
              <li>Photos of stray animals</li>
              <li>Location data of sightings</li>
              <li>Notification preferences</li>
            </ul>
            <p className="text-gray-700 mt-4">
              is stored securely on our servers. Your personal settings and preferences are stored locally on your
              device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2E7D32] mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have complete control over your data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You can revoke location data access at any time through your device's settings</li>
              <li>You can delete your account and associated data by contacting us</li>
              <li>You can request a copy of your data by contacting us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2E7D32] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-[#4CAF50] font-medium">tazigrigolia@gmail.com</p>
          </section>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-8 bg-gradient-to-b from-[#FAFAFA] to-white shadow-[0_-1px_2px_rgba(0,0,0,0.03)]">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-[#4CAF50]" />
            <span className="text-xl font-bold text-[#4CAF50]">StraySync</span>
          </div>
          <div className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} StraySync. All rights reserved.
          </div>
          <nav className="flex gap-4 md:gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
              Features
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-[#4CAF50] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

