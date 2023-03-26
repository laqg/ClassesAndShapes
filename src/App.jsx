import './App.css'

import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import Shape from "./Shape";

import { useState, useEffect, useRef } from "react";

export default function App() {

  const [shapes, setShapes] = useState([])
  const [shape, setShape] = useState("Square")

  const heightRef = useRef(null)
  const widthRef = useRef(null)
  const radiusRef = useRef(null)

  function handleChange(value){
    setShape(value)
  }

  function addShape(...values){
    setShapes(prev => {
      const newShapes = [...prev]
      newShapes.push({shape: values[0] === values[1] ? "Square" : shape, values:values})
      return newShapes
    })
  }

  function handleCreate(){
    if (shape === "Square"){
      const height = heightRef.current.value
      addShape(height)
    }
    if (shape === "Rectangle"){
      const height = heightRef.current.value
      const width = widthRef.current.value
      addShape(height, width)
    }
    if (shape === "Circle"){
      const radius = radiusRef.current.value
      addShape(radius)
    }
  }

  function handleChange(e, value) {
    setShape(value)
  }
  
  return (
    <main>
      <Typography level="h1">Classes and Shapes</Typography>
      <Typography level="h3">
        OOP implemented as util in React
      </Typography>
      <Typography level="body1">
        Blah blah blah
      </Typography>
      <br></br>
      <Typography level="body1">Select a shape to create:</Typography>
      <Select defaultValue="Square" onChange={handleChange}>
        <Option value="Square">Square</Option>
        <Option value="Rectangle">Rectangle</Option>
        <Option value="Circle">Circle</Option>
      </Select>
      {shape !== "Circle" && <>
          <label>Height</label>
          <Input
            type="number"
            defaultValue={10}
            slotProps={{
              input: {
                ref: heightRef,
                min: 10,
                max: 100,
                step: 1,
              },
            }}
          />
        </>
      }
      {shape === "Rectangle" && <>
        <label>Width</label>
          <Input
            type="number"
            defaultValue={10}
            slotProps={{
              input: {
                ref: widthRef,
                min: 10,
                max: 100,
                step: 1,
              },
            }}
          />
      </>
      }
      {shape === "Circle" && <>
        <label>Radius</label>
          <Input
            type="number"
            defaultValue={5}
            slotProps={{
              input: {
                ref: radiusRef,
                min: 5,
                max: 50,
                step: 1,
              },
            }}
          />
      </>
      }
      <Button
        color="primary"
        onClick={handleCreate}
        variant="solid"
      >Create</Button>
      {shapes.map(shape => <Shape shape={shape.shape} values={shape.values}/>)}
    </main>
  )
}
