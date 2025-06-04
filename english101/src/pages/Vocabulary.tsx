import FlipCard from '../components/FlipCard';
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
  const words = [
    { word: 'Bread', meaning: 'A staple food made from flour and water', example: 'I eat bread for breakfast.' },
    { word: 'Burger', meaning: 'A sandwich consisting of a cooked patty of ground meat', example: 'I ordered a cheeseburger.' },
    { word: 'Cereal', meaning: 'A breakfast food made from processed grains', example: 'I have cereal with milk every morning.' },
  ];

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
            <a href="/grammar" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Grammar</a>
            <a href="/resources" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">Resources</a>
            <a href="/about" className="text-purple-400 hover:text-purple-300 text-lg sm:text-base">About</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4 sm:mb-6 text-center">Vocabulary Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img1} alt="Bread" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Bread</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">{words[0].meaning}</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"{words[0].example}"</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img2} alt="Burger" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Burger</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">{words[1].meaning}</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"{words[1].example}"</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img3} alt="Cereal" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Cereal</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">{words[2].meaning}</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"{words[2].example}"</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img4} alt="Apricot" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Apricot</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">A sweet, orange fruit with a soft, velvety skin</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I love eating fresh apricots in summer."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img5} alt="Avocado" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Avocado</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">A pear-shaped fruit with dark green skin and soft green flesh</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I like to make guacamole with avocados."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img6} alt="Cherry" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Cherry</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">A small, round fruit with red or black skin and a hard seed</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"These cherries are perfectly ripe and sweet."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img7} alt="Oranges" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Oranges</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">A round, orange-colored citrus fruit with a sweet taste</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I drink fresh orange juice every morning."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img8} alt="Pears" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Pears</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">A sweet, juicy fruit with a narrow top and wider bottom</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"These pears are perfect for making a fruit salad."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img9} alt="Pineapple" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Pineapple</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">A tropical fruit with a tough, spiky skin and sweet yellow flesh</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I love the sweet and tangy taste of pineapple."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img10} alt="Raspberries" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Raspberries</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">Small, red, sweet berries with a hollow center</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I picked fresh raspberries from the garden."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img11} alt="Cranberries" className="w-full h-full object-cover" />
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Cranberries</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">Small, red, tart berries with a firm texture</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I love making cranberry sauce for Thanksgiving."</p>
                </div>
              }
            />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <FlipCard
              frontContent={
                <div className="w-full h-full rounded-lg overflow-hidden max-w-sm">
                  <img src={Img12} alt="Blueberries" className="w-full h-full object-cover" />  
                </div>
              }
              backContent={
                <div className="w-full h-full bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center border border-purple-500 max-w-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 text-center">Blueberries</h2>
                  <p className="text-purple-300 text-center text-sm sm:text-base">Small, blue, sweet berries with a firm texture</p>
                  <p className="text-purple-300 text-center mt-2 italic text-sm sm:text-base">"I love eating blueberries with yogurt for breakfast."</p>
                </div>
              }
            />
          </div>
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

export default Vocabulary; 