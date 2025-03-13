# Template Site Vitrine Multitek

Site Vitrine Moderne et Responsive de la société Multitek, spécialiste en matériel professionnel de manutention et nettoyage.

## Charte Graphique

- **Couleurs principales** :
  - Rouge (`#e74a3b`) : Couleur principale de la marque
  - Noir (`#000000`) : Couleur secondaire
  - Blanc (`#ffffff`) : Fond et texte contrastant
- **Police** : Barlow (Google Fonts) - Une police moderne avec un aspect industriel/technique
- **Style** :
  - Industriel et technique pour refléter l'activité mécanique
  - Lettrage en majuscules et espacement contrôlé pour les titres
  - Effets visuels dynamiques inspirés du monde de la mécanique
  - Éléments graphiques géométriques pour renforcer l'aspect technique

## Structure du Projet

```
Multitek/
├── index.html          # Page d'accueil
├── assets/             # Ressources statiques
│   ├── css/            # Feuilles de style
│   │   ├── style.css   # Style principal (importe les autres fichiers CSS)
│   │   ├── custom.css  # Styles partagés et charte graphique
│   │   ├── hero.css    # Styles spécifiques à la section hero
│   │   ├── navigation.css # Styles spécifiques à la navigation
│   │   └── services.css # Styles spécifiques aux services
│   ├── js/             # Scripts JavaScript
│   │   ├── main.js     # Script principal pour la navigation et les animations
│   │   └── contact.js  # Gestion du formulaire de contact
│   ├── images/         # Images et icônes
│   └── fonts/          # Polices personnalisées
├── .gitignore          # Fichiers ignorés par Git
└── README.md           # Documentation du projet
```

## Organisation du Code

Le code est organisé selon une architecture modulaire pour faciliter la maintenance et éviter les doublons :

- **CSS** :

  - `style.css` : Fichier principal qui importe les autres fichiers CSS et contient les styles de base
  - `custom.css` : Contient les styles partagés entre plusieurs composants (couleurs, boutons, etc.)
  - `hero.css` : Styles spécifiques à la section hero
  - `navigation.css` : Styles spécifiques à la barre de navigation et au menu mobile
  - `services.css` : Styles spécifiques à la section services

- **JavaScript** :
  - `main.js` : Fonctionnalités générales du site (navigation, défilement, animations)
  - `contact.js` : Validation et envoi du formulaire de contact via EmailJS

## Fonctionnalités

- Design responsive adapté à tous les appareils
- Structure HTML5 sémantique
- Styles CSS modernes aux couleurs de Multitek
- Design inspiré du domaine industriel et mécanique
- Background moderne pour la section hero avec effets interactifs
- Séparation modulaire des styles pour une maintenance facilitée
- Animations et interactions JavaScript
- Optimisé pour les performances et le SEO
- Formulaire de contact fonctionnel

## Instructions d'installation

1. Cloner le dépôt
2. Ouvrir `index.html` dans votre navigateur
3. Pour des modifications :
   - Modifier les styles principaux dans `assets/css/custom.css`
   - Personnaliser la section hero dans `assets/css/hero.css`
   - Personnaliser les scripts dans `assets/js/main.js`

## Stack Technique

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome (icônes)
- Google Fonts (police Barlow)
- EmailJS (gestion des emails du formulaire de contact)

## Compatibilité

- Chrome, Firefox, Safari, Edge (dernières versions)
- Responsive : Mobile, Tablette, Desktop

## Bonnes Pratiques de Développement

- Code modulaire pour faciliter la maintenance
- Séparation des styles par composant (ex: hero.css)
- Commentaires explicatifs dans le code
- Nommage cohérent des classes et identifiants
- Design responsif avec Media Queries
- Évitement des doublons de code grâce à l'architecture modulaire
