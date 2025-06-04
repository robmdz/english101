import React from 'react';
import PricingCards from '../components/PricingCards';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 mb-4 sm:mb-6">
            Master English with Confidence
          </h1>
          <p className="text-lg sm:text-xl text-purple-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Join thousands of learners who have transformed their English skills with our comprehensive learning platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="/chat"
              className="w-full sm:w-auto bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-center"
            >
              Start Learning
            </a>
            <a
              href="/about"
              className="w-full sm:w-auto border border-purple-500 text-purple-400 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition-colors text-center"
            >
              Learn More
            </a>
            <a
              href="/register"
              className="w-full sm:w-auto bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-center"
            >
              Register
            </a>
            <a
              href="https://wa.me/573023214492"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Whatsapp
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <PricingCards />
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 sm:mb-8">Why Choose English 101?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="p-4 sm:p-6 bg-gray-800 rounded-xl border border-purple-500">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">Interactive Learning</h3>
              <p className="text-purple-300 text-sm sm:text-base">Engage with our AI-powered chat system for personalized practice and feedback.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-800 rounded-xl border border-purple-500">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">Comprehensive Resources</h3>
              <p className="text-purple-300 text-sm sm:text-base">Access a wide range of materials covering grammar, vocabulary, and more.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-800 rounded-xl border border-purple-500">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">Flexible Learning</h3>
              <p className="text-purple-300 text-sm sm:text-base">Learn at your own pace with 24/7 access to all learning materials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 