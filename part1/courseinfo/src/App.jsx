// Header takes care of rendering the name of the course,
// Content renders the parts and their number of exercises and
// Total renders the total number of exercises.

const Header = (props) => {
  return (
    <h1> {props.course.name} </h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.content.parts[0].name} exercise={props.content.parts[0].exercises}/>
      <Part part={props.content.parts[1].name} exercise={props.content.parts[1].exercises}/>
      <Part part={props.content.parts[2].name} exercise={props.content.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  let value = 0
  props.total.parts.forEach(x => value += x.exercises)

  return (
    <p>Number of exercises {value}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content content={course} />
      <Total total={course} />
    </div>
  )
}

export default App
