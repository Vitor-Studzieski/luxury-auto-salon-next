// src/componentes/FilterSidebar/index.jsx
import React from 'react';
import styles from './filterSidebar.module.css';

const FilterSidebar = () => {
  return (
    <aside className={styles.catalogFilters}>
      <h3>Filtrar</h3>
      <form>
        <div className={styles.filterGroup}>
          <label htmlFor="marca">Marca</label>
          <select id="marca" name="marca">
            <option value="">Todas</option>
            <option value="porsche">Porsche</option>
            <option value="ferrari">Ferrari</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="bugatti">Bugatti</option>
            {/* Adicione as outras marcas... */}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="ano">Ano</label>
          <input type="text" id="ano" name="ano" placeholder="2020-2024" />
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="preco">Preço</label>
          <input type="text" id="preco" name="preco" placeholder="Até R$ 10.000.000" />
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="cambio">Câmbio</label>
          <select id="cambio" name="cambio">
            <option value="">Todos</option>
            <option value="automatico">Automático</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <button type="submit" className={styles.btnPrimary}>
          Filtrar
        </button>
      </form>
    </aside>
  );
};

export default FilterSidebar;