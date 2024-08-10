import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Table, Button, Container } from 'react-bootstrap';


function PatrimoineCalculator() {
  const [biens, setBiens] = useState([]);
  const [dateCalcul, setDateCalcul] = useState(new Date());
  const [valeurTotale, setValeurTotale] = useState(0);
  const allBiens = localStorage.getItem("biens");
  const [l, setL] = useState(false);

  
  useEffect(() => {
    if (allBiens == null) {
      localStorage.setItem("biens", JSON.stringify([]));
    }
  }, [allBiens]);

  useEffect(() => {
    const storedBiens = localStorage.getItem("biens");
    setBiens(JSON.parse(storedBiens));
  }, [l]);

  const handleAddBien = () => {
    const nouveauBien = {
      libelle: "1 Ordinateur",
      valeurInitiale: 2000000,
      dateDebut: new Date(2021, 10, 26), 
      dateFin: new Date(2024, 4, 13),    
      tauxAmortissement: 0.1
    };

    let newTab = [...biens, nouveauBien]; 
    localStorage.setItem("biens", JSON.stringify(newTab));
    setL(!l); 
  };

  const calculerValeurActuelle = (bien) => {
    const { valeurInitiale, dateFin, tauxAmortissement } = bien;
    const dureeVieRestante = (new Date(dateFin) - dateCalcul) / (1000 * 60 * 60 * 24 * 365.25);
    const amortissementAnnuel = valeurInitiale * tauxAmortissement;
    const amortissementCumule = amortissementAnnuel * dureeVieRestante;
    const valeurActuelle = valeurInitiale - amortissementCumule;

    return valeurActuelle;
  };

  const calculerPatrimoine = () => {
    const valeurTotale = biens.reduce((total, bien) => {
      const valeurActuelle = calculerValeurActuelle(bien);
      return total + valeurActuelle;
    }, 0);

    setValeurTotale(valeurTotale);
  };

  return (
    <Container>

      {/* Tableau des biens */}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className="cell-center">Libellé</th>
            <th className="cell-center">Valeur Initiale</th>
            <th className="cell-center">Date Début</th>
            <th className="cell-center">Date Fin</th>
            <th className="cell-center"> Taux d'Amortissement</th>
            <th>Valeur actuelle</th>
          </tr>
        </thead>
        <tbody>
          {biens.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">Aucun bien disponible</td>
            </tr>
          ) : (
            biens.map((bien, index) => (
              <tr key={index}>
                <td className="cell-center">{bien.libelle}</td>
                <td className="cell-center">{bien.valeurInitiale} Ar</td>
                <td className="cell-center">{format(new Date(bien.dateDebut), 'dd/MM/yyyy')}</td>
                <td className="cell-center">{format(new Date(bien.dateFin), 'dd/MM/yyyy')}</td>
                <td className="cell-center">{bien.tauxAmortissement} %</td>
                <td className="value-cell">{calculerValeurActuelle(bien).toFixed(0)} Ar</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* DatePicker */}
      <div className="date-picker-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>  <DatePicker
    selected={dateCalcul}
    onChange={(date) => setDateCalcul(date)}
    dateFormat="dd/MM/yyyy"
  />

      {/* Bouton Valider */}
      <Button variant="primary" onClick={calculerPatrimoine}>Valider</Button>
      </div>
      
      {/* Résultat */}
      <p>Valeur totale du patrimoine : {valeurTotale.toFixed(0)} Ar</p>

      {/* Ajouter un bien  */}
      <Button onClick={handleAddBien}>Ajouter un Bien</Button>
      <span style={{ marginLeft: '10px' }}></span>
      <button onClick={() => {
  localStorage.setItem("biens", JSON.stringify([]));
  setL(!l);
  setValeurTotale(0);
}}>Clear</button>
    </Container>
  );
}
