import FlipCard from '../components/FlipCard';
import Img1 from '../assets/bread.jpg';
import Img2 from '../assets/burger.jpg';
import Img3 from '../assets/cereal.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">English 101</h2>
          <div className="flex items-center space-x-4">
            <a href="/vocabulary" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Vocabulary</a>
            <a href="/grammar" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Grammar</a>
            <a href="/resources" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Resources</a>
          </div>
        </div>
      </nav>
      
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home; 