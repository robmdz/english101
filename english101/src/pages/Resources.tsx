const Resources = () => {
  const resources = [
    {
      category: "Online Courses",
      items: [
        { name: "BBC Learning English", link: "https://www.bbc.co.uk/learningenglish" },
        { name: "Coursera English Courses", link: "https://www.coursera.org/browse/language-learning/english" },
        { name: "edX English Programs", link: "https://www.edx.org/learn/english" }
      ]
    },
    {
      category: "Practice Tools",
      items: [
        { name: "Duolingo", link: "https://www.duolingo.com" },
        { name: "Memrise", link: "https://www.memrise.com" },
        { name: "Quizlet", link: "https://quizlet.com" }
      ]
    },
    {
      category: "Reading Materials",
      items: [
        { name: "Project Gutenberg", link: "https://www.gutenberg.org" },
        { name: "News in Levels", link: "https://www.newsinlevels.com" },
        { name: "ESL Fast", link: "https://www.eslfast.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 p-4 sm:p-6 md:p-8">
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
            <a href="/about" className="text-white hover:text-purple-300 text-lg sm:text-base">About</a>
            <a href="/chat" className="text-white hover:text-purple-300 text-lg sm:text-base">Chat</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Resources</h1>
        <div className="space-y-6 sm:space-y-8">
          {resources.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg shadow-lg p-4 sm:p-6 border border-purple-500">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">{category.category}</h2>
              <div className="space-y-2 sm:space-y-3">
                {category.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 sm:p-3 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    <p className="text-white hover:text-purple-300 text-sm sm:text-base">{item.name}</p>
                  </a>
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

export default Resources; 