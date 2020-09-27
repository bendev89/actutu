/* Gestion du menu responsive */
const logoMenu = document.querySelector('.logoMenuImg');
const contItems = document.querySelector('.menu');
const arrItems = document.querySelectorAll('.menu-item');


logoMenu.addEventListener('click', () => {

    if (contItems.className === 'menu') {

        contItems.className += " responsive";
        logoMenu.style.width = "30px";
        logoMenu.style.top = "5px";
        logoMenu.src = 'assets/close.svg';

    } else {

        contItems.className = "menu";
        logoMenu.style.width = "30px";
        logoMenu.style.top = "13px";
        logoMenu.src = 'assets/menu.svg';

    }

});
arrItems.forEach(item => {

    item.addEventListener('click', () => {

        contItems.className = "contItems";
        logoMenu.src = 'ressources/menu.svg';

    })

});
/* fin du menu responsive */
const recommandation = document.querySelector(".vignettes");
const selection = document.querySelector(".selection");
const livres = [{
        titre: "Cartel des fraudes : Les révélations d'un magistrat français",
        auteur: "Charles Prats",
        prix: 18,
        image: "assets/cartel.jpg",
        resume: "Jamais, depuis la Seconde Guerre mondiale, la France n'a traversé une telle crise politique, sociale, morale et financière. La pandémie de coronavirus a fini d'achever les finances publiques du pays, conduisant l'État à une incapacité de réagir efficacement dès le début d'une crise majeure. ",
    },

    {
        titre: "Yoga",
        auteur: "Emmanuel Carrère",
        prix: 22,
        image: "assets/Yoga.jpg",
        resume: "C’est l'histoire d’un livre sur le yoga et la dépression. La méditation et le terrorisme. L'aspiration à l’unité et le trouble bipolaire. Des choses qui n’ont pas l’air d'aller ensemble, et pourtant : elles vont ensemble.",
    },

    {
        titre: "La voyageuse de nuit",
        auteur: "Laure Adler",
        prix: 15,
        image: "assets/La-voyageuse-de-nuit.jpg",
        resume: "C'est un carnet de voyage au pays que nous irons tous habiter un jour. C'est un récit composé de choses vues sur la place des villages, dans la rue ou dans les cafés. C’est une enquête tissée de rencontres avec des gens connus mais aussi des inconnus. C’est surtout une drôle d’expérience vécue pendant quatre ans de recherche et d’écriture, dans ce pays qu’on ne sait comment nommer : la vieillesse, l’âge ?",
    },

    {
        titre: "Femmes puissantes",
        auteur: "Léa Salamé",
        prix: 20,
        image: "assets/femmes.jpg",
        resume: " On dit des femmes qu’elles sont belles, charmantes, piquantes, délicieuses, intelligentes, vives, parfois dures, manipulatrices ou méchantes. “Hystériques” lorsqu’elles sont en colère. “Arrivistes” lorsqu’elles réussissent. Mais on dit rarement",
    },
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

}
/* on parcourt les livres et on affiche les livres en dessous du prixMax*/
function afficheLivres(prixMax = 20) {
    let bonPrix = livres.filter((livre) => livre.prix < prixMax);
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
    `;
        selection.append(articleLong);
    }
}
// afficheRecommandations();
// afficheLivres(30);
async function RechercheLivres() {
    const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=ecmascript&fields=items(volumeInfo/title,volumeInfo/authors,saleInfo/listPrice/amount,volumeInfo/description,volumeInfo/imageLinks/thumbnail)"
        // "/scripts/site.php", {
        //     // method: 'post',
        //     // body: JSON.stringify(livres),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
    );

    if (!response.ok) {
        const message = `Une erreur est survenue: ${response.status}`;
        throw new Error(message);
    }

    const recherche = await response.json();
    // console.log(response);
    console.log(recherche);
    //   console.log(recherche.items[0].saleInfo.listPrice.amount);
    for (let j = 0; j < recherche.items.length; j++) {
        let prix;
        let image;
        let titre = recherche.items[j].volumeInfo.title;
        let auteur = recherche.items[j].volumeInfo.authors;
        // let image = recherche.items[j].volumeInfo.imageLinks.thumbnail;
        let resume = (recherche.items[j].volumeInfo.description.substr(0, 200));
        if (typeof recherche.items[j].saleInfo !== 'undefined') {
            prix = recherche.items[j].saleInfo.listPrice.amount;
        } else {
            prix = " ";
        }
        if (typeof recherche.items[j].volumeInfo.imageLinks !== 'undefined') {
            image = recherche.items[j].volumeInfo.imageLinks.thumbnail;
        } else {
            image = " ";

        }
        let livre = {
            titre: titre,
            auteur: auteur,
            prix: prix,
            image: image,
            resume: resume
        }
        // console.log(livre);
        livres.push(livre);

        function myFunction() {
            livres.sort(function (a, b) {
                return 0.5 - Math.random()
            });
        }

        myFunction();


    }
    afficheRecommandations();
    afficheLivres(20);

    // console.log(livres);
}
RechercheLivres();

// console.log(livres);