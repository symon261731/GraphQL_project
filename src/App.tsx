import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATA } from './graphql/GET_DATA';

function App() {
  const {data, error, loading} = useQuery(GET_DATA);

  return (
    
    <div className="App">
      {data?.locations.map((element: any)=>{
        return (
          <div key={element.id}>
            <h3>{element.name}</h3>
            <img width={400} height={200} src={element.photo} alt="123" />
            <br />
            <p>desciption:</p>
            <p>{element.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
