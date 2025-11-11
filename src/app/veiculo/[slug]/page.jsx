// src/app/veiculo/[slug]/page.jsx

import React, { use } from 'react'; // 1. Importa o 'use'
import { notFound } from 'next/navigation';
import { stockData } from '../../../data/stockData'; 

// 2. Importa o NOVO componente que acabamos de criar
import VehicleClientPage from './VehicleClientPage';

// Esta função encontra o carro (robusta contra maiúsculas/minúsculas)
function getCarData(slug) {
  if (!slug) return undefined;
  return stockData.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

// Esta é a sua Página Servidor (Server Component)
// (Note que NÃO TEM "use client" aqui)
export default function VeiculoPage({ params }) { 
  
  // 3. Resolve os params aqui, como na sua imagem de inspiração
  const awaitedParams = use(Promise.resolve(params));
  const { slug } = awaitedParams;

  const car = getCarData(slug);

  // 4. Verifica se o carro existe
  if (!car) {
    notFound(); 
  }

  // 5. Renderiza o Componente Cliente, passando o carro como prop
  return (
    <VehicleClientPage car={car} />
  );
}