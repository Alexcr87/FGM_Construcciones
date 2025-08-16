import { Category } from 'src/entities/category.entity';
import { DataSource } from 'typeorm';

const categories = [
  {
    name: 'Más Vendidos',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751382544/Dise%C3%B1o_Interior_pta4s3.jpg',
  },
  {
    name: 'Grifería',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1755352911/Grifer%C3%ADa_atzjjm.jpg',
  },
  {
    name: 'Porcelanatos y Porcelanicos',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751382544/Porcelanato_y_Porcelanicos_mg62v2.jpg',
  },
  {
    name: 'Placas de Pvc',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751382544/Placas_PVC_az2rdu.jpg',
  },
  {
    name: 'Baños y Sanitarios',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1751382544/Ba%C3%B1os_y_Sanitarios_lce1lm.jpg',
  },
  {
    name: 'Sofá y Colchones',
    img: 'https://res.cloudinary.com/dhsujm9s7/image/upload/v1755181035/Sofa_y_Colchones_hrirn9.jpg',
  },
];

export const seedCategories = async (dataSource: DataSource) => {
  const categoryRepo = dataSource.getRepository(Category);

  let createdCount = 0;

  for (const cat of categories) {
    const exists = await categoryRepo.findOneBy({ name: cat.name });
    if (!exists) {
      await categoryRepo.save(cat);
      createdCount++;
    }
  }

  if (createdCount > 0) {
    console.log(`✅ Se crearon ${createdCount} categorías nuevas`);
  } else {
    console.log('ℹ️ Las categorías ya estaban creadas');
  }
};
