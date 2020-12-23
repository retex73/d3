import React, { useRef, useEffect, useState } from 'react'
import './App.css';
import { select, line, curveCardinal } from 'd3'

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75])
  const svgRef = useRef()
  useEffect(() => {
    const svg = select(svgRef.current)
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => 150 - value)
      .curve(curveCardinal)

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("stroke", "blue")
      .attr("fill", "none")

  }, [data])
  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>update data</button>
      <button onClick={() => setData(data.filter(value => value < 35))}>filter data</button>
    </React.Fragment>
  );
}

export default App;
