import React from 'react';

const Container: React.FC<{children: React.ReactNode, container: string}> = (props) => {
  const {children, container} = props;
  
  return <div className={container}>
    {children}
  </div>
}

export default Container;