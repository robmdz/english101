import React from 'react';
import Chat from '../components/Chat';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <nav className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a 
            href="/" 
            className="text-2xl sm:text-3xl font-bold text-purple-400 hover:text-purple-300 mb-4 sm:mb-0"
          >
            English 101
          </a>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/vocabulary" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Vocabulary</a>
            <a href="/grammar" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Grammar</a>
            <a href="/resources" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Resources</a>
            <a href="/about" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">About</a>
            <a href="/chat" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Chat</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-6 sm:mb-8 text-center">
          English Learning Assistant
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 border border-purple-500">
          <Chat />
        </div>
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
              <a href="/chat" className="block text-purple-300 text-sm hover:text-purple-200">Chat</a>
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

export default ChatPage; 