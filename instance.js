// Instance Personne avec les données d'Ilo
const ilo = new Personne(
    400000, // espèces
    200000, // épargne
    5, // taux épargne
    600000, // compte courant
    2000000, // ordinateur
    '2021-10-26', // date d'achat ordinateur
    10, // taux d'amortissement ordinateur
    1000000, // vêtements
    '2024-01-01', // date d'évaluation de vêtements
    20, // taux d'amortissement vêtements
    500000 // train de vie mensuel
    );
    
    // Calcul de la valeur du patrimoine à différentes dates
    const valeurPatrimoine26Juin2024 = ilo.calculerValeurPatrimoine(new Date('2024-06-26'));
    const valeurPatrimoine14Juillet2024 = ilo.calculerValeurPatrimoine(new Date('2024-07-14'));
    const soldeCompteCourant14Juillet2024 = ilo.compteCourant - 2 * ilo.trainDeVieMensuel; 
    
    console.log("Valeur du patrimoine le 26 juin 2024 :", valeurPatrimoine26Juin2024);
    console.log("Valeur du patrimoine le 14 juillet 2024 :", valeurPatrimoine14Juillet2024);
    console.log("Solde du compte courant le 14 juillet 2024 :", soldeCompteCourant14Juillet2024);
    