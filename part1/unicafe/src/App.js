//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header'
//import Part from './components/Part'
import Button from './components/Button'
import Statistics from './components/Statistics'
//import {Button} from 'react'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [average, setAverage] = useState(0)
  //const [positive, setPositive] = useState(0)


  const unicafe={
    feedback:"give feedback",
    statistics:"statistics"
  }
  //const feedbackGood =()=>setGood(good+1);
  //const feedbackNeutral =()=>setNeutral(neutral+1);
  //const feedbackBad =()=>setBad(bad+1);
  const feedback=(fb)=>()=>{
if (fb==='good')
setGood(good+1);
if (fb==='neutral')
setNeutral(neutral+1);
if (fb==='bad')
setBad(bad+1);
//console.log((good*1)+(neutral*0)-(bad*1));
//console.log(good+neutral+bad);
  }


  return (
    <div>
      <Header name={unicafe.feedback}/>
      <Button name="good" onClick={feedback('good')}/>
      <Button name="neutral" onClick={feedback('neutral')}/>
      <Button name="bad" onClick={feedback('bad')}/>
      <Header name={unicafe.statistics}/>
      <Statistics statistics={[good,neutral,bad]}/>
    </div>
  )
}

export default App;
