import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { generateWorkout } from "./utils/functions";

export default function App() {
  const [workout, setWorkout] = useState(null);
  const [poision, setPoision] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout(){
    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({poision, muscles, goal});
    setWorkout(newWorkout);
    setTimeout(() => {
      window.location.href = '#workout';
    }, 0);
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
    <Hero />
    <Generator poision={poision} setPoision={setPoision} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout}/>
    {workout && (<Workout workout={workout}/>)}
    </ main>
  )
}