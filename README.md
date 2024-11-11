# Projet Template-Angular

## Description

Ce projet est une application front-end développée avec Angular 18, avec une structure de code simplifiée et plus performante. La séparation par
dossiers (`Core`, `Shared`, `Environment`, `Views`) facilite la gestion de responsabilités et la réutilisabilité des
composants et services.

## Table des matières

- [Installation](#installation)
- [Lancement](#lancement)
- [Structure du projet](#structure-du-projet)
- [Pratiques de développement](#pratiques-de-développement)
- [Auteurs](#auteurs)

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/TonyLaPoche/template-angular-18.git
   cd template-app
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

## Lancement

Pour lancer le serveur de développement, exécutez la commande suivante :

```bash
ng serve
```
ou

```bash
ng serve --serve # lance votre navigateur par défaut sur `http://localhost:4200`
```

Puis, rendez-vous sur `http://localhost:4200` dans votre navigateur pour voir l'application.

## Structure du projet

La structure du projet est optimisée pour tirer parti des composants autonomes d’Angular 18. Chaque composant, service,
ou directive est indépendant et peut être importé directement où il est nécessaire, sans besoin de modules explicites.

```
src/
├── app/
│   ├── core/                 # Services, guards, interceptors et éléments globaux de l'application
│   ├── shared/               # Composants, directives, pipes réutilisables
│   ├── environment/          # Configurations d'environnement (dev, prod)
│   ├── views/                # Composants principaux de chaque vue de l'application
│   └── main.ts               # Point d'entrée de l'application
├── assets/                   # Images, fichiers statiques
├── environments/             # Variables d'environnement
└── index.html                # Fichier HTML racine
```

### Détail des dossiers

- **Core**: Ce dossier contient tous les services essentiels, guards, et interceptors, accessibles à l'ensemble de l'
  application. Ces éléments sont conçus pour être injectés comme des singletons et restent au niveau global. 

  Structure du dossier :
  ```
  core/
  ├── services/               # Services globaux (ex : AuthService, ApiService)
  ├── guards/                 # Guards de navigation (AuthGuard)
  └── interceptors/           # Intercepteurs HTTP (ErrorInterceptor, TokenInterceptor)
  ```

- **Shared**: Ce dossier regroupe tous les composants, directives, et pipes réutilisables qui peuvent être partagés dans
  l’application. Chacun de ces éléments est autonome (`standalone`), ce qui permet une importation directe dans
  n’importe quel composant ou vue.

  Structure du dossier :
  ```
  shared/
  ├── components/             # Composants réutilisables (ex : ButtonComponent, CardComponent)
  ├── directives/             # Directives personnalisées (ex : HighlightDirective)
  └── pipes/                  # Pipes personnalisés (ex : DatePipe)
  ```

- **Environment**: Ce dossier contient les configurations d'environnement spécifiques pour différents contextes d'
  exécution, comme le développement et la production.

  Structure du dossier :
  ```
  environments/
  ├── environment.ts          # Variables pour l'environnement de développement
  └── environment.prod.ts     # Variables pour l'environnement de production
  ```

- **Views**: Le dossier `views` contient les composants des pages principales de l'application, organisés par
  fonctionnalité ou vue. Chaque vue est un composant autonome, chargé en lazy-loading pour optimiser les performances.

  Structure du dossier :
  ```
  views/
  ├── home/                   # Exemple de vue (page d'accueil)
  │   ├── home.component.ts
  │   └── home.component.html
  ├── about/                  # Exemple de vue (page "à propos")
  │   ├── about.component.ts
  │   └── about.component.html
  ```

## Pratiques de développement

- **Utilisation des Composants Autonomes** : Angular 18 introduit des composants autonomes qui permettent d'éviter
  l’utilisation de modules pour une structure plus flexible. Les composants autonomes utilisent la
  syntaxe `standalone: true` dans leur déclaration, ce qui facilite leur réutilisation sans nécessiter de module
  contenant.

  Exemple :
  ```typescript
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    standalone: true,
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css'],
  })
  export class ExampleComponent {}
  ```

- **Lazy Loading** : Chaque vue est chargée dynamiquement (lazy loading) pour réduire le temps de chargement initial et
  améliorer les performances.

  Exemple de lazy loading pour un composant autonome :
  ```typescript
  const routes: Routes = [
    {
      path: 'home',
      loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent)
    }
  ];
  ```

- **Dépendances partagées** : Utilisez le dossier `Shared` pour les composants, directives, et pipes réutilisables. Cela
  simplifie leur importation directe dans les vues autonomes et centralise les ressources réutilisables.

- **Structure Orientée Fonctionnalités** : Les composants dans `views` sont organisés par page ou fonctionnalité pour
  une séparation claire des responsabilités et une gestion modulaire.

## Auteurs

- **Terrade Antoine** alias **[TonyLaPoche](https://www.linkedin.com/in/antoine-terrade-web/)**
- **Contact** : [terrade.antoine.pro@gmail.com](mailto:terrade.antoine.pro@gmail.com)

---

En suivant cette architecture et ces pratiques, le projet Angular 18 devient plus léger et modulable, avec des
composants autonomes qui optimisent les performances et simplifient la gestion des dépendances. Pour en savoir plus sur
les composants autonomes et les autres nouveautés d'Angular 18, consultez
la [documentation officielle d'Angular](https://angular.io/docs).