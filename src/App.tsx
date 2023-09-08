import { useState } from 'react'
import { MantineProvider } from '@mantine/core';
import { observer } from "mobx-react-lite"
import VM, { InstructionType } from "./vm"
import './App.css'
import SubOne from "./components/SubOne/SubOne"
import AddOne from "./components/AddOne/AddOne"
import IfNotZeroGoto from './components/IfNotZeroGoto/IfNotZeroGoto'
import Button from './components/Button/Button'
import { useStyles } from './style'
import WatchWindow from './components/WatchWindow/WatchWindow';

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


const vm = new VM()

const App = observer( () => {
  const TypeToComponent = {
    [InstructionType.AddOne]: AddOne,
    [InstructionType.SubOne]: SubOne,
    [InstructionType.IfNotZeroGoto]: IfNotZeroGoto,
  }

  const { classes } = useStyles()

  return (
    <MantineProvider theme={{colorScheme: "dark"}}>
      <div className={classes.root} >
        <div className={classes.code} >
          {vm.code.map( ( instruction, i ) => {
            const InstructionComponent = TypeToComponent[instruction.type]

            return (
              <InstructionComponent
                variable={instruction.variable}
                label={instruction.jumpLabel as string}
                number={i}
                isSelected={false}
                onClick={() => {}}
              />
            )
          } ) }
        </div>
        <div className={classes.controls}>
          <AddOne
            variable={"X1"}
            number={0}
            isSelected
            onClick={() => {}}
          />
          <Button label="Step" />
          <Button label="Run" />
          <Button
            label="V <- V + 1"
            onClick={() => vm.addInstruction({
              type: InstructionType.AddOne,
              variable: "X1",
            })}
          />
          <Button
            label="V <- V - 1"
            onClick={() => vm.addInstruction({
              type: InstructionType.SubOne,
              variable: "X1",
            })}
          />
          <Button
            label="IF V != 0 GOTO L"
            onClick={() => vm.addInstruction({
              type: InstructionType.IfNotZeroGoto,
              variable: "X1",
              jumpLabel: "L",
            })}
          />
        </div>
        <WatchWindow vm={vm}/>
      </div>
    </MantineProvider>
  )
} )

export default App
