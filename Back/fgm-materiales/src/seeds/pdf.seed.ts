import { Pdf } from "src/entities/pdf.entity";
import { DataSource } from "typeorm";

const pdfs = [
    {
        name: 'Griferia',
        url: '/pdfs/FGM - Catalogo Griferia.pdf',
    },
    {
        name: 'Paredes',
        url: '/pdfs/FGM - Catalogo Paredes.pdf',
    },
    {
        name: 'Pisos Porcelanatos',
        url: '/pdfs/FGM - Catalogo Pisos Porcelanatos.pdf',
    },
    {
        name: 'Sanitarios',
        url: '/pdfs/FGM - Catalogo Sanitarios.pdf',
    },
    {
        name: 'Sofa y Colchones',
        url: '/pdfs/FGM - Catalogo Sofa Colchones.pdf',
    },
];

export const seedPdf = async (dataSource: DataSource) => {
    const pdfRepo = dataSource.getRepository(Pdf);

    let createdCount = 0;

    for (const i of pdfs) {
        const exists = await pdfRepo.findOneBy({ name: i.name });
        if (!exists) {
            await pdfRepo.save(i);
            createdCount++;
        }
    }

    if (createdCount > 0) {
        console.log(`✅ Se crearon ${createdCount} pdfs nuevos`);
    } else {
        console.log('ℹ️ Los Pdfs ya estaban creados');
    }
};
