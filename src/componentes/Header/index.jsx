// src/componentes/Header/index.jsx

"use client"; // Necessário para usar o hook usePathname

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importa o hook
import styles from './header.module.css';

const Header = () => {
  // Pega o caminho da URL atual (ex: "/", "/estoque", etc.)
  const pathname = usePathname();

  // Verifica se estamos na página inicial
  const isHomePage = pathname === '/';

  // Define as classes do header:
  // - styles.navbar (estilo base)
  // - styles.transparent (só se for a Home Page)
  const headerClasses = `${styles.navbar} ${isHomePage ? styles.transparent : ''}`;

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        <Link href="/" className={styles.navbarLogo}>
          LUXURY AUTO SALON
        </Link>
        <nav className={styles.navbarMenu}>
          <Link href="/">Início</Link>
          <Link href="/estoque">Estoque</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/sobre">Sobre</Link> {/* (vamos criar essa página depois) */}
        </nav>
      </div>
    </header>
  );
};

export default Header;