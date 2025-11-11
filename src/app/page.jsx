// src/app/page.jsx

// PASSO IMPORTANTE: Transforma este em um Componente Cliente
"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// --- Imagens do seu carrossel ---
// (Certifique-se de que esses arquivos existem na sua pasta /public/images/)
const carouselImages = [
  '/images/carousel-1.jpg', // (Ex: A Ferrari 12 Cilindri)
  '/images/carousel-2.jpg', // (Ex: O Aston Martin com avião)
  '/images/carousel-3.jpg', // (Ex: O Lamborghini verde)
];
// ---------------------------------

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efeito para trocar o slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Troca a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo
  }, []);

  return (
    <>
      <section className={styles.hero}>
        
        {/* 1. O Carrossel de Fundo */}
        <div className={styles.carouselBackground}>
          {carouselImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Carro de luxo no carrossel"
              fill 
              style={{ objectFit: "cover"}}
              priority={index === 0} // Carrega a primeira imagem mais rápido
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ''
              }`}
            />
          ))}
          {/* Camada escura para o texto se destacar */}
          <div className={styles.overlay}></div>
        </div>

        {/* 2. O Conteúdo da Página (igual ao Desktop-1) */}
        <div className={styles.heroContent}>
          <h1>A Arte da Performance</h1>
          <p>
            Explore nossa coleção exclusiva de veículos de luxo e superesportivos.
            Encontre o carro dos seus sonhos e sinta a emoção de dirigir.
          </p>
          <Link href="/estoque" className={styles.btnPrimary}>
            Conheça o Estoque
          </Link>
        </div>
      </section>

      {/* --- CÓDIGO DO NOVO RODAPÉ ADICIONADO AQUI --- */}
      <footer className={styles.homeFooter}>
        <div className={styles.footerContent}>
          <span className={styles.footerLogo}>LUXURY AUTO SALON</span>
        </div>
      </footer>
    </>
  );
}