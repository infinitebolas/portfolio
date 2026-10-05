import { Injectable } from "@angular/core";
import { ProjetsModel } from "../Models/projets-model";

@Injectable({
    providedIn:'root'
})

export class ProjetsService{
    private projets:ProjetsModel[]= [  
        new ProjetsModel(
            "1",
            "Stage hiji",
            ['/images/java.png'],
            "Mon stage de deuxième année à IPSSI m'a permis de travailler chez hiji, une entreprise spécialisée dans le management. J'ai été amené à développer un PowerPoint pour remplacer "+
            "une fonctionnalité déjà présente, se basant sur l'évaluation d'un collaborateur par ses collègues, managers... Chaque partie du rapport a une utilité différente, "+
            "qu'il s'agisse de statistiques, de graphiques, de tableaux...",
            [['/images/powerpoint/topflop.png','/images/powerpoint/resultats.png','/images/powerpoint/stats.png','/images/powerpoint/competence.png','/images/powerpoint/go.png','/images/powerpoint/verbatims.png'],
            ["Cette partie présente les gestes observables les plus forts de la personne évaluée, et leur compétence associée. ",
                "Toutes les compténces sont affichées sous forme de graphiques, avec leurs pourcentages en fonction de la moyenne de la catégorie.",
                "Ce tableau est la suite directe de la partie précédente, avec les valeurs numériques de chaque point du graphique. Les valeurs pour chaque catégorie (sauf l'auto-évaluation) "+
                "ont une couleur afin de voir la comparaison avec la résultat global.",
                "Cet élément explique le détail des statistiques d'une compétence, avec la répartition des réponses par catégorie, ainsi que la moyenne associée.",
                "Chaque compétence est composée de plusieurs gestes observables, dont la représentation est la même que pour les compétences. Ce sont eux qui permettent de calculer le nombre de "+
                "réponses totales.",
                "Les verbatims (ou conseils) permettent à la personne observée de connaître ses points d'amélioration. Comme chaque commentaire est écrit caractère par caractère, "+
                "j'ai dû vérifier s'il y avait assez de place sur la slide actuelle pour écrire le commentaire, et s'il n'y pas assez de place pour le terminer sur la même slide, une slide supplémentaire est créée."
            ]]
        ),
        new ProjetsModel(
            "2",
            'Projet Garage',
            ['/images/angular.png','/images/java.png','/images/sql.svg'],
            "Suite à mon apprentissage de Java et Angular, j'ai réalisé un site de gestion de garages et de voitures. J'ai pour cela mis en place un CRUD (create read update delete) "+
            "pour la gestion des garages et voitures, avec un backend en Java. Il est possible de voir la liste des garages, de voir leurs informations, et de les modifier. Par ailleurs, chaque voiture peut "+
            "être associée et dissociée à un garage.",
            [['/images/garage/liste_voitures.png','/images/garage/detail_voiture.png','/images/garage/modif_voiture.png','/images/garage/detail_garage.png'],
            ["Pour la liste des garages et voitures, la structure est la même, avec la possibilité de voir chaque élémént, le modifier et le supprimer.",
                "Chaque voiture possède des caractéristiques qui lui sont propres, affichées sur sa page dédiée. On peut l'associer à n'importe quel garage, mais aussi la dissocier.",
                "Il est possible de modifier toutes les caractéristiques d'une voiture.",
                "L'affichage du garage est similaire à celui des voitures, mais on voit cette fois-ci toutes les voitures qui lui sont associées."]]
        ),

        new ProjetsModel(
            "3",
            "Stage BNP Paribas",
            ['/images/python.png','/images/HTML.png','/images/css.png','/images/js.png','/images/sql.svg' ],
            "Suite à ma première année à IPSSI, j'ai eu la chance d'effectuer un stage au sein de BNP Paribas, au cours duquel j'ai été chargé de réaliser une webapp sur Dataiku, "+
            "un logiciel principalement destiné à la data analyse. Mon objectif était de remplacer un logiciel utilisé en interne mais déprécié, utilisé pour le traitement de données. "+
            "La webapp se découpe en plusieurs parties qui sont : visualisation de données, exécution de ses propres requettes sql et téléchargement des données en excel ou txt.",
            [['/images/webapp/dico.png','/images/webapp/dico_sql.png'],
            ["Le principal enjeu était de visualiser les données issues des dictionnaires de données (équivalant de tables sql) stockés dans Teradata. On peut choisir le dictionnaire, et plus spécifiquement "+
                "les colonnes, qui sont ensuite affichées sous forme de tableau.",
                "Pour les requêtes sql, un textarea a été ajouté, permetant d'exécuter ses propres requêtes sur les différents dictionnaires de BNP Paribas, de les sauvegarder et les supprimer. "+
                "Comme les requêtes sont personnelles, les recherches de tous les collaborateurs sont préservées, puisqu'elles sont liées à leur session. "+
                "J'ai également créé une liste d'instructions interdites, afin d'empêcher des actions néfastes, comme DROP, ALTER, TRUNCATE, DELETE, UPDATE... Cela permet de vérifier que les requêtes sont sans danger."]]
        ),
        new ProjetsModel(
            "4",
            "TicTacToe",
            ['/images/go.png'],
            "Afin de m'entraîner après mon apprentissage de go, j'ai réalisé un jeu de TicTacToe, qui permet à deux joueurs de s'affronter, et de déterminer le vainqueur.",
            [['/images/tictactoe/deroulement.png','/images/tictactoe/gagnant.png'],
            ["Pendant chaque tour, un joueur choisit une case définie par un chiffre. Si la case est libre, son symbole est appliqué. Si elle est occupée, il doit en choisir une autre.",
                "La partie se termine quand trois symboles sont alignés."]]
        ),

        new ProjetsModel(
            "5",
            "Site vitrine pastel",
            ['/images/wordpress.png'],
            "J'ai eu l'occasion de réaliser le site vitrine de ma mère, pastelliste, réalisant princiaplement des paysages et animaux. J'ai donc mis en avant ses réalisations, sa technique..."+
            '<a href="https://arpastel.com" target="_blank">>LIEN VERS LE SITE<</a>'
        ),
        new ProjetsModel(
            "6",
            "PetShop",
            ['/images/HTML.png','/images/css.png'],
            "Dans le cadre de ma première année à IPSSI, j'ai dû réaliser un site vitrine pour une animalerie en respectant des contraintes techniques, comme la présence de "+
            "header, footer, et de différents effets.",
            []
        ),
        new ProjetsModel(
            "7",
            "Stage Equi-rider",
            ['/images/wordpress.png'],
            "Mon apprentissage de WordPress a été réalisé en stage chez Equi-rider, une société qui organise des compétitions équestres internationales permettant la confontation "+
            "à distances des centres équestres et des cavaliers. J'ai ainsi pu réaliser le site vitrine d'une écurie partenaire, en contact permanent avec la propriétaire."
        )
    ];
    getProjets():ProjetsModel[]{
        return [...this.projets];
    }
    getProjetById(projetId:string):ProjetsModel{
    const foundProjet = this.projets.find(projet=> projet.id === projetId);
    if(!foundProjet){
        throw new Error('Projet not found!');
    }
    return foundProjet;
    }
}