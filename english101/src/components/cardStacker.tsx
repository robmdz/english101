import Card from './card';

interface CardData {
  title: string;
  subtitle: string;
  rating: string;
  backgroundColors: { top: string; bottom: string };
  image: string;
}

const CardStacker = ({ data }: { data: CardData[] }) => {
  return (
    <div className="flex card-stacker py-10">
      {data.map((eachData: CardData, index: number) => (
        <Card
          key={index} 
          title={eachData.title}
          subtitle={eachData.subtitle}
          rating={eachData.rating}
          backgroundColors={eachData.backgroundColors}
          image={eachData.image} 
          className={index !== 0 ?  '-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]' : ''}
        />
      ))}
    </div>
  );
};

export default CardStacker;