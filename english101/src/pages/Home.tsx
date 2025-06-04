const Home = () => {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <nav className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 hover:text-purple-300 mb-4 sm:mb-0">English 101</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/vocabulary" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Vocabulary</a>
            <a href="/grammar" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Grammar</a>
            <a href="/resources" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Resources</a>
            <a href="/about" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">About</a>
            <a 
              href="/register" 
              className="w-full sm:w-auto text-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <p className="text-purple-400 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Welcome to English 101</p>
        <p className="text-purple-300 text-base sm:text-lg md:text-xl mb-2 sm:mb-4">Learn English with us</p>
        <p className="text-purple-300 text-sm sm:text-base md:text-lg max-w-2xl text-center">English 101 is a project to help you learn english from scratch, by robinson</p>
      </div>
      <footer className="mt-8 border-t border-purple-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-purple-400 font-bold mb-4">Contact</h3>
              <p className="text-purple-300 text-sm">Email: contact@english101.com</p>
              <p className="text-purple-300 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-purple-400 font-bold mb-4">Quick Links</h3>
              <a href="/vocabulary" className="block text-purple-300 text-sm hover:text-purple-200">Vocabulary</a>
              <a href="/grammar" className="block text-purple-300 text-sm hover:text-purple-200">Grammar</a>
              <a href="/resources" className="block text-purple-300 text-sm hover:text-purple-200">Resources</a>
              <a href="/about" className="block text-purple-300 text-sm hover:text-purple-200">About</a>
            </div>
            <div>
              <h3 className="text-purple-400 font-bold mb-4">Follow Us</h3>
              <p className="text-purple-300 text-sm">Facebook</p>
              <p className="text-purple-300 text-sm">Twitter</p>
              <p className="text-purple-300 text-sm">Instagram</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-purple-500">
            <p className="text-center text-purple-400 text-sm">© 2024 English 101. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 