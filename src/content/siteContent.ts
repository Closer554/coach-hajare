export type NavItem = {
  id: string;
  label: string;
};

export type BenefitCard = {
  title: string;
  description: string;
  details: string[];
  focus: string;
};

export type ScheduleSession = {
  venue: string;
  time: string;
  className?: string;
};

export type ScheduleDay = {
  key: "monday" | "tuesday" | "wednesday" | "thursday";
  label: string;
  sessions: ScheduleSession[];
};

export type Review = {
  name: string;
  context: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TariffOffer = {
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  kind: "fixed" | "custom";
};

export const siteContent = {
  brand: {
    name: "Coach Hajare",
    instagramHandle: "@coach_hajare",
    instagramUrl: "https://www.instagram.com/coach_hajare/",
    instagramDmUrl: "https://ig.me/m/coach_hajare",
    discoveryMessage:
      "Bonjour Hajare, je vous contacte pour une s\u00e9ance d\u00e9couverte. J'aimerais en savoir plus sur votre m\u00e9thode et vos disponibilit\u00e9s \u00e0 Paris.",
  },
  seo: {
    siteUrl: "https://coach-hajare.fr",
    title: "Coach Hajare | Coach sportive \u00e0 Paris, Pilates & posture",
    description:
      "Coach sportive dipl\u00f4m\u00e9e BPJEPS \u00e0 Paris : Pilates, posture et renforcement intelligent pour tonifier la silhouette en studio, club ou domicile.",
    canonicalPath: "/",
    ogImage: "/og.jpg",
    ogImageAlt: "Coach Hajare \u00e0 Paris, posture, silhouette tonique et allure ma\u00eetris\u00e9e",
    locale: "fr_FR",
    language: "fr-FR",
    keywords: [
      "coach sportive Paris",
      "coach Pilates Paris",
      "coach posture Paris",
      "renforcement intelligent Paris",
      "cours Pilates Paris",
      "coach BPJEPS Paris",
      "M\u00e9thode HH",
      "Hexis Harmonia",
    ],
  },
  nav: [
    { id: "hero", label: "Accueil" },
    { id: "tarifs", label: "Tarifs" },
    { id: "about", label: "\u00c0 propos" },
    { id: "benefices", label: "B\u00e9n\u00e9fices" },
    { id: "pricing", label: "Planning" },
    { id: "reviews", label: "Avis" },
    { id: "social", label: "Contact" },
  ] as NavItem[],
  hero: {
    locationLabel: "Paris : domicile - studio",
    kicker: "Coach sportive dipl\u00f4m\u00e9e BPJEPS \u00e0 Paris",
    title: "Je vous aide \u00e0 bouger mieux, vous tenir plus droite et vous sentir plus forte.",
    subtitle:
      "Je construis mes cours autour du Pilates, de la posture et du renforcement intelligent : moins de gestes inutiles, plus de pr\u00e9cision et de sensations justes.",
    reassurance: "Cours \u00e0 Paris en studio, en club ou \u00e0 domicile.",
    primaryCtaLabel: "Voir les b\u00e9n\u00e9fices",
    secondaryCtaLabel: "DM pour s\u00e9ance d\u00e9couverte",
  },
  tariffs: {
    title: "Tarifs",
    accent: "R\u00e9server",
    subtitle:
      "Les tarifs suivent les s\u00e9ances affich\u00e9es dans le planning : cours en studio ou en club, avec r\u00e9servation en DM.",
    fixedLabel: "Cours planning",
    customLabel: "Sur mesure",
    offers: [
      {
        name: "Yoze-Meli\u00e1",
        price: "19\u20ac",
        description: "Lundi 18h45 - cours signature.",
        ctaLabel: "R\u00e9server",
        kind: "fixed",
      },
      {
        name: "Club Lulu",
        price: "19\u20ac",
        description: "Mardi 7h45 et 9h00 - cours signature.",
        ctaLabel: "R\u00e9server",
        kind: "fixed",
      },
      {
        name: "Studio Sensa",
        price: "19\u20ac",
        description: "Mercredi 8h15 - cours signature.",
        ctaLabel: "R\u00e9server",
        kind: "fixed",
      },
      {
        name: "Usine Saint-Lazare",
        price: "19\u20ac",
        description: "Mercredi soir - Posture, Burn and Strength, Core Ballet.",
        ctaLabel: "R\u00e9server",
        kind: "fixed",
      },
      {
        name: "Usine Op\u00e9ra",
        price: "19\u20ac",
        description: "Jeudi soir - Pilates et Boxe.",
        ctaLabel: "R\u00e9server",
        kind: "fixed",
      },
    ] as TariffOffer[],
  },
  presentation: {
    greeting: "Je suis Hajare.",
    description:
      "J'accompagne chaque \u00e9l\u00e8ve avec une attention simple : un corps mieux plac\u00e9, un mouvement plus propre, une progression qui reste fluide et durable.",
    quickInfo: [
      "Approche : posture, tonus, alignement et pr\u00e9cision du mouvement",
      "Paris : domicile - studio",
    ],
    portraitAlt: "Coach Hajare",
    portraitSrc: "/hero.jpg",
  },
  benefitsSection: {
    title: "Accompagnements & b\u00e9n\u00e9fices",
    accent: "Corps",
    subtitle:
      "Un aper\u00e7u clair de ce que le travail peut transformer : posture, tonus, allure, mobilit\u00e9 et confiance corporelle.",
  },
  services: [
    {
      title: "Am\u00e9liorer la posture",
      description:
        "Un travail cibl\u00e9 pour replacer le corps, stabiliser l'axe et gagner en tenue au quotidien.",
      details: [
        "Ouverture plus naturelle du buste",
        "Meilleure sensation d'appui",
        "Silhouette plus \u00e9quilibr\u00e9e",
      ],
      focus: "Placement, stabilit\u00e9, conscience corporelle",
    },
    {
      title: "Tonifier la silhouette",
      description:
        "Des s\u00e9ances con\u00e7ues pour renforcer en profondeur et dessiner le corps avec subtilit\u00e9.",
      details: [
        "Activation cibl\u00e9e des zones cl\u00e9s",
        "Tonus plus visible sans rigidit\u00e9",
        "Travail pr\u00e9cis et progressif",
      ],
      focus: "Taille, centre, jambes et posture globale",
    },
    {
      title: "Travailler l'allure",
      description:
        "La posture ne se voit pas seulement de face : elle s'exprime dans la d\u00e9marche, la pr\u00e9sence et la fa\u00e7on d'entrer dans l'espace.",
      details: [
        "Pr\u00e9sence corporelle plus assur\u00e9e",
        "Lignes plus nettes",
        "Mouvement plus \u00e9l\u00e9gant",
      ],
      focus: "Maintien, d\u00e9marche, expression du corps",
    },
    {
      title: "Lib\u00e9rer les compensations inutiles",
      description:
        "Identifier les habitudes de mouvement qui freinent la progression et r\u00e9organiser le corps avec intelligence.",
      details: [
        "Moins d'efforts parasites",
        "Gestes plus justes",
        "Corps plus disponible",
      ],
      focus: "Alignement, mobilit\u00e9 utile, pr\u00e9cision",
    },
    {
      title: "Renforcer en finesse",
      description:
        "Une intensit\u00e9 ma\u00eetris\u00e9e qui construit de la force sans tomber dans l'agressivit\u00e9 ni le surmenage.",
      details: [
        "Renforcement profond",
        "Progression durable",
        "Qualit\u00e9 d'ex\u00e9cution prioritaire",
      ],
      focus: "Ma\u00eetrise, endurance, contr\u00f4le du geste",
    },
    {
      title: "Reprendre confiance dans son corps",
      description:
        "Retrouver de la clart\u00e9 dans ses sensations et une relation plus sereine, plus ma\u00eetris\u00e9e \u00e0 son propre mouvement.",
      details: [
        "Corps mieux compris",
        "Sensations plus fines",
        "Pr\u00e9sence plus confiante",
      ],
      focus: "Aisance, stabilit\u00e9 et sentiment de ma\u00eetrise",
    },
  ] as BenefitCard[],
  schedule: [
    {
      key: "monday",
      label: "Lundi",
      sessions: [{ venue: "Yoze-Meli\u00e1", time: "18h45" }],
    },
    {
      key: "tuesday",
      label: "Mardi",
      sessions: [
        { venue: "Club Lulu", time: "7h45" },
        { venue: "Club Lulu", time: "9h00" },
      ],
    },
    {
      key: "wednesday",
      label: "Mercredi",
      sessions: [
        { venue: "Studio Sensa", time: "8h15" },
        { venue: "Usine Saint-Lazare", time: "18h30", className: "Posture" },
        { venue: "Usine Saint-Lazare", time: "19h15", className: "Burn and Strength" },
        { venue: "Usine Saint-Lazare", time: "20h00", className: "Core Ballet" },
      ],
    },
    {
      key: "thursday",
      label: "Jeudi",
      sessions: [
        { venue: "Usine Op\u00e9ra", time: "18h30", className: "Pilates" },
        { venue: "Usine Op\u00e9ra", time: "19h30", className: "Boxe" },
      ],
    },
  ] as ScheduleDay[],
  scheduleNote: "Cours de Pilates, posture et renforcement \u00e0 Paris en studio, en club ou \u00e0 domicile.",
  reviews: [
    {
      name: "\u00c9l\u00e8ve du Meli\u00e1",
      context: "Paris",
      text:
        "Bonjour Prof !\nJe suis l'Argentine qui participe \u00e0 vos cours au Meli\u00e1.\nJe tenais \u00e0 vous remercier pour les cours dispens\u00e9s ces deux derniers mois. Je faisais d\u00e9j\u00e0 du Pilates Reformer avant, mais je n'avais jamais obtenu une transformation physique aussi importante gr\u00e2ce \u00e0 des cours.\nEn deux mois, je me sens beaucoup mieux et je tenais vraiment \u00e0 vous remercier.",
    },
    {
      name: "\u00c9l\u00e8ve Pilates",
      context: "Paris",
      text:
        "Honn\u00eatement Hajare, j'ai test\u00e9 plusieurs cours de pilates avec diff\u00e9rents professeurs, mais tu restes de loin la meilleure.\nTa fa\u00e7on d'expliquer et ta m\u00e9thode sont uniques, on ne retrouve \u00e7a nulle part ailleurs.\nJ'ai vraiment h\u00e2te de reprendre les cours avec toi.",
    },
    {
      name: "Cliente r\u00e9guli\u00e8re",
      context: "Paris",
      text:
        "Je voulais te dire merci pour le pilates. Je me sens magnifique \u00e0 chaque fois que j'ai un cours avec toi.\nJ'aime beaucoup ta fa\u00e7on de travailler : chaque mouvement est r\u00e9fl\u00e9chi et efficace. On ne bouge pas juste pour bouger.\nOn prend notre temps. C'est presque comme une m\u00e9ditation, ce moment pr\u00e9cieux o\u00f9 l'on \u00e9coute son corps.",
    },
  ] as Review[],
  social: {
    title: "Contact & Instagram",
    intro:
      "Pour une s\u00e9ance d\u00e9couverte ou pour \u00e9changer sur vos objectifs, le contact le plus direct se fait en DM sur Instagram.",
    dmLabel: "DM pour s\u00e9ance d\u00e9couverte",
    profileLabel: "Voir Instagram",
    credentials: "Coach dipl\u00f4m\u00e9e BPJEPS",
    location: "Paris : domicile - studio",
    messageLabel: "Message sugg\u00e9r\u00e9",
    messageIntro: "Si vous souhaitez gagner du temps, vous pouvez reprendre ce message pour d\u00e9marrer l'\u00e9change :",
    deepLinkNote:
      "Instagram ne permet pas ici un vrai message pr\u00e9rempli depuis le site. Le texte est pr\u00e9par\u00e9 pour garder la prise de contact simple et coh\u00e9rente.",
  },
  faq: [
    {
      question: "Comment se d\u00e9roule une s\u00e9ance d\u00e9couverte ?",
      answer:
        "La premi\u00e8re s\u00e9ance permet de comprendre votre posture, votre mani\u00e8re de bouger et vos objectifs. Hajare ajuste ensuite la s\u00e9ance pour poser des bases nettes et personnalis\u00e9es.",
    },
    {
      question: "O\u00f9 suivre les cours ?",
      answer:
        "Les cours ont lieu \u00e0 Paris en studio, en club ou \u00e0 domicile selon les formats et les disponibilit\u00e9s du moment.",
    },
    {
      question: "Qu'est-ce que la M\u00e9thode HH\u2122 ?",
      answer:
        "C'est le nom donn\u00e9 \u00e0 l'approche de Hajare : un travail pr\u00e9cis, centr\u00e9 sur l'alignement, la respiration et le contr\u00f4le, pour renforcer le corps sans forcer inutilement.",
    },
  ] as FaqItem[],
  footer: {
    zone: "Paris : domicile - studio",
    tagline: "Coach dipl\u00f4m\u00e9e BPJEPS \u2022 Pilates, posture & renforcement intelligent",
    rights: `\u00a9 ${new Date().getFullYear()} Coach Hajare. Tous droits r\u00e9serv\u00e9s.`,
  },
};
