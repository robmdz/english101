import { useState } from 'react';
import Chat from '../components/Chat';

const ChatPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change this password to whatever you want
    if (password === 'english101') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAuthenticated) {
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
              <a href="/about" className="text-white hover:text-purple-300 text-lg sm:text-base">About</a>
            </div>
          </div>
        </nav>

        <div className="max-w-md mx-auto mt-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg p-6 border border-purple-500">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Enter Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 bg-black border border-purple-500 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-colors"
              >
                Access Chat
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

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
            <a href="/about" className="text-white hover:text-purple-300 text-lg sm:text-base">About</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
          English Learning Assistant
        </h1>
        <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg shadow-lg p-4 sm:p-6 border border-purple-500">
          <Chat />
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
              <a href="/chat" className="block text-white text-sm hover:text-purple-300">Chat</a>
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

export default ChatPage; 