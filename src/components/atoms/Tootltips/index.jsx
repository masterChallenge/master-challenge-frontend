import React from 'react';

const Tootltips = ({ children }) => {
  return (
    <div className='flex h-6 px-2 py-1 bg-secondary text-sm rounded-sm text-primary-lightest'>
      {children}
    </div>
  );
};

export default Tootltips;
