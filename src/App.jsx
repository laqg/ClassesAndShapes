import './App.css'

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
  
  return (
    <main>
      <h1>Shapes and Classes</h1>
      <p>blah blah blah</p>

      <label>Select a shape to create:</label>
      <select onChange={(e)=>{handleChange(e.target.value)}}>
        <option defaultValue value="Square">Square</option>
        <option value="Rectangle">Rectangle</option>
        <option value="Circle">Circle</option>
      </select>
      {shape !== "Circle" && <>
          <br></br>
          <label>Height</label>
          <input ref={heightRef} type="number" min="10" max="100"></input>
        </>
      }
      {shape === "Rectangle" && <>
        <br></br>
        <label>Width</label>
        <input ref={widthRef} type="number" min="10" max="100"></input>
      </>
      }
      {shape === "Circle" && <>
        <br></br>
        <label>Radius</label>
        <input ref={radiusRef} type="number" min="10" max="100"></input>
      </>
      }
      <button onClick={handleCreate}>Create</button>
      {shapes.map(shape => <Shape shape={shape.shape} values={shape.values}/>)}
    </main>
  )
}
