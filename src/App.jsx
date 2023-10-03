import { useState } from 'react'
import {puppyList} from './data.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)

  console.log(puppyList);
  return (
    <>
      <div>
        { 
            puppies.map((puppy) => {
              return <p key={puppy.id}>{puppy.name}</p>
            })
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
