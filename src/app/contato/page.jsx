// src/app/contato/page.jsx
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ContatoPage() {
  return (
    <main className={styles.pageContent}>
      <div className={styles.container}>
        
        <div className={styles.contactLayout}>
          
          {/* Coluna da Esquerda: Informações */}
          <div className={styles.infoColumn}>
            <h1 className={styles.title}>Visite nosso Showroom</h1>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Endereço</h3>
              <p>Av. Faria Lima, 1800 - São Paulo, SP</p>
            </div>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Telefone</h3>
              <p>+55 (11) 98888-7777</p>
            </div>

            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>E-mail</h3>
              <p>contato@luxuryautosalon.com.br</p>
            </div>

            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Horários</h3>
              <p>Segunda a Sexta: 09:00 - 18:00</p>
              <p>Sábado: 10:00 - 14:00</p>
            </div>

            {/* Placeholder para o Mapa */}
            <div className={styles.mapPlaceholder}>
              {/* No futuro, podemos integrar um Google Maps aqui */}
              <Image 
                src="/images/localizacao.png" // Você precisará de uma imagem de mapa
                alt="Localização do showroom"
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div className={styles.formColumn}>
            <h1 className={styles.title}>Inicie uma conversa</h1>
            
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nome*</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Comentários*</label>
                <textarea id="message" name="message" rows="8" required />
              </div>

              <p className={styles.requiredNote}>* Campos obrigatórios</p>

              <button type="submit" className={styles.btnSubmit}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}