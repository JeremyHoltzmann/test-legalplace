# LegalPlace Take-Home Test Specification

You are a new developer in the Falcon team, and your first job is to add a feature to an old existing piece of code.

## System specifications

Hi and welcome to the team. We are in the future, and Falcon has extended its activities by opening a pharmacy. Your task is to add a new feature to our system so that we can begin distributing a new drug. First an introduction to our system:

- All drugs have an `expiresIn` value which denotes the number of days we have until the item expires.
- All drugs have a `benefit` value which denotes how powerful the drug is.
- At the end of each day our system lowers both values for every drug

But there is more:

- Once the expiration date has passed, Benefit degrades twice as fast.
- The Benefit of an item is never negative.
- "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
- The Benefit of an item is never more than 50.
- "Magic Pill" never expires nor decreases in Benefit.
- "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.

We have recently signed a supplier of "Dafalgan". This requires an update to our system:

- "Dafalgan" degrades in Benefit twice as fast as normal drugs.

## Instructions

- [ ] Create a clone from this repository
- [ ] Implement the required feature
- [ ] Push the clone to your own repository when satisfied
- [ ] Send us the link and tell us approximatively how much time you spent on this assignment

You are encouraged to refactor the existing code before adding your own, as you would do if this was a real task in real life. We strongly recommend that you write tests to help you during this process.

Feel free to make any changes to the `updateBenefitValue` method implementation and add any new code as long as everything still works correctly. However, do not break the public API of the `Drug` and `Pharmacy` classes, as those are used by other pieces of the software (you can add new methods though).

Please commit as frequently as possible to make the review easier.

We expect you to spend no more than 2 hours on this assignment. We value the quality of the end result, not how much time you have spent on it.

## Test

To make sure that you will not break anything in the existing code, we added the result of the simulation in the _output.json_ file. Make sure that your code is able to generate a file with identical content. You can generate a new file by running the following command:

```sh
yarn start
```


# Déroulement du test
Aucune IA n'a été utilisé pour ce test.

Il a été écrit sur VS Code avec Copilot de désactivé.

Temps passé : 1h35

## 1ere étape
Fix des erreurs de lint, afin de conserver un code propre, lisible et respectueux des normes mises en place.

## 2ème étape
### Ecriture des règles des médicaments
Afin de découpler la logique métier de chaque médicaments, j'ai mis en place une interface contenant les méthodes à implémenter lors de l'ajout d'une nouveau médicaments. 
J'ai ensuite implementé les règles pour chaques médicaments. Chacune de ses règles hérite de l'interface et implèmente les méthodes nécessaires au calculs de "benefit" et de "expireIn"
Ajout d'un fichier de constant contenant le benefit max et min afin de pouvoir rapidement les modifier en cas de changement de règles métiers

## 3ème étape
Création d'une factory permettant de récuperer les règles de chaques médicaments en fonction de son nom. Si le nom ne se trouve pas dans la factory, les règles de base s'applique pour ce médicament.

## 4ème étape
Ecriture des tests afin de vérifier que la logique métier pour l'ensemble des médicaments est respectée. 
Correction de la logique métier en cas de test non-valide.

