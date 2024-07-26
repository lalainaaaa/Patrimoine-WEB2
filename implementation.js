// Données
const personne = {
    salaire: 2000,
    depenses: {
        logement: 800,
        alimentation: 500,
        transport:200,
        loisirs: 300,
    }
};

// Calcul du budget restant
function calculerBudgetRestant(personne){
    let depensesTotales = 0;
    for(const desponse in personne.depenses){
        depensesTotales += personne.depenses[depense];
    }
    return personne.salaire - depensesTotales;
}
    const budgetRestant = calculerBudgetRestant(personne);
    console.log("Budget restant : " + budgetRestant + "Ar");
