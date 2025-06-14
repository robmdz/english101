const Grammar = () => {
  const grammarTopics = [
    {
      title: "Articles",
      content: [
        { rule: "Use 'a' before words that begin with a consonant sound", example: "a book, a university" },
        { rule: "Use 'an' before words that begin with a vowel sound", example: "an apple, an hour" },
        { rule: "Use 'the' for specific or unique things", example: "the sun, the moon" }
      ]
    },
    {
      title: "Present Simple",
      content: [
        { rule: "Use for habits and routines", example: "I play tennis every Sunday" },
        { rule: "Use for general truths", example: "The sun rises in the east" },
        { rule: "Use for scheduled events", example: "The train leaves at 6 PM" }
      ]
    }
  ];

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
            <a href="/resources" className="text-white hover:text-purple-300 text-lg sm:text-base">Resources</a>
            <a href="/about" className="text-white hover:text-purple-300 text-lg sm:text-base">About</a>
            <a href="/chat" className="text-white hover:text-purple-300 text-lg sm:text-base">Chat</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Grammar & Articles</h1>
        <div className="space-y-6 sm:space-y-8">
          {grammarTopics.map((topic, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg shadow-lg p-4 sm:p-6 border border-purple-500">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">{topic.title}</h2>
              <div className="space-y-3 sm:space-y-4">
                {topic.content.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-purple-500 pl-3 sm:pl-4">
                    <p className="text-white mb-1 text-sm sm:text-base md:text-lg">{item.rule}</p>
                    <p className="text-purple-300 italic text-sm sm:text-base md:text-lg">Example: {item.example}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default Grammar; 