// src/app/financiamento/page.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Hook para ler a URL
import Image from 'next/image';
import Link from 'next/link';
import { stockData } from '../../data/stockData'; // Nossos dados
import styles from './page.module.css';

// --- Funções Auxiliares ---

// Converte "R$ 1.450.000" para 1450000
function parsePrice(priceString) {
  if (!priceString) return 0;
  return Number(String(priceString).replace(/[^0-9]/g, ''));
}

// Formata 12345.67 para "R$ 12.345,67"
function formatPrice(priceNumber) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceNumber);
}

// --- Componente Principal ---
export default function FinanciamentoPage() {
  const searchParams = useSearchParams();
  const carSlug = searchParams.get('carro'); // Pega o slug da URL (ex: "porsche-911-turbo-s")

  const [car, setCar] = useState(null);
  const [entrada, setEntrada] = useState(0); // Valor da entrada
  const [numParcelas, setNumParcelas] = useState(48); // Número de parcelas (ex: 48x)
  const [valorParcela, setValorParcela] = useState(formatPrice(0)); // O resultado

  // Encontra o carro e define a entrada padrão (ex: 20%)
  useEffect(() => {
    if (carSlug) {
      const foundCar = stockData.find(c => c.slug === carSlug);
      if (foundCar) {
        setCar(foundCar);
        const precoNum = parsePrice(foundCar.price);
        setEntrada(precoNum * 0.20); // Define entrada padrão de 20%
      }
    }
  }, [carSlug]);

  // Recalcula a parcela sempre que a entrada ou o n° de parcelas mudar
  useEffect(() => {
    if (!car) return;

    const precoCarro = parsePrice(car.price);
    const valorFinanciado = precoCarro - entrada;
    const taxaJurosMensal = 1.79 / 100; // Taxa fictícia de 1.79% a.m.

    // Fórmula de Financiamento (Tabela Price)
    const pmt = valorFinanciado * (taxaJurosMensal * Math.pow(1 + taxaJurosMensal, numParcelas)) / 
                (Math.pow(1 + taxaJurosMensal, numParcelas) - 1);
    
    // Se o resultado não for um número (ex: dividiu por 0), mostra 0
    setValorParcela(formatPrice(isNaN(pmt) ? 0 : pmt));

  }, [car, entrada, numParcelas]);

  // Se nenhum carro foi selecionado
  if (!car) {
    return (
      <main className={styles.pageContent} style={{ padding: '10rem 40px', textAlign: 'center' }}>
        <h1>Selecione um veículo</h1>
        <p>Você precisa selecionar um carro no estoque para simular o financiamento.</p>
        <Link href="/estoque" className={styles.btnBack}>Voltar ao Estoque</Link>
      </main>
    );
  }

  // Se o carro foi encontrado, mostra o simulador
  return (
    <main className={styles.pageContent}>
      {/* Imagem de fundo */}
      <div className={styles.heroBackground}>
        <Image
          src="/images/cars/pagani-finan.jpg" 
          alt="Pagani na rua para financiamento"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Caixa de Conteúdo */}
      <div className={styles.financeBox}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Seu Sonho, Realizado.</h2>
            <p>Calcule o financiamento para seu <strong>{car.brand} {car.model}</strong></p>
          </div>

          <div className={styles.calculator}>
            {/* Coluna Esquerda: Inputs */}
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <label htmlFor="entrada">Valor da Entrada</label>
                <input 
                  type="number" 
                  id="entrada" 
                  value={entrada}
                  onChange={(e) => setEntrada(Number(e.target.value))}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="parcelas">Parcelas</label>
                <select 
                  id="parcelas" 
                  value={numParcelas}
                  onChange={(e) => setNumParcelas(Number(e.target.value))}
                >
                  <option value={12}>12x</option>
                  <option value={24}>24x</option>
                  <option value={36}>36x</option>
                  <option value={48}>48x</option>
                  <option value={60}>60x</option>
                </select>
              </div>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="troca" />
                <label htmlFor="troca">Tenho um veículo para dar na troca</label>
              </div>
            </div>

            {/* Coluna Direita: Resultado */}
            <div className={styles.results}>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Valor da Parcela (aprox.)</span>
                <span className={styles.resultValue}>{valorParcela}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Taxa de Juros</span>
                <span className={styles.resultValueSmall}>a partir de 1.79% a.m</span>
              </div>
            </div>
          </div>
          
          <button type="button" className={styles.btnSubmit}>Solicitar Financiamento</button>
        </div>
      </div>
    </main>
  );
}