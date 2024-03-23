# KATA : VENTE DES PRODUITS VARIÉS EN PÉRIODE DE SOLDE

Dans ce KATA l'idée est de simuler les achats des utilisateurs en période de forte demande<br>
sur une plateforme E-COMMERCE. 

La plateforme **Le Djoor** permet à tous les utilisateur de benéficier des produits variés à des prix bas durant la période solde.

## BESOINS UTILISATEURS

Pour ce faire, l'utilisateur sur la plateforme pourra éffectuer les actions suivantes : <br>

- Ajouter un produit dans son panier, après l'avoir sélectionner via une liste de base ou après une recherche du produit par son nom.

- Le panier de l'utilisateur doit toujours présenter de manière visible le nombre de produits sélectionnés, la quantité, le coût par produit, le cout total du panier.

- A la validation du panier l'utilisateur est rédirigé vers une page de paiement ou il doit fournir ses informations de paiements pour finaliser son achat.

- Après validation de l'achat une facture est envoyé par mail aux clients.

- Le client aura la possibilité d'annuler son achat.

- Lors de l'achat le client à la possibilité de choisir l'option de livraison à domicile ce qui entraine des coûts supplémentaires de livraison ou l'option de retrait en magasin dans l'un des points **Le Djoor**

- L'utilisateur à la possibilité de faire livrer son achat en tant que cadeaux à une adresse volu, ce type d'achat inclu des frais supplémentaire de conservation et emballage en tant que cadeaux

- Un achat de type cadeaux peut être de type Simple, Anniversaire, Mariage. Chaque type implique un coût spécifique. 

## CONTRAINTE UTILISATEUR

- Tous les produits  **Le Djoor** bénéficie d'une réduction de 20% sur leur prix vente durant la période de solde qui est ouvert chaque année du 10 Décembre au 31 Décembre. 

- Hors période de solde un produit peut avoir une réduction spécifique de 5% décidé par l'équipe dirigeante 

- Lors de l'achat d'un produit un utilisateur durant la période solde ne peut pendre plus de 20 unités d'un même produit.

- A plus de 5 produits différents avec au moins 2 unités par produit l'utilisateur bénéficie d'une remise globale de 5% sur son achat hors mis les frais de livraison et cadeaux (si l'utilisateur choisit ses options)

- A plus de 10 produits différents avec au moins 4 unités par produit l'utilisateur bénéficie d'une remise globale de 10% sur son achat hors mis les frais de livraison et cadeaux (si l'utilisateur choisit ses options)

- L'annulation d'un achat se fait dans un délai de 5h de temps maximum après son achat

## CONTRAINTE GLOBALE

- Un produit à moins de 5 unités est marqué d'une alerte de rupture de stock en cours, une notification est envoyé aux gestionnaires de stock **Le Djoor**

- Lorsqu'une commande est annulé les produits sont rapidement remis à la vente 