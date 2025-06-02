const About = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            className="text-3xl font-bold text-purple-400 hover:text-purple-300"
          >
            English 101
          </a>
          <div className="flex items-center space-x-4">
            <a href="/vocabulary" className="text-purple-400 hover:text-purple-300">Vocabulary</a>
            <a href="/grammar" className="text-purple-400 hover:text-purple-300">Grammar</a>
            <a href="/resources" className="text-purple-400 hover:text-purple-300">Resources</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">About English 101</h1>
        
        <div className="space-y-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-purple-500">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Mission</h2>
            <p className="text-purple-300">
              English 101 is dedicated to making English language learning accessible, engaging, and effective for everyone. 
              We believe that learning a new language should be an exciting journey, not a daunting task.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-purple-500">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-purple-300">
              <li>Interactive vocabulary learning with visual aids</li>
              <li>Comprehensive grammar lessons</li>
              <li>Practical examples and exercises</li>
              <li>Curated learning resources</li>
              <li>User-friendly interface</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-purple-500">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Approach</h2>
            <p className="text-purple-300 mb-4">
              We combine traditional language learning methods with modern technology to create an immersive learning experience. 
              Our content is designed to be:
            </p>
            <ul className="list-disc list-inside space-y-2 text-purple-300">
              <li>Easy to understand</li>
              <li>Visually engaging</li>
              <li>Practically applicable</li>
              <li>Progressively challenging</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-purple-500">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Contact Us</h2>
            <p className="text-purple-300">
              Have questions or suggestions? We'd love to hear from you! 
              Reach out to us at <span className="text-purple-400">contact@english101.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 