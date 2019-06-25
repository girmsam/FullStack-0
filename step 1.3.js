import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Part = (grops) => {
    return ( 
        <div>
            <p>
            {grops.name}    {grops.exercises}
            </p>
        </div>

    )
} 
const Content = (props) => {
    return (
      <div>
        <Part name = {props.part1.name} exercises = {props.part1.exercises}
        />
        <Part name = {props.part2.name} exercises = {props.part2.exercises}
        />
        <Part name = {props.part3.name} exercises = {props.part3.exercises}
        />
      </div>
    )
  }

const Total= (props1) => {
    return ( 
        <div>
            <p>
            Number of exercises {props1.eka + props1.toka + props1.kolmas}
            </p>
        </div>

    )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
    return (
      <div>
        <Header course = {course} />
        <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
        <Total eka = {part1.exercises} toka = {part2.exercises} kolmas = {part3.exercises}/>
      </div>
    )
  }
ReactDOM.render(<App />, document.getElementById('root'))