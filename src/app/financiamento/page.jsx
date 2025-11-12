// src/app/financiamento/page.jsx
import React, { Suspense } from 'react';
import FinancePageClient from './FinancePageClient'; // Importa seu componente cliente

// Um "loading" básico para o Suspense
function LoadingFallback() {
  return (
    <main style={{ padding: '10rem 40px', textAlign: 'center', color: 'white' }}>
      <h1>Carregando Simulador...</h1>
    </main>
  )
}

// Este é o novo Componente Servidor
export default function FinanciamentoPage() {
  return (
    // Suspense "pausa" o componente cliente, resolvendo o erro de build
    <Suspense fallback={<LoadingFallback />}>
      <FinancePageClient />
    </Suspense>
  );
}