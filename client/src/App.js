import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";

function App() {
  const userEmail = 'tharindu@gmail.com';
  const [tasks, setTasks] = useState(null)
  const getData = async () => {
    
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      // console.log(json);
      setTasks(json)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

//sort tasks
const sortedTasks = tasks?.sort((a,b)=> new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <ListHeader listName={'🌲 Holiday tick list'} getData = {getData} />
      {sortedTasks?.map(task => <ListItem key={task.id} task={task} getData = {getData} />)}
    </div>
  );
}

export default App;
