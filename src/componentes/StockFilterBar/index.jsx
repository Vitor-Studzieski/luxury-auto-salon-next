// src/componentes/StockFilterBar/index.jsx
import React from 'react';
import styles from './stockFilterBar.module.css';

const StockFilterBar = () => {
  return (
    <div className={styles.filterContainer}>
      {/* --- SEÇÃO ORDENAR E BUSCAR --- */}
      <div className={styles.topRow}>
        <div className={styles.sortSection}>
          <label>ORDENAR POR:</label>
          <div className={styles.sortButtons}>
            <button type="button">MARCA</button>
            <button type="button">ANO</button>
            <button type="button">VERSÃO</button>
            <button type="button" className={styles.active}>MODELO</button>
            <button type="button">MENORES PREÇOS</button>
            <button type="button">MAIORES PREÇOS</button>
          </div>
        </div>
        <div className={styles.searchSection}>
          <label>BUSCAR POR:</label>
          <div className={styles.searchInputWrapper}>
            <input type="text" placeholder="" />
            {/* O ícone de lupa será adicionado via CSS */}
          </div>
        </div>
      </div>

      {/* --- SEÇÃO FILTROS --- */}
      <div className={styles.bottomRow}>
        <label>FILTROS</label>
        <div className={styles.filterDropdowns}>
          <select name="blindado">
            <option value="">BLINDADO</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
          <select name="cor">
            <option value="">COR</option>
            <option value="preto">Preto</option>
            <option value="branco">Branco</option>
            <option value="cinza">Cinza</option>
            <option value="vermelho">Vermelho</option>
          </select>
          <select name="marca">
            <option value="">MARCA</option>
            {/* Idealmente, isso seria populado pelos seus dados */}
          </select>
          <select name="modelo">
            <option value="">MODELO</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StockFilterBar;