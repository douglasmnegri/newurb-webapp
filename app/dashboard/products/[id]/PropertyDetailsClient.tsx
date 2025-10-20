"use client";
import Image from "next/image";
import { useState } from "react";
import { FileText, Info, Building, FileDown, Play } from "lucide-react";
import type { Product } from "@/lib/products";

export default function PropertyDetailsClient({
  product,
}: {
  product: Product;
}) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src={selectedImage}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent w-full p-8">
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-lg text-gray-300">{product.address}</p>
          <p className="text-2xl font-semibold text-white mt-2">
            {product.price}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <div className="flex justify-center gap-3 mt-4 px-4">
        {product.images.map((img) => (
          <div
            key={img}
            className={`relative w-32 h-24 cursor-pointer border-2 rounded-lg overflow-hidden ${
              selectedImage === img ? "border-green-600" : "border-transparent"
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
            <Building className="w-6 h-6 text-green-600" />
            Descritivo do Empreendimento
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Dados do Empreendimento */}
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Info className="w-6 h-6 text-green-600" />
            Dados do Empreendimento
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
            <li>Área total: {product.totalArea}</li>
            <li>Unidades: {product.units}</li>
            <li>Entrega: {product.deliveryDate}</li>
            <li>Incorporadora: {product.developer}</li>
          </ul>
        </div>

        {/* Payment and Documents */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Condição de Pagamento</h2>
            <p>{product.paymentCondition}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <FileText className="w-6 h-6 text-green-600" /> Documentos
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
                  className="flex items-center gap-2 text-green-600 hover:underline"
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
            <Play className="w-6 h-6 text-green-600" />
            Acompanhamento da Obra
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Última atualização: {product.lastUpdate} —{" "}
            {product.constructionStatus}
          </p>
        </div>

        {/* Risk Analysis */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Análise de Risco</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="font-semibold">Liquidez</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.risks.liquidity}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="font-semibold">Desenvolvimento</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.risks.development}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="font-semibold">Ambiental</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.risks.environmental}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="font-semibold">Taxa de Juros</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.risks.interestRate}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="font-semibold">Custo de Manutenção</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.risks.maintenanceCost}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="font-semibold">IPTU</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.risks.iptu}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
