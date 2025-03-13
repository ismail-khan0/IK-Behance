import react from "react";
import Button from "./Button";
import { Check } from "lucide-react";
export default function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mt-8">
        Start your 7 day free trial today
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Take your creative career to the next level by upgrading to Behance Pro.
      </p>
      <div className="mt-10  grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-start">
          <h2 className="text-3xl font-bold">Behance</h2>
          <p className="my-2">
            Showcase your work on the world’s largest creative network.
          </p>
          <h3 className="text-2xl font-bold mt-10">Free</h3>
          <ul className="mt-4 space-y-2 ">
            {[
              "Publish projects",
              "Offer freelance services",
              "Send client proposals",
              "Sell assets",
              "Mark yourself as being available for work",
              "Message others and get plugged into the community",
              "Access to our freelance and full-time job board",
              "Transact on Behance with 15-30% platform fees"
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="text-green-600 w-4 h-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-500 text-start">
          <h2 className="text-3xl font-semibold flex items-center space-x-2">
            <span>Behance</span>
            <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-2 py-1 rounded-md">
              PRO
            </span>
          </h2>

          <p className="my-2">
            Tools to help you better showcase your work and make more money.
          </p>
          <h3 className="text-2xl font-bold mt-4 ">₹797.68/mo</h3>
          <ul className="mt-4 space-y-2 ">
            {[
              "Publish projects",
              "Offer freelance services",
              "Send client proposals",
              "Sell assets",
              "Mark yourself as being available for work",
              "Message others and get plugged into the community",
              "Access to our freelance and full-time job board",
              "0% Behance platform fees",
              "Advanced analytics",
              "See who interacted with your work",
              "See your top traffic sources and search terms",
              "Your own custom Adobe Portfolio website",
              "Password protected projects",
              "Link-only projects",
              "Project publish scheduling",
              "Pro badge",
              "Search by image",
              "Profile Sections",
              "Advanced profile options",
              "Pricing guidance",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="text-green-600 w-4 h-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button
            btnText="Start your free trial"
            onClick={()=>window.location.href='pricing'}
            className="mt-6 w-full bg-blue-500 text-white py-2  font-semibold hover:bg-blue-600"
          />
        </div>
      </div>
    </div>
  );
}
