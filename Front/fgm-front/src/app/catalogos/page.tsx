"use client"
const pdfs = [
    { name: "FGM - Catalogo de Griferias", url: "/assets/pdfs/FGM - Catalogo Griferia.pdf" },
    { name: "FGM - Catalogo de Paredes", url: "/assets/pdfs/FGM - Catalogo Paredes.pdf" },
    { name: "FGM - Catalogo de Pisos Porcelanatos", url: "/assets/pdfs/FGM - Catalogo Pisos Porcelanatos.pdf" },
    { name: "FGM - Catalogo de Sanitarios", url: "/assets/pdfs/FGM - Catalogo Sanitarios.pdf" },
    { name: "FGM - Catalogo de Sofa y Colchones", url: "/assets/pdfs/FGM - Catalogo Sofa Colchones.pdf" },
];

export default function CatalogosPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {pdfs.map((pdf) => (
                <div
                    key={pdf.url}
                    className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition"
                    onClick={() => window.open(pdf.url, "_blank")}
                >
                    <iframe
                        src={pdf.url}
                        width="200"
                        height="250"
                        className="mb-4 border rounded"
                        title={pdf.name}
                    />
                    <div className="font-semibold text-center">{pdf.name}</div>
                </div>
            ))}
        </div>
    );
}