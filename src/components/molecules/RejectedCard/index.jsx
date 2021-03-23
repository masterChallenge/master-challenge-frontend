import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../atoms/Button/';
import { ReactComponent as Rejected } from '../../../assets/KeepTrying.svg';
import ModalContext from '../../../context/ModalContext';

const RejectedCard = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const history = useHistory();

  const handleReturn = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    history.push('/home');
  };

  return (
    <div className='bg-warning flex flex-col items-center text-center rounded-3xl px-20 py-6 shadow-lg text-secondary-darker'>
      <Rejected />
      <span className='mt-4 mb-10'>
        <h3 className='text-2xl font-bold'>Keep trying!</h3>
        <p>Practice makes the master</p>
      </span>
      <Button color='secondary-dark' onClick={handleClick} type='primary'>
        Back to Challenge
      </Button>
      <Link
        to='/home'
        className='mt-4 text-sm font-bold'
        onClick={handleReturn}
      >
        Return to dashboard
      </Link>
    </div>
  );
};

export default RejectedCard;
