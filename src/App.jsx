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
      <Typography level="h2">Classes and Shapes</Typography>
      <Typography level="h5">
        OOP implemented as util in React
      </Typography>
      <Typography level="body1">
        Blah blah blah
      </Typography>
      <br></br>
      <Typography level="body2">Select a shape to create:</Typography>
      <Select size="sm" defaultValue="Square" onChange={handleChange}>
        <Option value="Square">Square</Option>
        <Option value="Rectangle">Rectangle</Option>
        <Option value="Circle">Circle</Option>
      </Select>
      {shape !== "Circle" && <>
          <Typography level="body2">Heigth</Typography>
          <Input
            size="sm"
            type="number"
            defaultValue={30}
            slotProps={{
              input: {
                ref: heightRef,
                min: 30,
                max: 100,
                step: 1,
              },
            }}
          />
        </>
      }
      {shape === "Rectangle" && <>
          <Typography level="body2">Width</Typography>
          <Input
            size="sm"
            type="number"
            defaultValue={30}
            slotProps={{
              input: {
                ref: widthRef,
                min: 30,
                max: 100,
                step: 1,
              },
            }}
          />
      </>
      }
      {shape === "Circle" && <>
          <Typography level="body2">Circle</Typography>
          <Input
            size="sm"
            type="number"
            defaultValue={15}
            slotProps={{
              input: {
                ref: radiusRef,
                min: 15,
                max: 50,
                step: 1,
              },
            }}
          />
      </>
      }
      <Button
        size="sm"
        color="primary"
        onClick={handleCreate}
        variant="solid"
        id="createButton"
      >
        Create
      </Button>
      <Typography level="h6">My Shapes</Typography>
      <div id="shapesContainer">
        {shapes.map(shape => <Shape shape={shape.shape} values={shape.values}/>)}
      </div>
      <div id="shapesResults">
        <h1>Hey</h1>
      </div>
    </main>
  )
}
