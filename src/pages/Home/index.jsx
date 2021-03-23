import ChallengeCard from '../../components/molecules/ChallengeCard/';
import Navbar from '../../components/molecules/Navbar/';
import React, { useEffect, useState } from 'react';
import { getAllChallenges } from '../../api/fetchData';

const Home = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllChallenges();
      setChallenges(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='py-10 px-24'>
        <h1 className='text-4xl	font-bold'>🎉Hi Masters!!</h1>
        <p className='text-lg mt-4'>
          Improve your CSS coding skills!. Solve CSS challenges.
        </p>
        <p className='text-lg mt-4 font-bold'>
          How it works, 🚀Choose your challenge, 💻 Code and 🎉Submit your
          Solution.
        </p>
        <div className='mt-10 grid grid-cols-3 gap-8	'>
          {challenges.map((item) => (
            <ChallengeCard
              key={item.id}
              challengeId={item.id}
              name={item.name}
              difficulty={item.difficulty}
              image={item.image}
              attempts={item.attempts}
              estatus={item.estatus}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
