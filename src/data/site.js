export const site = {
  name: "PT. Nawasena International Group",
  legalName: "PT. Nawasena International Group",
  domain: "https://www.nawasenaint.web.id",
  description:
    "Indonesian green coffee sourcing and export partner specializing in Java Ijen and Aceh Gayo for global roasters, importers, distributors, and wholesale buyers.",
  email: "export@nawasenaint.web.id",
  whatsapp: "+62 817-7935-6312",
  whatsappNumber: "6281779356312",
  address: "Kebonsari Residence No.9 Jember, Jawa Timur, Indonesia",
  linkedin: "https://www.linkedin.com/company/nawasena-international-group",
  instagram: "https://www.instagram.com/nawasenaint/",
  verificationDate: "June 2026",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Origins", href: "/origins" },
  { label: "Quality", href: "/quality" },
  { label: "Export Services", href: "/export-services" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const availabilityStatuses = [
  "Available",
  "Limited",
  "By request",
  "Upcoming",
  "Out of season",
  "Unavailable",
];

export const origins = [
  {
    slug: "java-ijen",
    name: "Java Ijen",
    region: "Ijen highlands",
    province: "East Java",
    country: "Indonesia",
    image: "/images/natural-anaerob.webp",
    altitude: "Typically highland Arabica growing areas; exact lot altitude is confirmed per offer.",
    varieties: ["Arabica", "Orange Bourbon for selected lots"],
    processes: ["full-washed", "semi-washed", "natural", "natural-anaerobic", "honey"],
    profile:
      "Balanced Indonesian Arabica profiles ranging from clean washed lots to fruit-forward natural and anaerobic lots.",
    harvest:
      "Availability depends on crop cycle, process, grade, and prior allocation. Current offers must be verified before quotation.",
    description:
      "Java Ijen is one of Nawasena's primary sourcing origins for Indonesian Arabica green coffee beans. The portfolio currently includes washed, semi-washed, natural, honey, and selected anaerobic lots for roasters and importers.",
    seoTitle: "Java Ijen Green Coffee Beans | Nawasena International Group",
    seoDescription:
      "Explore Java Ijen Arabica green coffee beans from PT. Nawasena International Group, including washed, semi-washed, natural, honey, and anaerobic lots.",
  },
  {
    slug: "aceh-gayo",
    name: "Aceh Gayo",
    region: "Gayo highlands",
    province: "Aceh",
    country: "Indonesia",
    image: "/images/gayo-fullwashed.webp",
    altitude: "Typical Gayo highland Arabica areas; exact altitude is confirmed per lot.",
    varieties: ["Arabica"],
    processes: ["full-washed", "semi-washed", "natural", "wine"],
    profile:
      "Recognizable Indonesian Arabica character with options for clean washed profiles, heavier semi-washed body, and differentiated fermented lots.",
    harvest:
      "Availability depends on grade, process, crop condition, and current allocation. Confirm current stock before quotation.",
    description:
      "Aceh Gayo is a key Indonesian Arabica origin in the Nawasena portfolio, available for buyers who need commercial and specialty-oriented green coffee options.",
    seoTitle: "Aceh Gayo Green Coffee Beans | Nawasena International Group",
    seoDescription:
      "Source Aceh Gayo Arabica green coffee beans through PT. Nawasena International Group, including full washed, semi-washed, natural, and wine process lots.",
  },
];

export const processingMethods = [
  {
    slug: "natural",
    name: "Natural",
    image: "/images/natural-clasic.webp",
    summary:
      "Whole cherries are dried with the fruit still attached, often creating fuller sweetness and fruit-forward character.",
    profile:
      "Natural lots may show higher sweetness, fruit notes, and heavier body, but final cup profile depends on lot quality, drying, and roasting.",
  },
  {
    slug: "natural-anaerobic",
    name: "Natural Anaerobic",
    image: "/images/natural-anaerob.webp",
    summary:
      "Coffee cherries are fermented in a controlled low-oxygen environment before drying, creating differentiated specialty profiles.",
    profile:
      "Natural anaerobic lots can be expressive, fruity, and complex. Nawasena avoids absolute taste guarantees and confirms each lot by sample.",
  },
  {
    slug: "full-washed",
    name: "Full Washed",
    image: "/images/full-wash.webp",
    summary:
      "Mucilage is removed through washing and controlled fermentation before drying, supporting cleaner and more consistent cup profiles.",
    profile:
      "Full washed lots are often selected by buyers seeking clarity, balanced acidity, and stable roasting behavior.",
  },
  {
    slug: "semi-washed",
    name: "Semi-Washed",
    image: "/images/semi-wash.webp",
    summary:
      "A common Indonesian process that can create fuller body and distinctive regional character.",
    profile:
      "Semi-washed lots may show heavier body and earthy complexity while still requiring lot-based quality verification.",
  },
];

export const products = [
  {
    slug: "java-ijen-full-wash-grade-1",
    name: "Green Bean Arabica Full Wash Grade 1",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "full-washed",
    process: "Full Washed",
    grade: "Grade 1",
    image: "/images/full-wash.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Clean and balanced Java Ijen Arabica prepared for roasters and importers seeking consistent washed lots.",
    description:
      "Arabica Java Ijen Full Washed is processed through a full wash with maintained fermentation control, resulting in a clean, bright and balanced profile. It is suitable for commercial and roastery needs that prioritize taste stability and reliable quality.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "java-ijen-semi-wash-grade-1",
    name: "Green Bean Arabica Semi Wash Grade 1",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "semi-washed",
    process: "Semi-Washed",
    grade: "Grade 1",
    image: "/images/semi-wash.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Java Ijen semi-washed Arabica with fuller body and flexible roasting potential.",
    description:
      "Processed using a semi-washed method, this coffee offers a balance between thicker body and maintained acidity. It is a fit for roasters looking for a characterful Indonesian profile.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "java-ijen-natural-classic-grade-1",
    name: "Green Bean Arabica Natural Classic Grade 1",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "natural",
    process: "Natural",
    grade: "Grade 1",
    image: "/images/natural-clasic.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Java Ijen natural Arabica for buyers seeking sweetness, body, and fruit-forward character.",
    description:
      "Through a natural process, this coffee is dried with the fruit to produce a sweeter, fruitier and fuller body profile. Final cup character should be confirmed by sample.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "java-ijen-natural-anaerobic-specialty",
    name: "Green Bean Arabica Natural Anaerob Specialty",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "natural-anaerobic",
    process: "Natural Anaerobic",
    grade: "Specialty",
    image: "/images/natural-anaerob.webp",
    status: "Limited",
    sampleAvailability: "Available by request",
    shortDescription:
      "Expressive Java Ijen anaerobic natural lot for specialty-focused roasters.",
    description:
      "Processed using natural anaerobic methods, this coffee goes through closed fermentation for a more intense and complex profile. Availability should be confirmed per lot.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "single-variety-java-natural-anaerobic-specialty",
    name: "Single Variety Java Natural Anaerob Specialty",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "natural-anaerobic",
    process: "Natural Anaerobic",
    grade: "Specialty",
    image: "/images/Java-Natural-Anaerob.webp",
    status: "Limited",
    sampleAvailability: "Available by request",
    shortDescription:
      "Single variety Java Ijen anaerobic natural micro-lot for differentiated specialty programs.",
    description:
      "A single variety micro-lot from Java Ijen processed using natural anaerobic methods to support a more specific and defined cup character.",
    specs: {
      variety: "Single variety; confirmed per offer",
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "orange-bourbon-natural-anaerobic-specialty",
    name: "Single Variety Orange Bourbon Natural Anaerob Specialty",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "natural-anaerobic",
    process: "Natural Anaerobic",
    grade: "Specialty",
    image: "/images/orange-bourbon.webp",
    status: "Limited",
    sampleAvailability: "Available by request",
    shortDescription:
      "Orange Bourbon natural anaerobic Arabica for roasters seeking a distinctive specialty lot.",
    description:
      "Orange Bourbon variety with natural anaerobic process, intended for specialty roasters looking for unique and differentiated Arabica coffee.",
    specs: {
      variety: "Orange Bourbon",
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "java-ijen-honey",
    name: "Arabica Java Ijen Honey",
    originSlug: "java-ijen",
    origin: "Java Ijen",
    processSlug: "natural",
    process: "Honey",
    grade: "Confirmed per lot",
    image: "/images/honey-ijen.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Java Ijen honey process Arabica with natural sweetness and balanced body.",
    description:
      "Arabica Java Ijen Honey Process offers a balanced cup profile with natural sweetness, medium body, and pleasant fruity potential.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "aceh-gayo-full-washed",
    name: "Arabica Aceh Gayo Full Washed",
    originSlug: "aceh-gayo",
    origin: "Aceh Gayo",
    processSlug: "full-washed",
    process: "Full Washed",
    grade: "Confirmed per lot",
    image: "/images/gayo-fullwashed.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Aceh Gayo full washed Arabica for buyers seeking clean and balanced Indonesian coffee.",
    description:
      "Aceh Gayo Full Washed Arabica offers a clean cup profile, balanced acidity, and stable quality potential for commercial, export, and roastery needs.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "aceh-gayo-semi-washed",
    name: "Arabica Aceh Gayo Semi Washed",
    originSlug: "aceh-gayo",
    origin: "Aceh Gayo",
    processSlug: "semi-washed",
    process: "Semi-Washed",
    grade: "Confirmed per lot",
    image: "/images/gayo-semiwash.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Aceh Gayo semi-washed Arabica with fuller body and Indonesian character.",
    description:
      "Aceh Gayo Semi Washed Arabica can provide fuller body, earthy nuance, and distinctive Indonesian coffee character.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "aceh-gayo-natural-classic",
    name: "Arabica Aceh Gayo Natural Classic",
    originSlug: "aceh-gayo",
    origin: "Aceh Gayo",
    processSlug: "natural",
    process: "Natural",
    grade: "Confirmed per lot",
    image: "/images/gayo-naturalclasic.webp",
    status: "By request",
    sampleAvailability: "Available by request",
    shortDescription:
      "Aceh Gayo natural Arabica for single-origin and blend programs.",
    description:
      "Aceh Gayo Natural Classic is processed naturally to support a sweeter, fruitier, and fuller body profile.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
  {
    slug: "aceh-gayo-wine-strong",
    name: "Arabica Aceh Gayo Wine Strong",
    originSlug: "aceh-gayo",
    origin: "Aceh Gayo",
    processSlug: "natural",
    process: "Wine",
    grade: "Confirmed per lot",
    image: "/images/gayo-wine.webp",
    status: "Limited",
    sampleAvailability: "Available by request",
    shortDescription:
      "Aceh Gayo wine process Arabica for differentiated specialty offerings.",
    description:
      "Aceh Gayo Wine Strong offers a unique fermented character with bold body and complex flavor potential. Final profile is confirmed by sample.",
    specs: {
      moisture: "Confirmed per lot",
      screenSize: "Confirmed per lot",
      defectCount: "Confirmed per lot",
      packaging: "Export packaging options discussed per quotation",
    },
  },
];

export const supplyRecords = [
  {
    cropCycle: "2026/2027",
    harvestLabel: "Current harvest supply",
    capacity: "Pending internal confirmation",
    publicCapacity: null,
    capacityType: "seasonal_supply",
    origins: ["Java Ijen", "Aceh Gayo"],
    status: "By request",
    lastVerified: "Pending confirmation",
    disclaimer:
      "Supply figures are estimates based on the current sourcing network and crop cycle. Final availability depends on origin, process, grade, lot specification, harvest conditions, and prior allocation.",
  },
];

export const articles = [
  {
    slug: "how-to-import-green-coffee-beans-from-indonesia",
    title: "How to Import Green Coffee Beans from Indonesia",
    excerpt:
      "A buyer-oriented overview of inquiry, sample evaluation, quotation, Incoterms discussion, and shipment preparation.",
    category: "Buyer Guide",
    tags: ["import", "green coffee", "buyer guide"],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    readingTime: "5 min read",
    image: "/images/port.webp",
    imageAlt: "Port logistics for Indonesian green coffee export",
    content: [
      "Start by confirming origin, process, grade, target volume, destination, and expected timeline.",
      "Request samples before committing to a lot. Green coffee should be evaluated against the buyer's roast profile, quality target, and commercial plan.",
      "Discuss Incoterms and documents early. Nawasena can support export communication, but final requirements depend on destination, buyer requirements, and logistics partners.",
    ],
  },
  {
    slug: "java-ijen-coffee-origin-altitude-profile",
    title: "Java Ijen Coffee: Origin, Altitude, and Profile",
    excerpt:
      "A concise guide to Java Ijen as a sourcing origin for Indonesian Arabica green coffee.",
    category: "Coffee Origins",
    tags: ["java ijen", "origin", "arabica"],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    readingTime: "4 min read",
    image: "/images/natural-anaerob.webp",
    imageAlt: "Java Ijen Arabica green coffee beans",
    content: [
      "Java Ijen is one of Nawasena's initial focus origins for Arabica green coffee sourcing.",
      "Available processes include full washed, semi-washed, natural, honey, and selected anaerobic lots.",
      "Buyers should confirm lot-specific altitude, moisture, screen size, defect count, sample availability, and current allocation before quotation.",
    ],
  },
  {
    slug: "green-coffee-moisture-content-explained",
    title: "Green Coffee Moisture Content Explained",
    excerpt:
      "Why moisture targets matter for green coffee buyers, storage, shipment, and roasting consistency.",
    category: "Quality & Grading",
    tags: ["quality", "moisture", "grading"],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    readingTime: "4 min read",
    image: "/images/about3.webp",
    imageAlt: "Green coffee quality control and processing",
    content: [
      "Moisture is one of the key quality-control attributes buyers should confirm before shipment.",
      "Public product pages should not invent moisture values. Each offer should confirm the target or measured range per lot.",
      "For B2B sourcing, moisture information should be reviewed together with defect count, grade, screen size, packaging, and sample evaluation.",
    ],
  },
];

export const faqs = [
  {
    question: "Do you provide coffee samples for international buyers?",
    answer:
      "Yes. Buyers can request samples of selected Indonesian Arabica green coffee beans, and our team will confirm availability, delivery process, and next steps.",
  },
  {
    question: "Which coffee origins are available?",
    answer:
      "Nawasena currently focuses on Java Ijen and Aceh Gayo for Indonesian Arabica green coffee beans.",
  },
  {
    question: "What types of buyers do you serve?",
    answer:
      "We work with importers, roasteries, distributors, wholesalers, coffee shop chains, and institutional buyers.",
  },
  {
    question: "What Incoterms do you support?",
    answer:
      "EXW, FOB, and CIF discussions may be supported depending on buyer requirements, destination, and shipment planning. Final terms must be confirmed per transaction.",
  },
  {
    question: "Can buyers request custom sample quantities?",
    answer:
      "Yes. Buyers can request standard sample sizes or provide custom requirements for review.",
  },
  {
    question: "How can I get pricing and product specifications?",
    answer:
      "Submit a quotation or sample request with product, origin, target volume, destination, and timeline. Our team will confirm current availability and lot-level specifications.",
  },
];

export function getOrigin(slug) {
  return origins.find((origin) => origin.slug === slug);
}

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function getProcessing(slug) {
  return processingMethods.find((process) => process.slug === slug);
}

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
