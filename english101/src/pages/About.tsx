const About = () => {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <nav className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a 
            href="/" 
            className="text-2xl sm:text-3xl font-bold text-white hover:text-purple-300 mb-4 sm:mb-0"
          >
            English 101
          </a>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/vocabulary" className="text-white hover:text-purple-300 text-lg sm:text-base">Vocabulary</a>
            <a href="/grammar" className="text-white hover:text-purple-300 text-lg sm:text-base">Grammar</a>
            <a href="/resources" className="text-white hover:text-purple-300 text-lg sm:text-base">Resources</a>
            <a href="/chat" className="text-white hover:text-purple-300 text-lg sm:text-base">Chat</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">About English 101</h1>
        
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 sm:p-6 border border-purple-500">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-white text-sm sm:text-base md:text-lg">
              English 101 is dedicated to making English language learning accessible, engaging, and effective for everyone. 
              We believe that learning a new language should be an exciting journey, not a daunting task.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 sm:p-6 border border-purple-500">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-base md:text-lg">
              <li>Interactive vocabulary learning with visual aids</li>
              <li>Comprehensive grammar lessons</li>
              <li>Practical examples and exercises</li>
              <li>Curated learning resources</li>
              <li>User-friendly interface</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 sm:p-6 border border-purple-500">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Our Approach</h2>
            <p className="text-white mb-4 text-sm sm:text-base md:text-lg">
              We combine traditional language learning methods with modern technology to create an immersive learning experience. 
              Our content is designed to be:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-base md:text-lg">
              <li>Easy to understand</li>
              <li>Visually engaging</li>
              <li>Practically applicable</li>
              <li>Progressively challenging</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 sm:p-6 border border-purple-500">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-white text-sm sm:text-base md:text-lg">
              Have questions or suggestions? We'd love to hear from you! 
              Reach out to us at <span className="text-purple-300">contact@english101.com</span>
            </p>
          </div>
        </div>
      </div>
      <footer className="mt-8 border-t border-purple-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <p className="text-white text-sm">Email: contact@english101.com</p>
              <p className="text-white text-sm">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <a href="/vocabulary" className="block text-white text-sm hover:text-purple-300">Vocabulary</a>
              <a href="/grammar" className="block text-white text-sm hover:text-purple-300">Grammar</a>
              <a href="/resources" className="block text-white text-sm hover:text-purple-300">Resources</a>
              <a href="/about" className="block text-white text-sm hover:text-purple-300">About</a>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <p className="text-white text-sm">Facebook</p>
              <p className="text-white text-sm">Twitter</p>
              <p className="text-white text-sm">Instagram</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-purple-500">
            <p className="text-center text-white text-sm">© 2024 English 101. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About; 