import React from 'react';
import Part from './../ComponentPart/Part'

const Content = (props) => {
  return (
    <div>
       <Part partName={props.parts[0]} exercises={props.exercises[0]} />
      <Part partName={props.parts[1]} exercises={props.exercises[1]} />
      <Part partName={props.parts[2]} exercises={props.exercises[2]} />
    </div>
  )
}

export default Content;