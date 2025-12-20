import './styles/main.css'
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('api/users')
      .then((res) => res.json())
      .then(data => setData(data))
  })

  return (
    <div className='h-screen bg-gray-400 text-white font-bold text-3xl w-full flex items-center justify-center'>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default App
