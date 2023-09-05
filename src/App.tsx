import { useState } from 'react'
import VM, { InstructionType } from "./vm"
import './App.css'
import SubOne from "./components/SubOne/SubOne"
import AddOne from "./components/AddOne/AddOne"
import IfNotZeroGoto from './components/IfNotZeroGoto/IfNotZeroGoto'
import Button from './components/Button/Button'
import { useStyles } from './style'

function App() {
  const vm = new VM()
  vm.addInstruction({
    type: InstructionType.AddOne,
    variable: "X1",
  })
  vm.addInstruction({
    type: InstructionType.SubOne,
    variable: "X2",
  })
  vm.addInstruction({
    type: InstructionType.IfNotZeroGoto,
    variable: "X1",
    jumpLabel: "L",
  })

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
          {vm.code.map( ( instruction, i ) => (
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
            label="Add 'Add one'"
            onClick={() => vm.addInstruction({
              type: InstructionType.AddOne,
              variable: "X6",
            })}
          />
        </div>
      </div>
    </>
  )
}

export default App
