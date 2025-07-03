import { Product } from 'src/entities/product.entity';
import { DataSource } from 'typeorm';
import productArray from './product.array';
import { Category } from 'src/entities/category.entity';

export const seedProducts = async (dataSource: DataSource) => {
  const productRepo = dataSource.getRepository(Product);
  const categoryRepo = dataSource.getRepository(Category);

  let createdCount = 0;

  for (const prod of productArray) {
    const exists = await productRepo.findOneBy({ name: prod.name });
    if (!exists) {
      // Buscar o crear categorías
      const categories: Category[] = [];
      for (const cat of prod.categories) {
        let category = await categoryRepo.findOneBy({ name: cat.name });
        if (!category) {
          category = categoryRepo.create({ name: cat.name });
          category = await categoryRepo.save(category);
        }
        categories.push(category);
      }

      // Crear y guardar el producto con las categorías existentes
      const newProduct = productRepo.create({
        ...prod,
        categories, // asociar las categorías ya con ID
      });

      await productRepo.save(newProduct);
      createdCount++;
    }
  }

  if (createdCount > 0) {
    console.log(`✅ Se crearon ${createdCount} productos nuevos`);
  } else {
    console.log('ℹ️ Los productos ya estaban creados');
  }
};
