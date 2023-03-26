import React from "react"

export default function Shape({shape, values}){
  return <>
    {shape === "Square" && <div>
        <svg width={values[0]} height={values[0]}>
          <rect width={values[0]} height={values[0]} style={{fill:"blue"}} />
        </svg>
      </div> 
    }
    {shape === "Rectangle" && <div>
        <svg width={values[1] } height={values[0]}>
          <rect width={values[1]} height={values[0]} style={{fill:"red"}} />
        </svg>
      </div>
    }
    {shape === "Circle" && <div>
        <svg height={6 + values[0] * 2} width={6 + values[0] * 2}>
          <circle cx={+values[0] + 3} cy={+values[0] + 3} r={values[0]} style={{fill:"green"}} />
        </svg> 
      </div>
    }
  </>
}