import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Dentist",
        day: "Feb 5th at 2:30p",
        reminder: true,
    },
    {
        id: 2,
        text: "Podiatrist",
        day: "Feb 6th at 2:30p",
        reminder: true,
    }
  ])

  //add appt
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //toggle remider
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ("No appointments to show")}
    </div>
  );
}

export default App;
