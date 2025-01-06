import { useState } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { useEffect } from 'react';

const App = () => {
  const heroData = [
    { text1: 'Dive into', text2: 'Laura' },
    { text1: 'Indulge', text2: 'your passions' },
    { text1: 'Given to you', text2: 'your desires' },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);


  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count) => {return count===2?0:count+1})
    },3000)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
