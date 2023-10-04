import { useState } from 'react'
import {puppyList} from './data.js'
import './index.css'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  console.log(puppyList);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div>
        <h1> Pick your puppy </h1>
        <div className="border-p">
        { 
        
            puppies.map((puppy) => {
              return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
              
            })
        }
        </div>
              {featPupId && (
        <div className="border-bullet">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      </div>

    </>
  )
}

export default App
