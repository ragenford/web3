import React from 'react';

import Content from 'components/ComponentContent/Content';
import Header from 'components/componentHeader/Header';


const Total = (props) => {

  return(

    <p> {props.number} </p>
  )

}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component' ]
  const exercises = [10, 7, 14]
  

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total number={exercises[0]+exercises[1]+exercises[2]} />
    </div>
  )
}

export default App