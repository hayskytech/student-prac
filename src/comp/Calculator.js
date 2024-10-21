import React, { useEffect, useState } from 'react'

export default function Calculator() {
  const [x, setx] = useState(6)
  const [y, sety] = useState(5)
  const [total, setTotal] = useState(x + y)

  function run() {
    setTotal(Number(x) + Number(y))
  }

  useEffect(() => {
    setTotal(Number(x) + Number(y))
  }, [x, y])

  return (
    <div>
      <h2>Addition</h2>

      <input type="number" value={x} onChange={(e) => setx(e.target.value)} />
      <input type="number" value={y} onChange={(e) => sety(e.target.value)} />
      <button onClick={run}>OK</button>
      <h3>{total}</h3>
    </div>
  )
}
