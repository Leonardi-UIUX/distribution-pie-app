import React from 'react';

/**
 * ControlPanel component allows users to select colors, adjust pins, and update values.
 */
const ControlPanel = ({ colors, selectedIndex, setSelectedIndex, pinsToSubtract, setPinsToSubtract, handleUpdatePins }) => {
    return (
        <div style={{ marginTop: 24, padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
            <h4>Control Panel</h4>
            <div>
                {colors.map((c, i) => (
                    <label key={c.name} style={{ marginRight: 16 }}>
                        <input
                            type="radio"
                            checked={selectedIndex === i}
                            onChange={() => setSelectedIndex(i)}
                        />
                        {c.name}
                    </label>
                ))}
            </div>
            <div style={{ marginTop: 12 }}>
                <label>
                    Pins da sottrarre:
                    <input
                        type="number"
                        min={0}
                        max={10}
                        value={pinsToSubtract}
                        onChange={(e) => setPinsToSubtract(Number(e.target.value))}
                        style={{ marginLeft: 8, width: 60 }}
                    />
                </label>
                <button onClick={handleUpdatePins} style={{ marginLeft: 16 }}>
                    Aggiorna Pins
                </button>
            </div>
        </div>
    );
};

export default ControlPanel;