import { siteConfig } from "./site-config";

export const homePageContent = {
  hero: {
    eyebrow: "Maison d'hôtes contemporaine",
    subtitle:
      "Entre village, paysage et respiration, une adresse fictive pensée pour les séjours qui laissent de la place.",
    primaryCtaLabel: "Découvrir le lieu",
    primaryCtaHref: "#lieu",
    secondaryCtaLabel: "Préparer votre séjour",
    secondaryCtaHref: "#infos",
    imageSrc: "/images/maison-alta-hero.webp",
    imageAlt: `${siteConfig.name}, maison d'hôtes en pierre ouverte sur un paysage de collines.`,
  },
  place: {
    kicker: "Le lieu",
    title: "Une maison posée au bord du village",
    intro:
      `${siteConfig.name} imagine un hébergement à taille humaine : une bâtisse ancienne, une rénovation contemporaine, des chambres sobres et un rapport direct au paysage. Le lieu parle aux voyageurs qui cherchent une adresse précise, pas une promesse générale de déconnexion.`,
    imageSrc: "/images/maison-alta-landscape.webp",
    imageAlt: "Chemin de pierres traversant les oliviers vers un village perché.",
    caption: "Une maison ouverte sur le paysage, à distance de marche du village.",
    points: [
      "5 chambres, toutes tournées vers la lumière ou le jardin",
      "Une table d'hôtes courte, construite autour du marché local",
      "Le village accessible à pied par un sentier de pierres",
      "Des espaces communs calmes pour lire, travailler ou ne rien prévoir",
    ],
  },
  rooms: {
    kicker: "Chambres",
    title: "Trois façons d'habiter la maison",
    intro:
      "Chaque espace garde une échelle intime : matières naturelles, vues ouvertes et juste ce qu'il faut de confort pour ralentir.",
    detailLabel: "Voir le détail",
  },
  experiences: {
    kicker: "Autour du lieu",
    title: "Des expériences simples, ancrées dans le territoire",
    intro:
      `${siteConfig.name} ne cherche pas à tout remplir. Le séjour s'organise autour de quelques rythmes lisibles : marcher, manger, visiter, se reposer.`,
    items: [
      {
        title: "Randonnée",
        description:
          "Départ à pied depuis la maison pour rejoindre les crêtes, les murets de pierre et les chemins d'oliviers.",
        note: "Boucles de 45 minutes à 3 heures",
      },
      {
        title: "Table d'hôtes",
        description:
          "Deux ou trois soirs par semaine, un dîner simple rassemble les produits du marché et du potager voisin.",
        note: "Réservation la veille",
      },
      {
        title: "Patrimoine",
        description:
          "Villages perchés, ateliers d'artisans et petites chapelles romanes composent un programme sans trajet long.",
        note: "Carnet d'adresses remis à l'arrivée",
      },
      {
        title: "Détente",
        description:
          "Terrasse au calme, bains de soleil, bibliothèque courte et massages sur demande avec une praticienne locale.",
        note: "Créneaux limités chaque semaine",
      },
    ],
  },
  gallery: {
    kicker: "Atmosphère",
    title: "Quelques fragments du séjour",
    items: [
      {
        src: "/images/maison-alta-hero.webp",
        alt: "Maison en pierre avec terrasse ouverte sur un paysage de collines.",
        caption: "Arriver en fin de journée",
      },
      {
        src: "/images/maison-alta-landscape.webp",
        alt: "Sentier de pierres, oliviers et village sur une colline.",
        caption: "Marcher depuis le village",
      },
      {
        src: "/images/maison-alta-room.webp",
        alt: "Chambre en tons naturels avec fenêtre ouverte sur les collines.",
        caption: "Dormir dans des matières calmes",
      },
      {
        src: "/images/maison-alta-table.webp",
        alt: "Table d'hôtes dressée sous une pergola face au paysage.",
        caption: "Partager une table",
      },
    ],
  },
  practicalInfo: {
    kicker: "Infos pratiques",
    title: "Préparer votre séjour",
    intro:
      "Les informations essentielles restent visibles, sans transformer la page en brochure exhaustive.",
    groups: [
      {
        title: "Accès",
        items: [
          "Gare TGV la plus proche à 38 minutes",
          "Parking invité sous les micocouliers",
          "Borne de recharge publique au village",
        ],
      },
      {
        title: "Horaires",
        items: [
          "Arrivée entre 16h et 19h",
          "Départ jusqu'à 11h",
          "Bagagerie possible sur demande",
        ],
      },
      {
        title: "Saison",
        items: [
          "Ouverture principale d'avril à octobre",
          "Séjours retraites possibles hors saison",
          "Minimum 2 nuits les week-ends",
        ],
      },
      {
        title: "Services",
        items: [
          "Petit-déjeuner inclus",
          "Table d'hôtes certains soirs",
          "Wifi discret dans les espaces communs",
        ],
      },
    ],
  },
  testimonials: {
    kicker: "Avis",
    title: "Ce que les voyageurs retiennent",
    items: [
      {
        quote:
          "La maison donne l'impression d'avoir toujours été là. Rien n'est forcé, tout est calme et très juste.",
        author: "Claire et Mathieu",
        stay: "Séjour de printemps, 3 nuits",
      },
      {
        quote:
          "Nous venions pour marcher et couper un peu. Les conseils étaient précis, la table simple, la chambre parfaite.",
        author: "Nadia",
        stay: "Week-end d'automne",
      },
      {
        quote:
          "Un lieu contemporain sans froideur. On sent le soin dans les détails, mais jamais l'effet catalogue.",
        author: "Julien",
        stay: "Retraite d'équipe, 2 jours",
      },
    ],
  },
  faq: {
    kicker: "Questions fréquentes",
    title: "Avant de réserver",
    items: [
      {
        question: "Comment réserver ?",
        answer:
          "La réservation se fait par email ou par demande de disponibilité. L'équipe confirme les dates, le type de chambre et les conditions d'acompte sous 24 heures.",
      },
      {
        question: "La maison accueille-t-elle les enfants ?",
        answer:
          "Oui, à partir de 8 ans pour les chambres principales. La Petite Maison convient mieux aux familles qui souhaitent un espace plus autonome.",
      },
      {
        question: "Les animaux sont-ils acceptés ?",
        answer:
          "Les animaux ne sont pas acceptés dans les chambres, afin de préserver le calme du lieu et les personnes allergiques.",
      },
      {
        question: "Peut-on dîner sur place ?",
        answer:
          "La table d'hôtes ouvre deux ou trois soirs par semaine selon la saison. Elle se réserve au plus tard la veille de l'arrivée.",
      },
      {
        question: "Faut-il une voiture ?",
        answer:
          "Une voiture reste conseillée pour explorer la région. Sans voiture, la maison organise un transfert depuis la gare la plus proche sur demande.",
      },
    ],
  },
  finalCta: {
    title: "Dessiner les dates d'un prochain passage",
    text:
      "La démo montre comment un lieu d'accueil peut rendre son atmosphère concrète, ses informations utiles et son parcours de contact lisible.",
    primaryLabel: "Nous écrire",
    secondaryLabel: "Voir les disponibilités",
  },
} as const;

export const roomPageContent = {
  backToRoomsLabel: "Retour aux chambres",
  experienceKicker: "L'expérience",
  experienceTitle: "Une chambre pensée pour ralentir",
  detailsLabel: "Détails de la chambre",
  highlightsTitle: "Points clés",
  inclusionsTitle: "Inclus",
  ctaKicker: "Préparer le séjour",
  ctaBody:
    "La disponibilité est fictive dans cette démo, mais le parcours montre comment guider un voyageur vers une demande claire et rassurante.",
  primaryLabel: "Nous écrire",
  secondaryLabel: "Voir les informations",
} as const;