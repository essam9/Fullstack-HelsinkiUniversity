import { useState,useEffect } from 'react'

import Button from './components/Button'
import Header from './components/Header'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points,setPoints]=useState([]);
  const [anecdote,setAnecdote]=useState(anecdotes[selected]);
  const [votes,setVotes]= useState(0)
  const texts={
    next:"next anecdotes",
    vote:"vote"
}
const next = () =>{
  setSelected(Math.floor (Math.random () * anecdotes.length))
  console.log(selected)

}
const vote= ()=>{
  const copy = [...points]
  //if (!points[selected])
  //copy[selected]=1;
  //else 
copy[selected]=points[selected]+1
console.log(copy)
setPoints(copy)
setAnecdote(anecdotes[copy.indexOf(Math.max(...copy))])
setVotes(Math.max(...copy))
}

  useEffect(()=>{
    const array = new Array(anecdotes.length).fill(0)
    setPoints(array)
    setSelected(Math.floor (Math.random () * anecdotes.length));
  },[])

  return (
    <div>
      <Header name="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <Button name={texts.vote} onClick={vote}/>
      <Button name={texts.next} onClick={next}/>
      <Header name="Anecdote with most votes"/>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}
export default App;
