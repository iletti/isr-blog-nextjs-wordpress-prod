import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <div className='h-full'>
      <iframe 
        src="https://avainsanatutkimus-app-xixe.vercel.app" 
        width="100%" 
        height="700px" 
        style={{ border: 'none' }}
        title="Avainsanatutkimus App"
      />
    </div>
  );
}

export default IframeComponent;
