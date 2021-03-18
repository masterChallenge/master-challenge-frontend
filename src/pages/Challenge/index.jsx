import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import Input from "@components/molecules/Input/Input";
import ChallengeTips from "@components/molecules/ChallengeTips/ChallengeTips";
import Button from "@components/atoms/Button/Button";

import { validate } from '../../utils/validator/validator'

const Challenge = (challengeData) => {
  const [userInput, setUserInput] = useState("Initial Code")

  function handleUserSubmit () {
    console.log(validate(userInput, challengeData.challenge.validatorRules))
  }

  return (
    <main className="grid grid-rows-challenge h-screen w-full">
      <ChallengeDescription {...challengeData} />
      <Input {...challengeData} state={{ userInput, setUserInput }}/>
      <div className="grid grid-cols-2">
        <ChallengeTips />
        <div className="bg-secondary-lighter w-full flex items-center justify-center">
          <Button color="primary" onClick={handleUserSubmit}>Submit</Button>
        </div>
      </div>
    </main>
  );
};

Challenge.getInitialProps = async (ctx) => {
  const pid = parseInt(ctx.query.pid);
  const file = Number.isInteger(pid) && pid < 4 ? pid : 1;
  const { challenge_data } = await import(`../../jsons/files/${file}.js`);
  return challenge_data;
};

export default Challenge;
