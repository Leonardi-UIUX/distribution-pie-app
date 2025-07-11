import React, { useState } from "react";
import PieChart from "./components/PieChart";
import ControlPanel from "./components/ControlPanel";
import { updatePinsAndRecalculateBumpers } from "./utils/logic";

/**
 * Colori di default
 */
const DEFAULT_COLORS = [
  { name: "Rosso", pins: 10, bumper: 20 },
  { name: "Blu", pins: 10, bumper: 20 },
  { name: "Verde", pins: 10, bumper: 20 },
  { name: "Giallo", pins: 10, bumper: 20 },
  { name: "Viola", pins: 10, bumper: 20 },
];

function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pinsToSubtract, setPinsToSubtract] = useState(1);
  const [initialColors] = useState(DEFAULT_COLORS); // salva lo stato iniziale

  // Aggiorna i pins e ricalcola i bumper
  const handleUpdatePins = () => {
    const updated = updatePinsAndRecalculateBumpers(colors, selectedIndex, pinsToSubtract);
    setColors(updated);
  };

  // Reset
  const handleReset = () => setColors(initialColors.map(c => ({ ...c })));

  // Randomizza bumper
  const handleRandomizeBumper = () => {
    const total = 100;
    const n = colors.length;
    let bumpers = Array(n).fill(0);
    let remain = total;
    for (let i = 0; i < n - 1; i++) {
      bumpers[i] = Math.floor(Math.random() * (remain - (n - i - 1) * 10) + 10);
      remain -= bumpers[i];
    }
    bumpers[n - 1] = remain;
    setColors(colors.map((c, i) => ({ ...c, bumper: bumpers[i] })));
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <h2>Distribuzione con grafico a torta</h2>
      <PieChart colors={colors} />
      <ControlPanel
        colors={colors}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        pinsToSubtract={pinsToSubtract}
        setPinsToSubtract={setPinsToSubtract}
        handleUpdatePins={handleUpdatePins}
      />
      <div style={{ marginTop: 24 }}>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRandomizeBumper} style={{ marginLeft: 8 }}>
          Randomizza Bumper
        </button>
      </div>
      <table style={{ marginTop: 24, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Colore</th>
            <th>Pins</th>
            <th>Bumper %</th>
            <th>Peso effettivo</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((c, i) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.pins}</td>
              <td>{c.bumper}%</td>
              <td>{c.pins * c.bumper}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;