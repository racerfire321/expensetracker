import React, {useState, useMemo} from 'react'
import bg from './img/back.jpg'
import "./App.css"
import Size from './Components/size/size';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/GlobalContext';
import Navbar from './Components/NavBar/Navbar'
import Transaction from './Components/Transaction/Transaction ';


function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
 

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction/>
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Size />
  },[])

  return (
    <div id="App_main" bg={bg} className="App">
      {orbMemo}
      <div className='Main_layout'>
        <main className='main_div'>
          {displayData()}
        </main>
        <Navbar active={active} setActive={setActive} />
      </div>
    </div>
  );
}


export default App;
