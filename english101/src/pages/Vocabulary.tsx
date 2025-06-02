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
    <div className="min-h-screen bg-black p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            className="text-3xl font-bold text-purple-400 hover:text-purple-300"
          >
            English 101
          </a>
          <div className="flex items-center space-x-4">
            <a href="/grammar" className="text-purple-400 hover:text-purple-300">Grammar</a>
            <a href="/resources" className="text-purple-400 hover:text-purple-300">Resources</a>
            <a href="/about" className="text-purple-400 hover:text-purple-300">About</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Vocabulary Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img1} alt="Bread" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Bread</h2>
                <p className="text-purple-300 text-center">{words[0].meaning}</p>
                <p className="text-purple-300 text-center mt-2 italic">"{words[0].example}"</p>
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
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Burger</h2>
                <p className="text-purple-300 text-center">{words[1].meaning}</p>
                <p className="text-purple-300 text-center mt-2 italic">"{words[1].example}"</p>
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
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Cereal</h2>
                <p className="text-purple-300 text-center">{words[2].meaning}</p>
                <p className="text-purple-300 text-center mt-2 italic">"{words[2].example}"</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img4} alt="Apricot" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Apricot</h2>
                <p className="text-purple-300 text-center">A sweet, orange fruit with a soft, velvety skin</p>
                <p className="text-purple-300 text-center mt-2 italic">"I love eating fresh apricots in summer."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img5} alt="Avocado" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Avocado</h2>
                <p className="text-purple-300 text-center">A pear-shaped fruit with dark green skin and soft green flesh</p>
                <p className="text-purple-300 text-center mt-2 italic">"I like to make guacamole with avocados."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img6} alt="Cherry" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Cherry</h2>
                <p className="text-purple-300 text-center">A small, round fruit with red or black skin and a hard seed</p>
                <p className="text-purple-300 text-center mt-2 italic">"These cherries are perfectly ripe and sweet."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img7} alt="Oranges" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Oranges</h2>
                <p className="text-purple-300 text-center">A round, orange-colored citrus fruit with a sweet taste</p>
                <p className="text-purple-300 text-center mt-2 italic">"I drink fresh orange juice every morning."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img8} alt="Pears" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Pears</h2>
                <p className="text-purple-300 text-center">A sweet, juicy fruit with a narrow top and wider bottom</p>
                <p className="text-purple-300 text-center mt-2 italic">"These pears are perfect for making a fruit salad."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img9} alt="Pineapple" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Pineapple</h2>
                <p className="text-purple-300 text-center">A tropical fruit with a tough, spiky skin and sweet yellow flesh</p>
                <p className="text-purple-300 text-center mt-2 italic">"I love the sweet and tangy taste of pineapple."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img10} alt="Raspberries" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Raspberries</h2>
                <p className="text-purple-300 text-center">Small, red, sweet berries with a hollow center</p>
                <p className="text-purple-300 text-center mt-2 italic">"I picked fresh raspberries from the garden."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img11} alt="Cranberries" className="w-full h-full object-cover" />
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Cranberries</h2>
                <p className="text-purple-300 text-center">Small, red, tart berries with a firm texture</p>
                <p className="text-purple-300 text-center mt-2 italic">"I love making cranberry sauce for Thanksgiving."</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img src={Img12} alt="Blueberries" className="w-full h-full object-cover" />  
              </div>
            }
            backContent={
              <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Blueberries</h2>
                <p className="text-purple-300 text-center">Small, blue, sweet berries with a firm texture</p>
                <p className="text-purple-300 text-center mt-2 italic">"I love eating blueberries with yogurt for breakfast."</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Vocabulary; 