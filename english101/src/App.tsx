import Img1 from './assets/bread.jpg'
import Img2 from './assets/burger.jpg'
import Img3 from './assets/cereal.jpg'

import CardStacker from './components/cardStacker'

const App = () => {

  const data = [
    {
      title: 'Kirby',
      subtitle: 'Star Allies',
      rating: '4.7',
      backgroundColors: { top: '#51D1F7', bottom: '#5B8FEF' },
      image: Img1,
    },
    {
      title: 'Mario',
      subtitle: 'Super Bros',
      rating: '4.8',
      backgroundColors: { top: '#F85B6B', bottom: '#E83842' },
      image: Img2,
    },
    {
      title: 'Pokemon',
      subtitle: 'Bulbasaur',
      rating: '4.9',
      backgroundColors: { top: '#28DFAB', bottom: '#26CBCF' },
      image: Img3,
    },
  ];
  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center"> 

      <CardStacker data={data}></CardStacker>
      
    </div>
  )
}

export default App
