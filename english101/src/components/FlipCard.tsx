import { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouch = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative w-64 h-96 perspective-1000 ${className}`}
      onTouchStart={handleTouch}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'hover:rotate-y-180'}`}>
        {/* Front face */}
        <div className="absolute w-full h-full backface-hidden">
          {frontContent}
        </div>
        {/* Back face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 