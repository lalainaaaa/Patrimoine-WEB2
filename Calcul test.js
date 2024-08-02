const biens = [ordinateur];
  
  function calculerSommeTotale(biens) {
    let sommeTotale = 0;
    for (const bien of biens) {
      sommeTotale += bien.calculerValeurFinale();
    }
    return sommeTotale;
  }
  
  const sommeTotale = calculerSommeTotale(biens);
  console.log("Somme totale des valeurs finales :", sommeTotale);
  
