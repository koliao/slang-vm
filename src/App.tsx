import { useState } from 'react'
import VM, { InstructionType } from "./vm"
import './App.css'
import SubOne from "./components/SubOne/SubOne"
import AddOne from "./components/AddOne/AddOne"
import IfNotZeroGoto from './components/IfNotZeroGoto/IfNotZeroGoto'
import Button from './components/Button/Button'
import { useStyles } from './style'

export enum InstructionType {
    AddOne,
    SubOne,
    IfNotZeroGoto,
}

interface Instruction {
    label?: string,
    type: InstructionType,
    variable: string,
    jumpLabel?: string
}

function App() {
  const vm = new VM()

  const [ state, setState ] = useState({});
  const [ code, setCode ] = useState([]);
  const [ pc, setPC ] = useState(0);

  const addInstruction = ( instruction: Instruction ) => {
    code.push(instruction)
    setCode([...code])
  }

  const TypeToComponent = {
    [InstructionType.AddOne]: AddOne,
    [InstructionType.SubOne]: SubOne,
    [InstructionType.IfNotZeroGoto]: IfNotZeroGoto,
  }

  const { classes } = useStyles()

  return (
    <>
      <div className={classes.root} >
        <div className={classes.code} >
          {code.map( ( instruction, i ) => (
            TypeToComponent[instruction.type]( {
              variable: instruction.variable,
              label: (instruction.jumpLabel as string),
              number: i,
              isSelected: false,
              onClick: () => {},
            } )
          ) ) }
        </div>
        <div className={classes.controls}>
          <Button label="Step" />
          <Button label="Run" />
          <Button
            label="V <- V + 1"
            onClick={() => addInstruction({
              type: InstructionType.AddOne,
              variable: "X1",
            })}
          />
          <Button
            label="V <- V - 1"
            onClick={() => addInstruction({
              type: InstructionType.SubOne,
              variable: "X1",
            })}
          />
          <Button
            label="IF V != 0 GOTO L"
            onClick={() => addInstruction({
              type: InstructionType.IfNotZeroGoto,
              variable: "X1",
              jumpLabel: "L",
            })}
          />
        </div>
      </div>
    </>
  )
}

export default App
