"use client";
import Image from "next/image";
import { useState } from "react";
import { FileText, Info, Building, FileDown, Play } from "lucide-react";

export default function PropertyDetailsPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const [selectedImage, setSelectedImage] = useState("/images/land_1.jpeg");
  const images = [
    "/images/land_1.jpeg",
    "/images/land_2.jpeg",
    "/images/land_3.jpeg",
  ];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src={selectedImage}
          alt="Property"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent w-full p-8">
          <h1 className="text-4xl font-bold text-white">Residencial Ariribá</h1>
          <p className="text-lg text-gray-300">Balneário Camboriú - SC</p>
          <p className="text-2xl font-semibold text-white mt-2">
            R$ 1.803.974
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <div className="flex justify-center gap-3 mt-4 px-4">
        {images.map((img) => (
          <div
            key={img}
            className={`relative w-32 h-24 cursor-pointer border-2 rounded-lg overflow-hidden ${
              selectedImage === img
                ? "border-purple-600"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <Image src={img} alt="Gallery" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto p-8 space-y-10">
        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Building className="w-6 h-6 text-purple-600" /> 
            Descritivo do Empreendimento
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Empreendimento moderno com ampla infraestrutura, áreas verdes e
            excelente localização. Ideal para moradia ou investimento, com
            unidades de alto padrão e acabamento premium.
          </p>
        </div>

        {/* Dados do Empreendimento */}
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Info className="w-6 h-6 text-purple-600" /> 
            Dados do Empreendimento
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
            <li>Área total: 360 m²</li>
            <li>Unidades: 24</li>
            <li>Entrega: Dezembro/2026</li>
            <li>Incorporadora: Click Camisetas Real Estate</li>
          </ul>
        </div>

        {/* Payment and Documents */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Condição de Pagamento</h2>
            <p>Entrada de 20% e saldo em até 60x diretamente com a construtora.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-600" /> Documentos
            </h2>
            <div className="flex flex-col gap-2">
              {[
                "Registro de Incorporação (RI)",
                "Alvará de Construção",
                "Lâmina para o Investidor",
                "Fato Relevante",
                "Descritivo do Padrão",
              ].map((doc, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-2 text-purple-600 hover:underline"
                >
                  <FileDown className="w-4 h-4" /> {doc} (PDF)
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Acompanhamento da Obra */}
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Play className="w-6 h-6 text-purple-600" /> 
            Acompanhamento da Obra
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Última atualização: Setembro/2025 — Estrutura 80% concluída.
          </p>
        </div>

        {/* Risk Analysis */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Análise de Risco</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Liquidez", level: "Alta" },
              { label: "Desenvolvimento", level: "Avançado" },
              { label: "Ambiental", level: "Sem riscos" },
              { label: "Taxa de Juros", level: "Moderada" },
              { label: "Custo de Manutenção", level: "Baixo" },
              { label: "IPTU", level: "R$ 2.000/ano" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold">{item.label}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
