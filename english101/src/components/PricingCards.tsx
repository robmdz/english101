import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular = false }) => {
  return (
    <div className={`relative p-6 rounded-xl ${isPopular ? 'bg-purple-600' : 'bg-gray-800'} border border-purple-500`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-400 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-purple-100">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-purple-100">{price}</span>
        <span className="text-purple-300">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-purple-100">
            <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors
          ${isPopular 
            ? 'bg-white text-purple-600 hover:bg-purple-100' 
            : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
          onClick={() => {
            window.location.href = 'https://wa.me/573023214492?text=I%20want%20to%20register%20for%20the%20course';
          }}
      >
        Get Started
      </button>
    </div>
  );
};

const PricingCards = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Basic vocabulary lessons",
        "Limited grammar exercises",
        "Community forum access",
        "Basic learning resources"
      ]
    },
    {
      title: "Basic",
      price: "$9.99",
      features: [
        "Basic grammar lessons",
        "Vocabulary exercises",
        "Email support",
        "Access to basic resources"
      ]
    },
    {
      title: "Pro",
      price: "$19.99",
      features: [
        "All Basic features",
        "Advanced grammar lessons",
        "Speaking practice",
        "Writing feedback",
        "Priority support",
        "Access to all resources"
      ],
      isPopular: true
    },
    {
      title: "Premium",
      price: "$29.99",
      features: [
        "All Pro features",
        "1-on-1 tutoring",
        "Custom learning plan",
        "Progress tracking",
        "Certificate of completion",
        "24/7 support"
      ]
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Choose Your Learning Plan</h2>
        <p className="text-purple-300 max-w-2xl mx-auto">
          Select the perfect plan to accelerate your English learning journey
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCards; 