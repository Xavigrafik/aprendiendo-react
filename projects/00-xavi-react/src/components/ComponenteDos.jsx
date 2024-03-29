import { useState } from 'react';
import { useEffect } from 'react';

export default function ComponenteDos() {

  const [age, setAge] = useState(5555);
  
  useEffect(() => {

  	return () => {
      console.log('useEffect' + {age});
      
  	};
  }, [setAge]);


    return (
      <>
        <h4>Componente dos XX {'>'}{age}{'<'}</h4>
      </>
    )
}

