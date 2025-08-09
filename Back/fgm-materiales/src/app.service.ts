import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { seedCategories } from './seeds/category.seed';
import { seedProducts } from './seeds/product.seed';
import { seedPdf } from './seeds/pdf.seed';
import { SeedStatus } from './entities/seedStatus.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) { }

  async onModuleInit() {
    if (process.env.NODE_ENV !== 'production') {
      const seedStatusRepo = this.dataSource.getRepository(SeedStatus);
      let status = await seedStatusRepo.findOne({ where: { id: 1 } });

      if (!status || !status.isSeeded) {
        await seedCategories(this.dataSource);
        await seedProducts(this.dataSource);
        await seedPdf(this.dataSource);

        if (status) {
          status.isSeeded = true;
          await seedStatusRepo.save(status);
        } else {
          await seedStatusRepo.save({ isSeeded: true });
        }

        console.log('✅ Seeds ejecutados correctamente');
      } else {
        console.log('⚠️ Seeds ya fueron ejecutados previamente');
      }
    }
  }
}