import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [state, setState] = useState({});
  useEffect(() => {

    fetch('/api/data').then(res => res.json())
      .then(data => setState(data));

  }, [])
  return (
    <div>
      {JSON.stringify(state, null, 2)}
    </div>
  )
}

export default App
