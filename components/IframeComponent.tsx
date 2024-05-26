import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <div className='w-full h-screen bg-transparent'>
      <iframe 
        src="https://avainsanatutkimus-app-xixe.vercel.app" 
        width="100%" 
        height="750px" 
        style={{ border: 'none', background: 'transparent' }}
        title="Avainsanatutkimus App"
      />
    </div>
  );
}

export default IframeComponent;
