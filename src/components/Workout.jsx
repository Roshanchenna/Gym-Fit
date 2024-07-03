import React from 'react'
import Sectionwrapper from './Sectionwrapper'
import ExerciseCard from './ExerciseCard'

const Workout = ({workout}) => {
  return (
    <Sectionwrapper
    header={"Welcome to"}
    title={["The", "Danger", "zone"]}
    id={'workout'}
  > 
  <div className='flex flex-col gap-4'>
    {workout.map((exercise, i)=>{
      return(
        <ExerciseCard exercise={exercise} key={i} index={i} />
      )
    })}
  </div>
  </Sectionwrapper>
  )
}

export default Workout