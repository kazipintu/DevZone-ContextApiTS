/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react'
import './App.css'
import { contextAPI } from './shared/Context/Context';
import Condition from './condition/Condition';

function App() {

  const { nameList, student } = useContext(contextAPI);

  return (
    <div>
      {
        nameList?.map((names: string, i: number) => (
          <p key={i}>{names}</p>
        ))
      }
      <p>{student?.name}</p>
      <p>{student?.age}</p>
      <p>{student?.dept}</p>
      <Condition />
    </div>
  )
}

export default App
