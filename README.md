# Application de XpertSource

Bienvenue sur l'Application de XpertSource, une application web construite avec **React** et **Next.js**. Cette application sert de tableau de bord pour la gestion des produits.
Cette application récupère les données des produits via une API simulée et les affiche sous forme de cartes dynamiques, en utilisant **Material UI (MUI)** et **ShadCn** pour les composants. L'application illustre des fonctionnalités puissantes de **Next.js**, telles que le
**rendu côté serveur (SSR)**, la **génération de pages statiques (SSG)**, et l'usage des **App Router**.

<img width="1467" alt="Screenshot 2025-01-27 at 2 43 55 AM" src="https://github.com/user-attachments/assets/876e553f-aa77-42b3-851c-1e98aaf328a0" />
<img width="1469" alt="Screenshot 2025-01-27 at 2 43 42 AM" src="https://github.com/user-attachments/assets/bf3d512a-385f-43f7-91ff-021e229ce5af" />



<img width="1464" alt="Screenshot 2025-01-27 at 2 15 14 AM" src="https://github.com/user-attachments/assets/1d6b322d-82a1-49d5-9b4d-5cc3d605ffa9" />

<img width="1469" alt="Screenshot 2025-01-27 at 2 17 17 AM" src="https://github.com/user-attachments/assets/d14a74c9-2a56-4f8c-8961-8001c950a60f" />


<img width="1468" alt="Screenshot 2025-01-27 at 2 15 51 AM" src="https://github.com/user-attachments/assets/368f01ef-822b-40c6-8111-72ea55389ca7" />


<img width="1467" alt="Screenshot 2025-01-27 at 2 15 29 AM" src="https://github.com/user-attachments/assets/a82750f2-b067-4b08-8af7-34f6160e09db" />



## Fonctionnalités

- Récupère les données des produits depuis une API simulée.
- Affiche les détails des produits dans des cartes Material UI.
- Chaque carte produit montre une image, le nom, la description et le prix.
- La carte permet aux utilisateurs de naviguer vers une vue détaillée pour chaque produit.
- Le bouton de déconnexion redirige vers la page d'accueil (landing page).

  
## Installation

### Prérequis

Assurez-vous que **Node.js** et un gestionnaire de paquets comme **npm**, **yarn**, **pnpm**, ou **bun** sont installés.

### Étapes d'installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/AliCodes22/project-2.git
   cd project-2

2. **Installer les dépendances**

Utilisez la commande suivante en fonction de votre gestionnaire de paquets préféré :

npm install
ou
yarn install
ou
pnpm install
ou
bun install

3. **Démarrer l'application**

Après avoir installé les dépendances, lancez le serveur de développement :

npm run dev
ou
yarn dev
ou
pnpm dev
ou
bun dev

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application en action. Cliquez sur "Explorez Maintenant".

# Routes

- **`/`** : La page d'accueil qui affiche tous les produits récupérés depuis l'API. Chaque produit est affiché sous forme de carte, avec son nom, description, prix et image.
- **`/produits/[id]`** : La page de détail d'un produit spécifique, accessible en cliquant sur une carte. Cette page affiche plus d'informations sur le produit en fonction de son `id`.
- **`/categories`** : Une page vide pour le moment, mais elle peut être utilisée pour afficher des catégories de produits dans le futur.

## Explication des Composants

- HomePage.tsx : Ce composant est la page principale de l'application. Il récupère les données des produits depuis l'API simulée et affiche les 6 premiers produits (en excluant la "Webcam 1080p").

- MuiCard.tsx : Représente une carte produit, qui inclut une image, le nom, la description et le prix du produit.

- DialogDemo.tsx : Composant utilisé pour afficher un dialogue permettant d'ajouter ou de modifier un produit. Il utilise des composants comme Button, Dialog, Input, Label, et Textarea de la bibliothèque ShadCn pour une interface élégante.
- MyForm.tsx: Le composant MyForm gère un formulaire avec validation via Zod et React Hook Form. Il inclut des champs pour le titre, le prix, la description et un interrupteur pour la disponibilité en stock.

## Technologies Utilisées

- Next.js : Framework React pour la création d'applications web modernes, permettant un rendu côté serveur (SSR) et une génération de pages statiques (SSG).
- React : Bibliothèque JavaScript utilisée pour construire des interfaces utilisateurs dynamiques et réactives.
- Material UI et ShadCn : Frameworks de composants React permettant de créer des interfaces utilisateur élégantes et accessibles.
- TypeScript : Superset de JavaScript qui permet un typage statique et améliore la robustesse du code.
- Tailwind CSS : Framework CSS utilitaire pour un développement rapide et réactif de l'interface utilisateur.
- React Hook Form: Utilisé pour la gestion des formulaires dans l'application, facilitant la validation et la gestion de l'état des champs de formulaire de manière efficace.

## Linting et Formatage de Code

- Ce projet utilise **ESLint** pour assurer la qualité du code et **Prettier** pour le formatage automatique.

## Exécution des outils de Linting
Vous pouvez exécuter ESLint pour vérifier la qualité du code en utilisant la commande suivante :

npm run lint

## Extension

## Gestion des Produits via API
Bien que l'application ne dispose pas actuellement d'une API pour la gestion des produits, elle est conçue pour être extensible et peut facilement être connectée à une API pour :

Récupérer, ajouter, modifier et supprimer des produits.

## Authentification
L'application peut intégrer une authentification pour sécuriser l'accès aux fonctionnalités, offrant la possibilité de :

Gérer l'inscription, la connexion et la déconnexion des utilisateurs.
Restreindre l'accès aux fonctionnalités sensibles pour les utilisateurs authentifiés.
Cette architecture permet une évolutivité facile, garantissant que l'application pourra intégrer ces fonctionnalités à mesure de son développement.

## Gestion de l'État Global
L'application peut facilement être étendue pour inclure un gestionnaire d'état global, permettant de partager des données entre les composants à travers l'application. Vous pourriez envisager d'utiliser :

Redux : Pour une gestion d'état plus centralisée et évolutive.
Context API : Pour une solution plus simple et légère pour gérer l'état sans besoin de bibliothèques supplémentaires.
Zustand : Pour un état global plus léger et sans boilerplate.
Cette architecture permet une évolutivité facile, garantissant que l'application pourra intégrer ces fonctionnalités à mesure de son développement.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
