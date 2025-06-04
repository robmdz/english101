import { useState } from 'react';
import FlipCard from '../components/FlipCard';
import CategorySelector from '../components/CategorySelector';
import Img1 from '../assets/bread.jpg';
import Img2 from '../assets/burger.jpg';
import Img3 from '../assets/cereal.jpg';
import Img4 from '../assets/Apricot_and_cross_section.jpg';
import Img5 from '../assets/Avocado_Hass.jpg';
import Img6 from '../assets/Cherry.jpg';
import Img7 from '../assets/Oranges.jpg';
import Img8 from '../assets/Pears.jpg';
import Img9 from '../assets/pineapple.jpg';
import Img10 from '../assets/Raspberries.jpg';
import Img11 from '../assets/Cranberry.jpg';
import Img12 from '../assets/Blueberries.jpg';

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState('fruits');

  const vocabularyData = {
    fruits: [
      { word: 'Apricot', meaning: 'A sweet, orange fruit with a soft, velvety skin', example: 'I love eating fresh apricots in summer.', image: Img4 },
      { word: 'Avocado', meaning: 'A pear-shaped fruit with dark green skin and soft green flesh', example: 'I like to make guacamole with avocados.', image: Img5 },
      { word: 'Cherry', meaning: 'A small, round fruit with red or black skin and a hard seed', example: 'These cherries are perfectly ripe and sweet.', image: Img6 },
      { word: 'Oranges', meaning: 'A round, orange-colored citrus fruit with a sweet taste', example: 'I drink fresh orange juice every morning.', image: Img7 },
      { word: 'Pears', meaning: 'A sweet, juicy fruit with a narrow top and wider bottom', example: 'These pears are perfect for making a fruit salad.', image: Img8 },
      { word: 'Pineapple', meaning: 'A tropical fruit with a tough, spiky skin and sweet yellow flesh', example: 'I love the sweet and tangy taste of pineapple.', image: Img9 },
      { word: 'Raspberries', meaning: 'Small, red, sweet berries with a hollow center', example: 'I picked fresh raspberries from the garden.', image: Img10 },
      { word: 'Cranberries', meaning: 'Small, red, tart berries with a firm texture', example: 'I love making cranberry sauce for Thanksgiving.', image: Img11 },
      { word: 'Blueberries', meaning: 'Small, blue, sweet berries with a firm texture', example: 'I love eating blueberries with yogurt for breakfast.', image: Img12 }
    ],
    food: [
      { word: 'Bread', meaning: 'A staple food made from flour and water', example: 'I eat bread for breakfast.', image: Img1 },
      { word: 'Burger', meaning: 'A sandwich consisting of a cooked patty of ground meat', example: 'I ordered a cheeseburger.', image: Img2 },
      { word: 'Cereal', meaning: 'A breakfast food made from processed grains', example: 'I have cereal with milk every morning.', image: Img3 }
    ],
    // Add more categories with their respective vocabulary items
  };

  const currentCategoryItems = vocabularyData[selectedCategory as keyof typeof vocabularyData] || [];

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
            <a href="/grammar" className="text-white hover:text-purple-300 text-lg sm:text-base">Grammar</a>
            <a href="/resources" className="text-white hover:text-purple-300 text-lg sm:text-base">Resources</a>
            <a href="/about" className="text-white hover:text-purple-300 text-lg sm:text-base">About</a>
            <a href="/chat" className="text-white hover:text-purple-300 text-lg sm:text-base">Chat</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Vocabulary Cards</h2>
        
        <CategorySelector 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {currentCategoryItems.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-purple-500">
              <FlipCard
                frontContent={
                  <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                    <img src={item.image} alt={item.word} className="w-full h-full object-cover" />
                  </div>
                }
                backContent={
                  <div className="w-full h-full bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">{item.word}</h2>
                    <p className="text-white text-center text-sm sm:text-base">{item.meaning}</p>
                    <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"{item.example}"</p>
                  </div>
                }
              />
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

export default Vocabulary; 