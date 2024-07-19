const etudiant = new Etudiant('Lalaina', new Argent(400, 700, 2000), new BiensMateriels('Ordinateur portable', 'Vêtements'), new TrainDeVie(100, 400, 800, 200));

// Fonctions pour décrire le patrimoine actuel
function decrireArgent(argent) {
  console.log("Espèces :", argent.espece);
  console.log("Compte courant :", argent.compteCourant);
  console.log("Compte épargne :", argent.compteEpargne);
}

function decrireBiensMateriels(biensMateriels) {
  console.log("Matériel informatique :", biensMateriels.materielInformatique);
  console.log("Vêtements :", biensMateriels.vetements);
}

function decrireTrainDeVie(trainDeVie) {
  console.log("Loyer :", trainDeVie.loyer);
  console.log("Nourriture :", trainDeVie.nourriture);
  console.log("Transport :", trainDeVie.transport);
  console.log("Vacances :", trainDeVie.vacances);
}

// Fonction pour la projection du patrimoine du  futur
function projeterPatrimoine(etudiant, duree, tauxAnnuel) {
  // Simulation de la croissance de l'argent sur une période donnée
  const argentFutur = etudiant.argent.compteEpargne * (1 + tauxAnnuel/100) ** duree;
  console.log("Projection du patrimoine de", etudiant.nom, "après", duree, "ans :");
  console.log("Compte épargne :", argentFutur);
}
