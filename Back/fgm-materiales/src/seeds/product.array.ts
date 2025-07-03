const productArray = [
  {
    name: 'Alameda Carvalho',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://example.com/images/silla-https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480959/Alameda_Carvalho_jrkww2.jpg.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.02m2',
    dimension: '38 x 76 cm',
    material: 'Aceitado, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Marchetaria Lux',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480959/Marchetaria_Lux_ebxftu.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.43m2',
    dimension: '33 x 60,5cm',
    material: 'Brillante',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Magma Gray',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480959/Magma_Gray_sdwt80.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '1.52m2',
    dimension: '34 x 58 cm',
    material: 'Mate, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Magma Canyon',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480958/Magma_Canyon_nxemjv.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '1.52m2',
    dimension: '34 x 58 cm',
    material: 'Mate, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Aurora Color',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480953/Aurora_Color_gdgqpv.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.34m2',
    dimension: '33 x 60 cm',
    material: 'Brillante',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Aurora Blue',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480953/Aurora_Blue_uxyndf.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.34m2',
    dimension: '33 x 60 cm',
    material: 'Brillante',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Tokio White',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/Tokio_White_ibjtdr.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.34m2',
    dimension: '33 x 60 cm',
    material: 'Brillante, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Galaxia Gray',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/Galaxia_Gray_vvltvh.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.34m2',
    dimension: '33 x 60 cm',
    material: 'Brillante, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Oregon Off White Lux',
    description:
      'Ambientes comerciales y residenciales interiores, con tráfico medio de personas, sin acceso a áreas externas y sin tránsito de equipos. Indicado para lugares donde no se requiere resistencia al deslizamiento.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/Oregon_Off_White_Lux_om72f2.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '1.94m2',
    dimension: '37 x 75 cm',
    material: 'Pulido',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Oregon Off White Lux',
    description:
      'Ambientes comerciales y residenciales interiores, con tráfico medio de personas, sin acceso a áreas externas y sin tránsito de equipos. Indicado para lugares donde no se requiere resistencia al deslizamiento.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/Oregon_Off_White_Lux_om72f2.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '1.94m2',
    dimension: '75 x 75 cm',
    material: 'Pulido',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Onix Capri Lux',
    description:
      'Ambientes comerciales y residenciales interiores, con tráfico medio de personas, sin acceso a áreas externas y sin tránsito de equipos. Indicado para lugares donde no se requiere resistencia al deslizamiento.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/%C3%94nix_Capri_Lux_sgzb40.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '1.94m2',
    dimension: '37 x 75 cm',
    material: 'Pulido',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Onix Capri Lux',
    description:
      'Ambientes comerciales y residenciales interiores, con tráfico medio de personas, sin acceso a áreas externas y sin tránsito de equipos. Indicado para lugares donde no se requiere resistencia al deslizamiento.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/%C3%94nix_Capri_Lux_sgzb40.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '1.94m2',
    dimension: '75 x 75 cm',
    material: 'Pulido',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Tokio Blue',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480952/Tokio_Blue_nzftjm.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.34m2',
    dimension: '33 x 60 cm',
    material: 'Brillante, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Tokio Nero',
    description:
      'Paredes residenciales y comerciales internas y externas de hasta 3 metros de altura.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480951/Tokio_Nero_b3712x.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '2.34m2',
    dimension: '33 x 60 cm',
    material: 'Brillante, Relieve',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
  {
    name: 'Onix Capri Lux',
    description:
      'Ambientes comerciales y residenciales interiores, con tráfico medio de personas, sin acceso a áreas externas y sin tránsito de equipos. Indicado para lugares donde no se requiere resistencia al deslizamiento.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751480951/Mont_Blanc_Lux_wed7vb.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '1.94m2',
    dimension: '37 x 75 cm',
    material: 'Pulido',
    categories: [
      {
        name: 'Porcelanatos y Porcelanicos',
      },
      {
        name: 'Pisos y Revestimientos',
      },
    ],
  },
];

export default productArray;
