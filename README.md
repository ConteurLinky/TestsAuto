Pour lancer les tests automatiques, vous pouvez lancer la commande "npx cypress open" et choisir l'option "E2E Testing"
Choisissez votre navigateur et validez, vous arriverez sur la liste des fichiers de tests automatiques !

Les tests dans le dossier "tests_corrects" fonctionnent et vous pouvez les lancer sans craindre que cela casse le site
Cependant ils peuvent parfois sélectionner les mauvais élèments et ainsi sortir de leurs comportements prévus, d'où les cy.wait()
Un fix qui aurait pu être possible aurait été de mettre des identifiants sur tout les élèments HTML du site

Les tests dans le dossier "tests_incorrects_ou_delicats" sont des tentatives d'automatisation que nous avons effectué.
TC-03-01 ne fonctionne pas car il ne produit pas le comportement prévu
TC-04-01 et TC-08-01 sont délicats car ils suppriment des données dans la base de données, qui pourraient être utilisées dans d'autres tests