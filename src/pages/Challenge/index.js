import React, { useEffect, useState } from "react";
import ChallengeDescription from "../../components/molecules/ChallengeDescription";
import Input from "../../components/molecules/Input/";
import ChallengeTips from "../../components/molecules/ChallengeTips/";
import Button from "../../components/atoms/Button/";
import { useParams } from "react-router-dom"

import { validate } from '../../utils/validator'
import { getChallenge } from "../../api/fetchData";

const Challenge = (challengeData) => {
  const [userInput, setUserInput] = useState("Initial Code")
  const [challenge, setChallenge] = useState(null)
  let { pid } = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await getChallenge(pid);
      console.log(response)
      setChallenge(response)
    }
    fetchData();
  }, [])


  function handleUserSubmit () {
    console.log(validate(userInput, challengeData.challenge.validatorRules))
  }


  if (!challenge) {
    return <div>Loading...</div>
  }
  else {
    return (
      <main className="grid grid-rows-challenge h-screen w-full">
        <ChallengeDescription {...challenge} />
        <Input {...challenge} state={{ userInput, setUserInput }}/>
        <div className="grid grid-cols-2">
          <ChallengeTips />
          <div className="bg-secondary-lighter w-full flex items-center justify-center">
            <Button color="primary" onClick={handleUserSubmit}>Submit</Button>
          </div>
        </div>
      </main>
    );
  }
  
};

export default Challenge;
