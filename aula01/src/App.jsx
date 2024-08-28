import { useState } from 'react'
import './App.css'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import PrecisoEstudar from './components/PrecisoEstudar'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrecisoEstudar materia="React" />
      <Adicao num1={10} num2={20} />
      <Subtracao num1={20} num2={10} />
      <Divisao num1={20} num2={10} />
      <Multiplicacao num1={20} num2={10} />
    </>
  )
}

export default App
