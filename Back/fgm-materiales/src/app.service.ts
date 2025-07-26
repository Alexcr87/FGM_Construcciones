import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { seedCategories } from './seeds/category.seed';
import { seedProducts } from './seeds/product.seed';
import { seedPdf } from './seeds/pdf.seed';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) { }

  async onModuleInit() {
    if (process.env.NODE_ENV !== 'production') {
      await seedCategories(this.dataSource);
      await seedProducts(this.dataSource);
      await seedPdf(this.dataSource);
      console.log('✅ Seeds ejecutados correctamente');
    }
  }
}
