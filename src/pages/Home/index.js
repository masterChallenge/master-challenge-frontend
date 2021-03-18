import ChallengeCard from "../../components/molecules/ChallengeCard/";
import Navbar from "../../components/molecules/Navbar/";
import React, { useEffect, useState } from "react";
import MockChallenge from "../../jsons/MockChallenge.json";
import {getAllChallenges} from '../../api/fetchData'

const Home = () => {
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAllChallenges();
      setChallenges(response)
    }
    fetchData();
  }, [])

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl	font-bold">Good Evening!</h1>
        <p className="text-lg mt-4">
          There’s some challegens to improve your skills!
        </p>
        <div className="mt-10 grid grid-cols-3 gap-8	">
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
