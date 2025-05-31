import FlipCard from '../components/FlipCard';
import Img1 from '../assets/bread.jpg';
import Img2 from '../assets/burger.jpg';
import Img3 from '../assets/cereal.jpg';

const Vocabulary = () => {
  const words = [
    { word: 'Bread', meaning: 'A staple food made from flour and water', example: 'I eat bread for breakfast.' },
    { word: 'Burger', meaning: 'A sandwich consisting of a cooked patty of ground meat', example: 'I ordered a cheeseburger.' },
    { word: 'Cereal', meaning: 'A breakfast food made from processed grains', example: 'I have cereal with milk every morning.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">English 101</a>
          <div className="flex items-center space-x-4">
            <a href="/grammar" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Grammar</a>
            <a href="/resources" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Resources</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Vocabulary Cards</h2>
        <div className="flex items-center justify-center gap-8 mb-12">
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img1} alt="Bread" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Bread</h2>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img2} alt="Burger" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Burger</h2>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img3} alt="Cereal" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Cereal</h2>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Vocabulary; 