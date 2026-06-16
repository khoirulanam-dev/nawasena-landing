export const site = {
  name: "PT. Nawasena International Group",
  legalName: "PT. Nawasena International Group",
  domain: "https://www.nawasenaint.web.id",
  description:
    "PT. Nawasena International Group supplies traceable Arabica Java Ijen green coffee from East Java with structured quality control, transparent product information, and export-ready coordination.",
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
  { label: "About Us", href: "/about" },
  { label: "Java Ijen", href: "/origins/java-ijen" },
  { label: "Our Products", href: "/products" },
  { label: "Supply & Export", href: "/export-services" },
  { label: "Insights", href: "/news" },
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
      "Arabica Java Ijen is the flagship green coffee origin of PT. Nawasena International Group. Sourced from the Ijen highlands of East Java, this origin is offered through selected post-harvest processes and lot specifications, subject to crop and seasonal availability.",
    seoTitle: "Arabica Java Ijen Green Coffee | Nawasena International Group",
    seoDescription:
      "Explore traceable Arabica Java Ijen green coffee from East Java with process, lot, sample, and export availability support from Nawasena.",
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
      "Selected Arabica green coffee from Aceh Gayo is available based on crop, lot, and seasonal availability. Buyers can contact the commercial team to confirm current specifications, available processes, minimum order quantity, and sample availability.",
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
    harvestLabel: "Harvest season supply capacity",
    capacity: "Up to 200 MT",
    publicCapacity: "Up to 200 MT",
    capacityType: "seasonal_supply",
    origins: ["Java Ijen"],
    status: "By request",
    lastVerified: "June 2026",
    disclaimer:
      "Green coffee supply capacity per harvest season is subject to crop conditions, lot availability, quality specification, contract volume, delivery schedule, and packaging requirements.",
  },
];

export const articles = [
  {
    slug: "how-to-import-green-coffee-beans-from-indonesia",
    title: "How to Import Green Coffee Beans from Indonesia: A Practical Buyer Guide",
    excerpt:
      "A practical guide for roasters, importers, and distributors sourcing Indonesian green coffee, from origin selection and samples to quotation, Incoterms, documentation, and shipment planning.",
    category: "Buyer Guide",
    tags: ["import", "green coffee", "buyer guide", "indonesian coffee supplier", "green coffee sourcing"],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-16",
    readingTime: "8 min read",
    image: "/images/port.webp",
    imageAlt: "Port logistics for Indonesian green coffee export",
    content: [
      "Indonesia is one of the most recognized coffee-producing countries in the world, with Arabica origins that serve both commercial roasters and specialty-focused buyers. For international buyers, however, importing green coffee beans is not only about finding an attractive origin. A reliable purchase depends on clear specifications, realistic availability, sample evaluation, documentation readiness, and shipment coordination.",
      "This guide explains the practical steps roasters, importers, distributors, and wholesale buyers should follow when sourcing Indonesian green coffee. It is written for B2B buyers who want to evaluate coffee professionally before moving into quotation, contract, and shipment.",
      { type: "heading", text: "1. Define the Coffee You Need Before Requesting a Quote" },
      "A strong inquiry starts with a clear buying requirement. Instead of asking only for a general price list, buyers should define the origin, process, grade, volume, destination, target timeline, and intended use of the coffee. This helps the supplier confirm whether the right lot is available and whether the requested specifications are realistic for the current crop cycle.",
      {
        type: "list",
        items: [
          "Origin preference, such as Arabica Java Ijen or another Indonesian origin.",
          "Post-harvest process, including full washed, semi-washed, natural, honey, or anaerobic lots where available.",
          "Required volume, from sample evaluation to commercial supply or container inquiry.",
          "Quality targets, including moisture, defect tolerance, screen size, grade, and cup profile expectations.",
          "Destination country, preferred port, timeline, packaging, and preferred Incoterm.",
        ],
      },
      { type: "heading", text: "2. Request Samples Before Confirming Commercial Volume" },
      "Sample evaluation is an important step in green coffee sourcing. Even when an origin is known, each lot can vary depending on harvest period, processing method, drying condition, storage, and sorting. Buyers should evaluate samples through their own roasting, cupping, and internal quality-control process before committing to a larger purchase.",
      "For roasters, samples help confirm whether the coffee matches the intended roast profile and product lineup. For importers and distributors, samples help assess market suitability, customer requirements, and repeat-purchase potential. A professional supplier should be able to explain what the sample represents, whether the lot is still available, and how long the allocation can reasonably be held.",
      { type: "heading", text: "3. Review Lot Specifications, Not Only Origin Names" },
      "Origin names are useful, but they are not enough for B2B purchasing decisions. Buyers should review lot-level specifications before quotation. Important details may include origin area, process, variety where available, altitude information, moisture, defect count, screen size, grade, harvest period, packaging, and estimated available quantity.",
      {
        type: "callout",
        text: "For Indonesian green coffee, availability should always be confirmed per lot and crop cycle. Public product pages can introduce the origin, but the final commercial offer should be based on verified specifications.",
      },
      { type: "heading", text: "4. Choose the Right Incoterm for Your Buying Process" },
      "Incoterms define how responsibility, cost, and risk are divided between buyer and seller. Common commercial discussions for green coffee include EXW, FOB, and CIF. The right option depends on the buyer's logistics capability, destination, import experience, and preferred level of shipment support.",
      {
        type: "list",
        items: [
          "EXW may suit buyers who already have their own logistics and export handling arrangements.",
          "FOB is commonly used when the seller handles export clearance and loading at the agreed port of shipment.",
          "CIF may suit buyers who want freight and insurance arranged to the destination port, subject to final commercial agreement.",
        ],
      },
      { type: "heading", text: "5. Confirm Documents and Shipment Requirements Early" },
      "Documentation requirements vary by destination country, buyer policy, shipping route, and logistics partner. Before confirming a commercial order, buyers should discuss invoice, packing list, certificate of origin, phytosanitary documentation where required, bill of lading or airway bill, insurance documents where applicable, and any destination-specific import requirements.",
      "Clear documentation planning reduces delays and avoids confusion after the coffee has already been prepared. Buyers should also confirm packaging requirements, bag type, marking, palletization if needed, and whether any inspection or pre-shipment review is required.",
      { type: "heading", text: "6. Work With a Supplier That Communicates Availability Clearly" },
      "Green coffee is an agricultural product, so supply can change based on harvest conditions, quality sorting, prior allocation, and contract commitments. A good supplier should communicate availability honestly and avoid promising volumes that cannot be verified. For example, Nawasena communicates Arabica Java Ijen availability based on crop, lot, required specifications, contract volume, and delivery schedule.",
      "For buyers evaluating Indonesian green coffee, the best sourcing process combines origin knowledge with disciplined commercial communication. Start with a clear inquiry, evaluate samples, confirm specifications, agree on Incoterms, and document each stage before shipment.",
    ],
  },
  {
    slug: "java-ijen-coffee-origin-altitude-profile",
    title: "Java Ijen Arabica Coffee: Origin, Profile, and Sourcing Notes",
    excerpt:
      "An introduction to Arabica Java Ijen green coffee from East Java, including origin context, processing options, buyer specifications, and what importers should confirm before purchase.",
    category: "Coffee Origins",
    tags: ["java ijen", "origin", "arabica", "east java coffee", "indonesian green coffee"],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-16",
    readingTime: "7 min read",
    image: "/images/natural-anaerob.webp",
    imageAlt: "Java Ijen Arabica green coffee beans",
    content: [
      "Arabica Java Ijen is one of the most important origin focuses for PT. Nawasena International Group. Located in East Java, the Ijen highland area is associated with Indonesian Arabica production and offers a practical sourcing option for roasters, importers, distributors, and green coffee buyers who want origin identity supported by clear commercial communication.",
      "For B2B buyers, Java Ijen should be evaluated not only by name, but by lot specification. Processing method, harvest period, moisture, defect count, screen size, grade, and available quantity can influence both cup performance and commercial suitability.",
      { type: "heading", text: "Why Java Ijen Matters for Green Coffee Buyers" },
      "Java has a long history in the international coffee trade, and East Java remains relevant for buyers looking for Indonesian Arabica with a recognizable origin story. Java Ijen can serve multiple market needs, from approachable commercial Arabica to selected lots for roasters that need a distinct Indonesian profile.",
      "A buyer evaluating Java Ijen should consider how the coffee will be used. Some buyers need consistent supply for blends. Others need a specific process for single-origin roasting, private label products, or seasonal campaigns. The sourcing conversation should begin with the buyer's quality target and expected purchasing plan.",
      { type: "heading", text: "Common Processing Options" },
      "Java Ijen lots may be offered in several post-harvest processes depending on crop availability and producer preparation. Each process can create different expectations for green quality, roast behavior, and cup expression. Because availability changes by season and allocation, buyers should confirm the exact process and lot before quotation.",
      {
        type: "list",
        items: [
          "Full washed lots are often selected by buyers seeking a cleaner and more structured profile.",
          "Semi-washed lots may appeal to buyers familiar with Indonesian processing styles and heavier body expectations.",
          "Natural lots can be used for more fruit-forward profiles where available and properly prepared.",
          "Honey or anaerobic lots may be available as selected offerings, subject to crop, process control, and quantity.",
        ],
      },
      { type: "heading", text: "What Buyers Should Confirm Before Purchase" },
      "A professional Java Ijen offer should include more than a product name. Buyers should ask for available specifications and confirm which values are measured, estimated, or still pending verification. This is especially important for buyers importing coffee into markets with strict quality expectations or internal procurement standards.",
      {
        type: "list",
        items: [
          "Origin area and traceability information available for the lot.",
          "Harvest period and whether the lot is current crop or previous crop.",
          "Moisture target or measured moisture range.",
          "Defect count, grade, and sorting standard where applicable.",
          "Screen size, packaging, sample availability, and current allocation.",
          "Minimum order quantity, lead time, and preferred Incoterm.",
        ],
      },
      { type: "heading", text: "How Nawasena Positions Java Ijen" },
      "Nawasena positions Arabica Java Ijen as its flagship origin. The company focuses on traceable supply, clear product information, quality-control discussion, and export-ready coordination. Current supply capacity can reach up to 200 MT per harvest season, subject to crop condition, lot availability, quality requirements, contract volume, and delivery schedule.",
      {
        type: "callout",
        text: "For buyers, the most reliable next step is to request a sample and current availability sheet for the specific process and volume required.",
      },
      "Java Ijen can be a strong origin for buyers who want Indonesian Arabica with practical commercial support. The key is to evaluate each lot carefully and build the purchase around verified specifications rather than assumptions.",
    ],
  },
  {
    slug: "green-coffee-moisture-content-explained",
    title: "Green Coffee Moisture Content Explained",
    excerpt:
      "A clear explanation of why moisture content matters in green coffee purchasing, storage, shipment, roasting consistency, and supplier-buyer quality discussions.",
    category: "Quality & Grading",
    tags: ["quality", "moisture", "grading", "green coffee quality", "coffee specifications"],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-16",
    readingTime: "7 min read",
    image: "/images/about3.webp",
    imageAlt: "Green coffee quality control and processing",
    content: [
      "Moisture content is one of the most important quality-control indicators in green coffee. For roasters, importers, and distributors, moisture affects storage stability, shipment risk, roasting behavior, and the overall reliability of a purchased lot. It should be reviewed before sample approval, quotation confirmation, and shipment preparation.",
      "In B2B green coffee sourcing, moisture should not be treated as a decorative specification. It is a practical measurement that helps buyers understand whether the coffee is prepared, stored, and shipped in a condition suitable for commercial use.",
      { type: "heading", text: "Why Moisture Content Matters" },
      "Green coffee is hygroscopic, meaning it can absorb or lose moisture depending on its environment. If moisture is too high, buyers may face higher risk during storage and transport. If it is too low, the coffee may become brittle, age faster, or behave differently during roasting. The ideal target can vary by buyer requirement, origin, processing method, and shipment plan.",
      "For this reason, buyers should always ask whether the moisture value is measured per lot, estimated from supplier records, or pending final verification. The value should be considered together with other quality indicators rather than viewed in isolation.",
      { type: "heading", text: "Moisture and Shipment Risk" },
      "International shipment exposes green coffee to time, temperature changes, humidity, container conditions, and handling variables. Proper moisture control helps reduce the risk of quality loss before the coffee reaches the buyer. Packaging, warehouse condition, loading process, and container planning also play important roles.",
      {
        type: "list",
        items: [
          "Ask when and how the moisture was measured.",
          "Confirm whether the value represents the offered lot or only a general origin target.",
          "Review packaging and storage conditions before shipment.",
          "Discuss inspection, sampling, or pre-shipment verification when needed.",
        ],
      },
      { type: "heading", text: "Moisture and Roasting Consistency" },
      "Roasters often notice that green coffee moisture can influence roast development, heat transfer, and consistency between batches. A coffee that looks similar on paper may behave differently if moisture, density, screen size, and processing method vary significantly. This is why sample roasting and production roasting should be connected to lot specifications.",
      "For commercial buyers, consistent moisture information supports repeatability. It helps procurement teams compare lots, manage storage expectations, and communicate more clearly with roasting teams or downstream customers.",
      { type: "heading", text: "Moisture Should Be Reviewed With Other Specifications" },
      "Moisture alone does not define coffee quality. Buyers should review it alongside defect count, grade, screen size, processing method, cup evaluation, harvest period, packaging, and traceability information. A complete review gives a more realistic picture of whether the coffee fits the buyer's needs.",
      {
        type: "callout",
        text: "Nawasena avoids publishing invented moisture values on public product pages. Final moisture information should be confirmed per available lot before quotation or shipment.",
      },
      { type: "heading", text: "What Buyers Should Ask Suppliers" },
      "Before confirming an order, buyers should ask for the lot specification, sample availability, measurement status, shipment timeline, and any quality-control documentation available. If the coffee will be shipped internationally, these details should be discussed early so the commercial agreement reflects the buyer's quality expectations.",
      "A transparent moisture discussion helps both buyer and supplier work from the same quality standard. It also reduces misunderstanding during sample approval, contract negotiation, and shipment preparation.",
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
      "Arabica Java Ijen from East Java is Nawasena's flagship origin. Selected Aceh Gayo Arabica may also be available based on crop, lot, and seasonal availability.",
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
      "Submit a quotation or sample request with required origin, process, quantity, destination, and purchasing schedule. Our team will confirm current availability, lot-level specifications, and commercial next steps.",
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
