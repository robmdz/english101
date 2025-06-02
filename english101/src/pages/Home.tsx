const Home = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-purple-400 hover:text-purple-300">English 101</h2>
          <div className="flex items-center space-x-4">
            <a href="/vocabulary" className="text-purple-400 hover:text-purple-300">Vocabulary</a>
            <a href="/grammar" className="text-purple-400 hover:text-purple-300">Grammar</a>
            <a href="/resources" className="text-purple-400 hover:text-purple-300">Resources</a>
            <a href="/about" className="text-purple-400 hover:text-purple-300">About</a>
            <a 
              href="/register" 
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <p className="text-purple-400 text-2xl font-bold">Welcome to English 101</p>
        <p className="text-purple-300 text-lg">Learn English with us</p>
        <p className="text-purple-300 text-lg"> English 101 is a project to help you learn english from scratch, by robinson </p>
      </div>
    </div>
  );
};

export default Home; 