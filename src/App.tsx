import {useState, useRef, useEffect} from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick:'dafusa',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dafusa',
    description: 'Dafusa se encarga del front '
  },
  {
    nick: 'sergio_sosa',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_sosa'
  }
]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
    return () => {
    }
  }, [])

  const handleNewSubs = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  
  return (
    <div className="App" ref= {divRef}>
      <h1>dave subs</h1>
      <List subs={subs}/>
      <Form onNewSub = {handleNewSubs}/>
    </div>
  );
}

export default App;
