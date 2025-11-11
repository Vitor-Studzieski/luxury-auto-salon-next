// src/app/veiculo/[slug]/VehicleClientPage.jsx
"use client"; 

import React, { useRef } from 'react'; // 1. Importa o 'useRef'
import Image from 'next/image';
import styles from './page.module.css';

// ... (Componentes HeartIcon e VideoIcon ficam aqui, sem mudança) ...
const HeartIcon = () => (
  <svg className={styles.heartIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0006 8.07062C10.1212 6.19128 7.09254 6.19128 5.21320 8.07062C3.33386 9.94996 3.33386 13.0501 5.21320 14.9294L12.0006 21.7168L18.7880 14.9294C20.6673 13.0501 20.6673 9.94996 18.7880 8.07062C16.9086 6.19128 13.8799 6.19128 12.0006 8.07062Z" stroke="#e0ac4c" strokeWidth="2"/>
  </svg>
);
const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z" fill="#e0ac4c"/>
  </svg>
);
// -----------------------------------------------------------------

export default function VehicleClientPage({ car }) {
  
  // 2. Cria uma "referência" para a galeria
  const galleryRef = useRef(null);

  // 3. Funções para controlar a rolagem
  const scroll = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.offsetWidth * 0.8; // Rola 80% da largura visível
      galleryRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth' 
      });
    }
  };
  
  return (
    <main className={styles.pageContent}>
      {/* 4. Adiciona as setas de navegação */}
      <div className={styles.fullWidthGalleryContainer}>
        <button 
          className={`${styles.scrollButton} ${styles.scrollLeft}`}
          onClick={() => scroll('left')}
        >
          &#10094;
        </button>

        <div className={styles.fullWidthGallery} ref={galleryRef}> {/* 5. Conecta a ref */}
          {car.imageUrls?.map((url, index) => (
            <div key={index} className={styles.galleryImageWrapper}>
              <Image
                src={url}
                alt={`${car.brand} ${car.model} - Foto ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <button 
          className={`${styles.scrollButton} ${styles.scrollRight}`}
          onClick={() => scroll('right')}
        >
          &#10095;
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.vehicleLayout}>
          
          {/* O resto da página (leftColumn e rightColumn) continua igual */}
          <div className={styles.leftColumn}>
            {/* Título e Subtítulo */}
            <div className={styles.titleSection}>
              <div className={styles.titleHeader}>
                <h1>{car.brand} {car.model}</h1>
                <HeartIcon />
              </div>
              <p className={styles.subtitle}>{car.engine}</p>
            </div>
            {/* Grid de Especificações */}
            <div className={styles.specGrid}>
              {/* ... (todos os specItems) ... */}
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Cidade</span>
                <span className={styles.specValue}>{car.city}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Ano</span>
                <span className={styles.specValue}>{car.year}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>KM</span>
                <span className={styles.specValue}>{car.km}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Câmbio</span>
                <span className={styles.specValue}>{car.transmission}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Combustível</span>
                <span className={styles.specValue}>{car.fuel}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Final de placa</span>
                <span className={styles.specValue}>{car.licensePlateEnd}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Cor</span>
                <span className={styles.specValue}>{car.color}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Aceita troca</span>
                <span className={styles.specValue}>{car.acceptsTradeIn}</span>
              </div>
            </div>
            {/* Link "Sobre as diferenças" */}
            <a href="#" className={styles.diffLink}>Sobre as diferenças do anúncio</a>
            {/* Seção Videochamada */}
            <div className={styles.videoSection}>
              <div className={styles.videoIcon}>
                <VideoIcon />
              </div>
              <div className={styles.videoText}>
                <h4>Videochamada</h4>
                <p>Agende um horário para ver o carro em vídeo!</p>
              </div>
              <button type="button" className={styles.btnVideo}>Agendar videochamada</button>
            </div>
            {/* Descrição */}
            <div className={styles.description}>
              <h3>Sobre o Veículo</h3>
              <p>{car.description}</p>
            </div>
          </div>
          {/* Coluna da Direita: Preço e Formulário */}
          <aside className={styles.rightColumn}>
            <div className={styles.contactFormWrapper}>
              {/* ... (todo o formulário) ... */}
              <div className={styles.priceSection}>
                <p className={styles.price}>{car.price}</p>
                <button type="button" className={styles.btnParcels}>Ver parcelas</button>
              </div>
              <form className={styles.contactForm}>
                <p>Envie uma mensagem ao vendedor</p>
                <div className={styles.inputGroup}>
                  <input type="text" id="name" name="name" placeholder="Nome*" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="email" id="email" name="email" placeholder="E-mail*" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" id="phone" name="phone" placeholder="Telefone*" required />
                </div>
                <div className={styles.inputGroup}>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    defaultValue={`Olá, tenho interesse no ${car.brand} ${car.model} (${car.year}) por ${car.price}. Por favor, entre em contato.`}
                  />
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="checkbox" id="newsletter" name="newsletter" />
                  <label htmlFor="newsletter">Quero receber contatos por e-mail, whatsapp e outros canais.</label>
                </div>
                <button type="submit" className={styles.btnSubmit}>
                  Enviar mensagem
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}