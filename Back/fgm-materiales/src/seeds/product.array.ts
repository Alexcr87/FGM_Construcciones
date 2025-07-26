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
  {
    name: 'Placa de pvc simil marmol',
    description:
      'Anti humedad, impermeable. Buen comportamiento al fuego. Aislante térmico, eléctrico y acústico, Mantiene la temperatura interna lo más agradable durante todo el año. No requiere acabado extra. Duradera, larga vida útil. Fácil de colocar! Se pueden cortar fácilmente, con una sierra de diente fino o trincheta.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558116/PVC_SIMIL_MARMOL_01_p1jx3s.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '',
    dimension: '120 x 240 cm',
    material: 'Acabado Brilloso',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Placa de pvc simil marmol',
    description:
      'Anti humedad, impermeable. Buen comportamiento al fuego. Aislante térmico, eléctrico y acústico, Mantiene la temperatura interna lo más agradable durante todo el año. No requiere acabado extra. Duradera, larga vida útil. Fácil de colocar! Se pueden cortar fácilmente, con una sierra de diente fino o trincheta.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558116/PVC_SIMIL_MARMOL_xlbtfz.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '',
    dimension: '120 x 240 cm',
    material: 'Acabado Brilloso',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Placa de pvc simil marmol',
    description:
      'Anti humedad, impermeable. Buen comportamiento al fuego. Aislante térmico, eléctrico y acústico, Mantiene la temperatura interna lo más agradable durante todo el año. No requiere acabado extra. Duradera, larga vida útil. Fácil de colocar! Se pueden cortar fácilmente, con una sierra de diente fino o trincheta.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558116/PVC_SIMIL_MARMOL_02_a4kkhb.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '',
    dimension: '120 x 240 cm',
    material: 'Acabado Brilloso',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Placa de pvc simil hormigon',
    description:
      'Revestimiento decorativo diseñado para brindar un acabado industrial y minimalista en paredes interiores o exteriores. Su textura y color gris imitan el hormigón visto, ideal para ambientes modernos y contemporáneos.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558117/PVC_SIMIL_HORMIGON_lqnxd0.jpg',
    is_active: true,
    surface: 'Paredes y Pisos',
    Box: '',
    dimension: '120 x 240 cm',
    material: 'Símil hormigón alisado con vetas horizontales',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Revestimiento wall panel pared interior Wpc - Claro FN',
    description:
      'Ventajas: Anti- insectos, impermeable, no le afecta la humedad, no requiere mantención, etc. Nivel retardante de fuego: B1(nivel más alto en WPC exterior) Instalación: Instalar fácilmente, sin juntas visibles( sistema de clips o silicona) Economía: se trata de un material duradero y estético, al no tener mantenimiento, no requerirá de gastos adicionales, y representa un significativo ahorro de tiempo y dinero a largo plazo.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558116/PANEL_PARED_CLARO_FN_u7umyb.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '',
    dimension: '290 x 17 cm',
    material: 'Madera - PVC',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Revestimiento wall panel pared interior Wpc - Oscuro FN',
    description:
      'Ventajas: Anti- insectos, impermeable, no le afecta la humedad, no requiere mantención, etc. Nivel retardante de fuego: B1(nivel más alto en WPC exterior) Instalación: Instalar fácilmente, sin juntas visibles( sistema de clips o silicona) Economía: se trata de un material duradero y estético, al no tener mantenimiento, no requerirá de gastos adicionales, y representa un significativo ahorro de tiempo y dinero a largo plazo.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558114/PANEL_PARED_OSCURO_FN_gtrfey.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '',
    dimension: '290 x 16 cm',
    material: 'Madera - PVC',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Revestimiento wall panel pared interior Wpc - Oscuro FC',
    description:
      'Ventajas: Anti- insectos, impermeable, no le afecta la humedad, no requiere mantención, etc. Nivel retardante de fuego: B1(nivel más alto en WPC exterior) Instalación: Instalar fácilmente, sin juntas visibles( sistema de clips o silicona) Economía: se trata de un material duradero y estético, al no tener mantenimiento, no requerirá de gastos adicionales, y representa un significativo ahorro de tiempo y dinero a largo plazo.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558114/PANEL_PARED_OSCURO_FC_yc2cek.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '',
    dimension: '290 x 16 cm',
    material: 'Madera - PVC',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Revestimiento wall panel pared interior Wpc - Oscuro',
    description:
      'Ventajas: Anti- insectos, impermeable, no le afecta la humedad, no requiere mantención, etc. Nivel retardante de fuego: B1(nivel más alto en WPC exterior) Instalación: Instalar fácilmente, sin juntas visibles( sistema de clips o silicona) Economía: se trata de un material duradero y estético, al no tener mantenimiento, no requerirá de gastos adicionales, y representa un significativo ahorro de tiempo y dinero a largo plazo.',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753559236/PANEL_PARED_OSCURO_obwo61.jpg',
    is_active: true,
    surface: 'Paredes',
    Box: '',
    dimension: '290 x 17 cm',
    material: 'Madera - PVC',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Piso flotante WPC encastrable',
    description:
      'Este panel combina la calidez del diseño en madera clara con vetas naturales y la modernidad de los bordes en negro. Fabricado en material resistente (PVC/WPC), es ideal para uso interior o exterior, aportando un acabado elegante y duradero. Compuesto resistente a la humedad, rayos UV y fácil de limpiar Instalación: Sistema de encastre sencillo y seguro Beneficios: Bajo mantenimiento, estética natural y alta durabilidad',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558116/PISO_FLOTANTE_ENCASTRABLE_ojmg4p.jpg',
    is_active: true,
    surface: 'Revestimiento de paredes, cielorrasos, divisores y fachadas',
    Box: '',
    dimension: '',
    material: 'Compuesto resistente a la humedad, rayos UV y fácil de limpiar',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
  {
    name: 'Piso flotante WPC Extra Liviano',
    description:
      'Listón de diseño elegante con acabado madera natural, ideal para crear espacios cálidos y modernos. Fabricado en material compuesto de alta resistencia, soporta la humedad y el desgaste diario, siendo perfecto para interiores y exteriores. Apariencia realista de madera sin necesidad de mantenimiento Alta durabilidad y resistencia a golpes Instalación rápida y limpia',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1753558114/PISO_FLOTANTE_EXTRA_LIVIANO_prdgtt.jpg',
    is_active: true,
    surface: 'Revestimientos de paredes, cielorrasos, fachadas, divisores y muebles decorativos',
    Box: '',
    dimension: '',
    material: 'Madera clara con vetas suaves y naturales - PVC',
    categories: [
      {
        name: 'Más Vendidos',
      },
    ],
  },
];

export default productArray;
