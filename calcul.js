// Calcul de la valeur résiduelle des vêtements
const nbreJoursEcoulesVetements = Math.floor((date - this.dateEvaluationVetements) / (1000 * 60 * 60 * 24));
const nbreAnneesEcouleesVetements = nbreJoursEcoulesVetements / 365;
const valeurResiduelleVetements = this.vetements * (1 - this.tauxAmortissementVetements * nbreAnneesEcouleesVetements);

// Calcul du nouveau solde du compte courant
// (simplification: on suppose que le train de vie est constant et prélevé au début de chaque mois)
// Un calcul plus précis pourrait tenir compte de la date exacte de prélèvement
const nbMoisEcoules = Math.floor((date - this.dateEvaluationVetements) / (1000 * 60 * 60 * 24 * 30));
const nouveauCompteCourant = this.compteCourant - nbMoisEcoules * this.trainDeVieMensuel;

// Calcul de la valeur totale du patrimoine
const valeurTotale = this.especes + this.epargne * (1 + this.tauxEpargne) + valeurResiduelleOrdinateur + valeurResiduelleVetements + nouveauCompteCourant;

return valeurTotale;
