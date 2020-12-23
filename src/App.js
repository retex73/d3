import React, { useRef, useEffect, useState } from 'react'
import './App.css';
import { select } from 'd3'

// const data = [25, 30, 45, 60, 20, 35]

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 35])
  const svgRef = useRef()
  useEffect(() => {
    const svg = select(svgRef.current)
    svg
      .selectAll('circle')
      .data(data)
      .join("circle")
      .attr('r', value => value)
      .attr('cx', value => value * 2)
      .attr('cy', value => value * 2)
      .attr('stroke', 'green')
      .attr('fill', 'white')
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
