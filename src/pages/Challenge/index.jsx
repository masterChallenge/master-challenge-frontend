import React, { useEffect, useState, useContext } from 'react';
import ChallengeDescription from '../../components/molecules/ChallengeDescription';
import Input from '../../components/molecules/Input/';
import ChallengeTips from '../../components/molecules/ChallengeTips/';
import Button from '../../components/atoms/Button/';
import ResultModal from '../../components/organisms/ResultModal/';
import { useHistory, useParams } from 'react-router-dom';

import { validate } from '../../utils/validator';
import { getChallenge } from '../../api/fetchData';
import ModalContext from '../../context/ModalContext';

const Challenge = (challengeData) => {
  let history = useHistory();
  const [userInput, setUserInput] = useState('Initial Code');
  const [challenge, setChallenge] = useState(null);
  const [response, setResponse] = useState(null);
  const { showModal, setShowModal } = useContext(ModalContext);

  let { pid } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {        
        const response = await getChallenge(pid);
        if (!response) throw new Error('Challenge not found')
        setChallenge(response);
      } catch (error) {
        console.log('El error es: ', error);
        history.push('/home');
      }
    }
    fetchData();
  }, [pid,history]);


  function handleUserSubmit() {
    setResponse(validate(userInput, challenge.challenge.validatorRules));
    setShowModal(true);
  }

  if (!challenge) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className='grid grid-rows-challenge h-screen w-full'>
        <ChallengeDescription {...challenge} />
        <Input {...challenge} state={{ userInput, setUserInput }} />
        <div className='grid grid-cols-2'>
          <ChallengeTips hints={challenge.hints} />
          <div className='bg-secondary-lighter w-full flex items-center justify-center'>
            <Button color='primary' onClick={handleUserSubmit} type='secondary'>
              Submit
            </Button>
          </div>
        </div>
        {showModal && <ResultModal {...response} challengeID={pid} />}
      </main>
    );
  }
};

export default Challenge;
