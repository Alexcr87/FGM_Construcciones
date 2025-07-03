"use client"
import React from "react";
import Link from "next/link";

export const AboutRender: React.FC = () => {
  const images = [
    "/assets/about1.png",
    "/assets/about2.png",
    "/assets/about3.png",
    "/assets/about4.png",
  ];

  return (
    <section
      style={{
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontWeight: "600", marginBottom: "1rem", textAlign: "center" }}>
        Sobre FGM Materiales y Soluciones
      </h2>

      <p
        style={{
          textAlign: "justify",
          lineHeight: "1.6",
          fontSize: "1rem",
          maxWidth: "800px",
          margin: "0 auto 3rem",
        }}
      >
        En FGM Materiales y Soluciones contamos con una sólida trayectoria como empresa
        líder en el sector de la construcción, reconocida por brindar soluciones integrales,
        eficientes y de alta calidad en cada proyecto. Nuestra experiencia y compromiso nos
        han posicionado como un aliado estratégico tanto para desarrolladores, constructoras
        como para clientes particulares.
      </p>

      <p
        style={{
          textAlign: "justify",
          lineHeight: "1.6",
          fontSize: "1rem",
          maxWidth: "800px",
          margin: "0 auto 3rem",
        }}
      >
        Hoy, damos un paso más en nuestra evolución: incorporamos la comercialización de materiales
        de construcción, ampliando nuestra propuesta de valor para acompañarte desde el inicio de tu obra.
        Ofrecemos una amplia gama de productos de primeras marcas, asesoramiento técnico personalizado y un
        servicio logístico ágil que asegura entregas rápidas y confiables en todo el país.
      </p>

      <p
        style={{
          textAlign: "justify",
          fontStyle: "italic",
          fontWeight: "600",
          maxWidth: "800px",
          margin: "0 auto 4rem",
          fontSize: "1.1rem",
          color: "#333",
        }}
      >
        En FGM Materiales y Soluciones, no solo construimos estructuras: construimos confianza, eficiencia y soluciones que impulsan el crecimiento de nuestros clientes.
      </p>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Foto ${idx + 1}`}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #000",
            }}
          />
        ))}
      </div>

      {/* WhatsApp fixed button */}
      <Link
        href="https://wa.me/5493515081452?text=Hola%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "120px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
          alt="WhatsApp"
          style={{ width: 50, height: 50 }}
        />
      </Link>
    </section>
  );
};

export default AboutRender;
