import { useState } from "react";
import Button from "./Button";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("yearlyMonthly");

  const plans = [
    { id: "monthly", name: "Monthly", price: "US$14.99/mo", description: "Cancel anytime, no fee" },
    { id: "yearlyMonthly", name: "Yearly", subtext: "Billed monthly", price: "US$9.99/mo (US$119.88/yr)", description: "Fee applies if you cancel after Mar 30" },
    { id: "yearlyUpfront", name: "Yearly", subtext: "Billed upfront", price: "US$95.88/yr (US$7.99/mo)", description: "No refund if you cancel after Mar 30" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4 mt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full border">
        <h2 className="text-2xl font-semibold mb-2 text-left">Supercharge your creative career — pick a subscription to start your 7-day free trial.</h2>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-black text-white flex item-center justify-center py-1 px-2 font-bold rounded-full">Be</div>
          <h3 className="font-semibold">Behance Pro</h3>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">7-day free trial</span>
        </div>
        <p className="text-gray-600 mb-6 text-left">Features to help increase your visibility and earn more money on Behance including advanced analytics, Adobe Portfolio, password-protected projects, 0% platform fees, and more.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === plan.id ? 'border-blue-500 shadow-md' : 'border-gray-300'}`} 
              onClick={() => setSelectedPlan(plan.id)}
            >
              <h3 className="font-semibold text-lg">{plan.name}</h3>
              {plan.subtext && <p className="text-sm text-gray-500">{plan.subtext}</p>}
              <p className="text-xl font-bold mt-1">{plan.price}</p>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            </div>
          ))}
        </div>
        
        <Button btnText='Continue' className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 text-lg"/>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h4 className="font-semibold mb-2">Behance Pro plan includes:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li><strong>Custom Adobe Portfolio</strong> - Customize your own portfolio website to showcase your best work.</li>
              <li><strong>Advanced analytics</strong> - Understand your audience by geography, traffic source, search terms, and more.</li>
              <li><strong>0% platform fees</strong> - Earn more with 0% platform fees on all asset sales and freelance projects.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Free trial terms:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Billing automatically starts after the free trial ends.</li>
              <li>Cancel before <strong>Mar 16</strong> to avoid getting billed.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
