
import './App.css';
import {useSelector} from "react-redux";

import CreateTodoForm from "./component/form/createTodoForm";




function App() {
  const store = useSelector(state => state)
  const onTodoCreate = async (title, description) => {
      if (!title || !description) return;

      const response= await fetch('http://localhost:8888', {
          method: 'POST',
          body: JSON.stringify({title, description})
      })
      const data = await response.json();
      console.log(data);
  }


  return (
    <div className="App">
      <CreateTodoForm />
    </div>
  );
}

export default App;
