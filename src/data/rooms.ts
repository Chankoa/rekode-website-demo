export interface RoomDetail {
  slug: string;
  title: string;
  capacity: string;
  shortAmbiance: string;
  summary: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
  inclusions: string[];
  atmosphere: string;
  stayNote: string;
}

export const roomDetails: RoomDetail[] = [
  {
    slug: "chambre-cime",
    title: "Chambre Cime",
    capacity: "2 personnes",
    shortAmbiance: "Lumière du matin, lin lavé, vue ouverte sur les collines.",
    summary:
      "Une chambre claire pour deux personnes, pensée pour les séjours courts et les réveils lents face au paysage.",
    description:
      "La Chambre Cime occupe l'étage le plus lumineux de la maison. Elle garde une écriture simple : murs clairs, matières naturelles, lit généreux et une fenêtre ouverte sur les lignes du village et les collines.",
    imageSrc: "/images/maison-alta-room.webp",
    imageAlt: "Chambre claire avec lit en lin, mur en pierre et vue sur les collines.",
    highlights: [
      "Lit queen size 160 cm",
      "Salle d'eau privative",
      "Vue collines et jardin",
      "Petit bureau près de la fenêtre",
    ],
    inclusions: [
      "Petit-déjeuner inclus",
      "Linge en lin lavé",
      "Wifi discret",
      "Produits d'accueil locaux",
    ],
    atmosphere:
      "Le matin entre doucement dans la pièce. La chambre convient aux voyageurs qui veulent une base calme, précise et facile à habiter.",
    stayNote: "À partir de 2 nuits les week-ends, arrivée entre 16h et 19h.",
  },
  {
    slug: "suite-atelier",
    title: "Suite Atelier",
    capacity: "2 à 3 personnes",
    shortAmbiance: "Un volume plus ample, un coin lecture et la fraîcheur des murs anciens.",
    summary:
      "Une suite plus ouverte, adaptée aux séjours qui demandent de l'espace, un fauteuil pour lire et une vraie sensation de retrait.",
    description:
      "La Suite Atelier reprend l'ancien volume de travail de la maison. Elle associe un grand lit, une méridienne, une table basse et une salle d'eau minérale. L'ensemble reste sobre, avec quelques pièces choisies et une lumière plus enveloppante.",
    imageSrc: "/images/maison-alta-hero.webp",
    imageAlt: "Façade en pierre de Maison Alta au coucher du soleil.",
    highlights: [
      "Lit king size 180 cm",
      "Méridienne convertible pour un enfant",
      "Coin lecture indépendant",
      "Salle d'eau en pierre claire",
    ],
    inclusions: [
      "Petit-déjeuner inclus",
      "Plateau d'accueil",
      "Carnet d'adresses du village",
      "Prêt de tapis de yoga sur demande",
    ],
    atmosphere:
      "La suite garde un caractère plus profond, presque silencieux. Elle fonctionne bien pour un séjour long ou une parenthèse de travail au calme.",
    stayNote: "Configuration 3 personnes disponible sur demande au moment de la réservation.",
  },
  {
    slug: "petite-maison",
    title: "Petite Maison",
    capacity: "4 personnes",
    shortAmbiance: "Une aile indépendante avec terrasse basse et cuisine discrète.",
    summary:
      "Un hébergement plus autonome pour une famille ou deux proches, avec une terrasse à part et un rythme de séjour plus libre.",
    description:
      "La Petite Maison se trouve dans l'aile basse de la propriété. Elle offre deux chambres compactes, un salon simple, une petite cuisine intégrée et une terrasse ombragée. Elle permet de profiter de la maison tout en gardant une indépendance réelle.",
    imageSrc: "/images/maison-alta-landscape.webp",
    imageAlt: "Sentier de pierres et paysage autour du village.",
    highlights: [
      "Deux chambres doubles",
      "Salon avec cuisine discrète",
      "Terrasse privative",
      "Accès indépendant depuis le jardin",
    ],
    inclusions: [
      "Petit-déjeuner livré sur demande",
      "Linge de maison inclus",
      "Cuisine équipée pour repas simples",
      "Parking proche de l'entrée basse",
    ],
    atmosphere:
      "Plus autonome, la Petite Maison laisse chacun organiser ses journées sans perdre le lien avec les espaces communs et la table d'hôtes.",
    stayNote: "Minimum 3 nuits en juillet et août, idéale pour les familles avec enfants dès 8 ans.",
  },
];
