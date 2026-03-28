export const products = {
  architecture: [
    {
      id: 'toughened',
      name: 'Toughened Glass',
      slug: 'toughened-glass',
      localImage: '/images/toughened-glass.png',
    },
    {
      id: 'insulated',
      name: 'Insulated Glass (DGU)',
      slug: 'insulated-glass',
      localImage: '/images/insulated-glass.png',
    },
    {
      id: 'low-e',
      name: 'Low-E Glass',
      slug: 'low-e-glass',
      localImage: '/images/low-e-glass.png',
    },
    {
      id: 'ceramic',
      name: 'Ceramic Glass',
      slug: 'ceramic-glass',
      localImage: '/images/ceramic-glass.png',
    },
    {
      id: 'skylight',
      name: 'Skylight Glass',
      slug: 'skylight-glass',
      localImage: '/images/skylight-glass.png',
    },
  ],
}

export const productDetails: Record<string, any> = {
  'toughened-glass': {
    name: 'Toughened / Tempered Glass',
    category: 'Architecture',
    description: 'Unparalleled strength and safety glass solution for structural applications',
    features: [
      'Unparalleled Strength',
      'Enhanced Safety',
      'Scratch-Proof Surface',
      'Thermal Resistant',
      'IS Certified Quality',
      'Fast Quenching Process',
    ],
    specs: {
      thickness: '3.5mm – 19mm',
      size: '100×300mm to 2440×5000mm',
    },
    applications: [
      'High-rise Building Glazing',
      'Glass Doors & Partitions',
      'Elevator Enclosures',
      'Canopies & Skylight',
      'Washbasins & Bathroom Fixtures',
      'Balustrades & Railings',
    ],
  },
  'insulated-glass': {
    name: 'Insulated Glass (DGU)',
    category: 'Architecture',
    description: 'Double glazed units for superior thermal and acoustic insulation',
    features: [
      'Superior Thermal Insulation',
      'Acoustic Performance',
      'Energy Efficient',
      'Reduced Condensation',
      'IS Certified Quality',
      'Custom Spacer Options',
    ],
    specs: {
      thickness: '4mm – 12mm per pane',
      gap: '6mm – 20mm air space',
    },
    applications: [
      'Commercial Building Facades',
      'Residential Windows',
      'Cold Storage Units',
      'Railway DGU',
      'Energy-Efficient Buildings',
    ],
  },
  'low-e-glass': {
    name: 'Low-E Glass',
    category: 'Architecture',
    description: 'Energy-efficient glass with low-emissivity coating for thermal control',
    features: [
      'E-0.02 Coating',
      'Solar Heat Control',
      'UV Protection',
      'Energy Efficient',
      'Temperature Regulation',
      'Durable Coating',
    ],
    specs: {
      thickness: '5mm – 12mm',
      options: 'Off-line Coated | On-line Coated | Pattern Glass | Colour Glass',
    },
    applications: [
      'Modern Building Facades',
      'Energy-Efficient Windows',
      'Commercial Buildings',
      'Residential Complexes',
      'Climate Controlled Spaces',
    ],
  },
  'ceramic-glass': {
    name: 'Ceramic Glass',
    category: 'Architecture',
    description: 'Heat-resistant ceramic glass for high-temperature applications',
    features: [
      'High Heat Resistance',
      'Thermal Stability',
      'Transparent at High Temp',
      'IS Certified Quality',
      'Durable Surface',
      'Custom Sizes',
    ],
    specs: {
      thickness: '4mm – 8mm',
      size: 'Custom dimensions available',
    },
    applications: [
      'Fireplace Screens',
      'OTG & Microwave',
      'Kiln Observation Windows',
      'High-Temperature Environments',
    ],
  },
  'skylight-glass': {
    name: 'Skylight Glass',
    category: 'Architecture',
    description: 'Structural skylight glass for architectural glazing and roof applications',
    features: [
      'Structural Strength',
      'UV Resistant',
      'Weather Resistant',
      'Custom Shapes',
      'IS Certified Quality',
      'Safety Compliant',
    ],
    specs: {
      thickness: '6mm – 19mm',
      size: 'Custom up to 2440×5000mm',
    },
    applications: [
      'Roof Glazing',
      'Shopping Malls',
      'Airports',
      'Hotels & Resorts',
      'Glass Walkways',
    ],
  },
}
