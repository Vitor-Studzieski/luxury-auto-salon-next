// src/app/estoque/page.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { stockData } from '../../data/stockData'; 
import StockFilterBar from '../../componentes/StockFilterBar'; // <-- IMPORTAÇÃO NOVA

// REMOVA a importação do FilterSidebar

export default function EstoquePage() {
  const shuffledData = [...stockData].sort(() => Math.random() - 0.5);

  return (
    <main className={styles.pageContent}>
      <div className={styles.container}>
        
        {/* --- MUDANÇA AQUI --- */}
        {/* 1. Nova Barra de Filtro no topo */}
        <StockFilterBar />

        {/* 2. Grade de Carros (agora ocupa a largura total) */}
        <section className={styles.catalogGrid}>
          {shuffledData.map((car) => (
            <Link 
              href={`/veiculo/${car.slug}`} 
              key={car.id} 
              className={styles.vehicleCard}
            >
              {car.isArmored && (
                <span className={styles.blindadoBadge}>Blindado</span>
              )}
              
              <div className={styles.imageContainer}>
                <Image
                  src={car.imageUrls && car.imageUrls.length > 0 ? car.imageUrls[0] : '/images/cars/default.jpg'}
                  alt={`${car.brand} ${car.model}`}
                  width={400}
                  height={250}
                  className={styles.cardImage}
                />
              </div>
              
              <div className={styles.cardContent}>
                <h4 className={styles.carName}>{car.brand} {car.model}</h4>
                <p className={styles.carDetails}>
                  {car.year} - {car.km}
                </p>
                <p className={styles.price}>{car.price}</p>
              </div>
            </Link>
          ))}
        </section>
        {/* --- FIM DA MUDANÇA --- */}

      </div>
    </main>
  );
}