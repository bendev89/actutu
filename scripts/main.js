const recommandation = document.querySelector('.vignettes');
const selection = document.querySelector('.selection');
const livres = [{
        titre: "Cartel des fraudes : Les révélations d'un magistrat français",
        auteur: "Charles Prats",
        prix: 18,
        image: "assets/cartel.jpg",
        resume: "Jamais, depuis la Seconde Guerre mondiale, la France n'a traversé une telle crise politique, sociale, morale et financière. La pandémie de coronavirus a fini d'achever les finances publiques du pays, conduisant l'État à une incapacité de réagir efficacement dès le début d'une crise majeure. "
    },

    {
        titre: "Yoga",
        auteur: "Emmanuel Carrère",
        prix: 22,
        image: "assets/Yoga.jpg",
        resume: "C’est l'histoire d’un livre sur le yoga et la dépression. La méditation et le terrorisme. L'aspiration à l’unité et le trouble bipolaire. Des choses qui n’ont pas l’air d'aller ensemble, et pourtant : elles vont ensemble."
    },

    {
        titre: "La voyageuse de nuit",
        auteur: "Laure Adler",
        prix: 15,
        image: "assets/La-voyageuse-de-nuit.jpg",
        resume: "C'est un carnet de voyage au pays que nous irons tous habiter un jour. C'est un récit composé de choses vues sur la place des villages, dans la rue ou dans les cafés. C’est une enquête tissée de rencontres avec des gens connus mais aussi des inconnus. C’est surtout une drôle d’expérience vécue pendant quatre ans de recherche et d’écriture, dans ce pays qu’on ne sait comment nommer : la vieillesse, l’âge ?"
    },

    {
        titre: "Femmes puissantes",
        auteur: "Léa Salamé",
        prix: 20,
        image: "assets/femmes.jpg",
        resume: " On dit des femmes qu’elles sont belles, charmantes, piquantes, délicieuses, intelligentes, vives, parfois dures, manipulatrices ou méchantes. “Hystériques” lorsqu’elles sont en colère. “Arrivistes” lorsqu’elles réussissent. Mais on dit rarement"
    }

];

function afficheRecommandations() {

    for (let i = 0; i < 3; i++) {
        let article_item = document.createElement("article");
        article_item.classList.add("vignette-item");
        //on génére les articles
        article_item.innerHTML += `
        <img src=${livres[i].image} alt="" />
        <span class="titre">${livres[i].titre}</span>
        <span class="auteur">${livres[i].auteur}</span>
        <span class="prix"> ${livres[i].prix}€</span>`;
        recommandation.append(article_item);


    }
    // console.log(livres[i].titre);

}

// let bonPrix = livres.filter(livre => livre.prix < 20);
// 

function afficheLivres(prixMax = 20) {
    let bonPrix = livres.filter(livre => livre.prix < prixMax);
    console.log(bonPrix);
    for (let itemBonPrix in bonPrix) {
        let articleLong = document.createElement("article");
        articleLong.classList.add("article-allonge");
        articleLong.innerHTML += ` <div>
        <img src=${livres[itemBonPrix].image} alt="" />
      </div>
      <div class="info">
        <span class="titre">${livres[itemBonPrix].titre}</span>
        <span class="auteur">${livres[itemBonPrix].auteur}</span>
        <p class="resume">
        ${livres[itemBonPrix].resume}
        </p>
      </div>
      <div>
        <span class="prix"> ${livres[itemBonPrix].prix}€</span>
      </div>
    `
        selection.append(articleLong);

    }
}
afficheRecommandations();
afficheLivres(19);

// }