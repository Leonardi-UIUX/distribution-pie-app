/**
 * Funzione che aggiorna i Pins e ricalcola i Bumper con vincolo di minimo 10%
 * @param {Array} colors - Array di oggetti { name, pins, bumper }
 * @param {number} selectedIndex - Indice del colore selezionato
 * @param {number} pinsToSubtract - Numero di pins da sottrarre
 * @returns {Array} Nuovo array colori con bumper normalizzati
 */
export function updatePinsAndRecalculateBumpers(colors, selectedIndex, pinsToSubtract) {
  // Copia profonda
  let updated = colors.map((c, i) =>
    i === selectedIndex
      ? { ...c, pins: Math.max(1, c.pins - pinsToSubtract) }
      : { ...c }
  );

  // Calcola pesi
  const weights = updated.map((c) => c.pins * c.bumper);
  const totalWeight = weights.reduce((a, b) => a + b, 0);

  // Calcola percentuali
  let bumpers = weights.map((w) => (w / totalWeight) * 100);

  // Applica vincolo minimo 10%
  let min = 10;
  let forced = bumpers.map((b) => (b < min ? min : b));
  let forcedSum = forced.reduce((a, b) => a + b, 0);

  // Ridistribuisci il resto proporzionalmente
  if (forcedSum > 100) {
    // Se la somma supera 100, riduci i bumper sopra il minimo
    let excess = forcedSum - 100;
    let adjustable = forced.map((b, i) => (b > min ? i : null)).filter((i) => i !== null);
    let totalAdjustable = adjustable.reduce((sum, i) => sum + (forced[i] - min), 0);
    let newBumpers = forced.slice();
    adjustable.forEach((i) => {
      let reduceBy = ((forced[i] - min) / totalAdjustable) * excess;
      newBumpers[i] -= reduceBy;
    });
    bumpers = newBumpers;
  } else {
    // Se la somma è sotto 100, distribuisci il resto proporzionalmente
    let deficit = 100 - forcedSum;
    let adjustable = forced.map((b, i) => (b > min ? i : null)).filter((i) => i !== null);
    let totalAdjustable = adjustable.reduce((sum, i) => sum + (forced[i] - min), 0);
    let newBumpers = forced.slice();
    adjustable.forEach((i) => {
      let addBy = totalAdjustable > 0 ? ((forced[i] - min) / totalAdjustable) * deficit : 0;
      newBumpers[i] += addBy;
    });
    bumpers = newBumpers;
  }

  // Arrotonda e aggiorna
  return updated.map((c, i) => ({
    ...c,
    bumper: Math.round(bumpers[i]),
  }));
}