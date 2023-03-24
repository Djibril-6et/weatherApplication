# Weather Application with React-Native

- **Home page** : 
    - Villes par defaut
    - Recherche parmis une grandes liste des principales villes du monde (Bouton "Search" ou Touche Entrer)
    - Accès à ses favoris (logo en haut à droite dans le header)

- **Page détails** :
    - Ajout de la ville en favoris
    - Alert si la ville est déjà en favoris lorsqu'on click une deuxième fois sur l'étoile

- **Page Favoris** : 
    - ScrollView affichant les villes favorites ou Text indiquant qu'il n'y en a pas
    - Bouton de suppression d'un ville de la liste des favoris


ZAKARIA : Pour utiliser l'api il faut une key que je t'ai envoyé sur discord (LeSr).
Il faut la mettre dans le fichier '../src/services/api.service.js' sur la variable 'apiKey'.

Un souci rencontré et pas encore reglé :

    - Les villes de la liste des favoris se mettent en "undefined" lorsqu'on quitte et reviens sur la page
