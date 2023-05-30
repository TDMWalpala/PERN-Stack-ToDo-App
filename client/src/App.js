import ListHeader from "./components/ListHeader";
import { useEffect } from "react";

function App() {
  const getData = async () => {
    const userEmail = 'tharindu@gmail.com';
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <ListHeader listName={'🌲 Holiday tick list'}/>
    </div>
  );
}

export default App;
