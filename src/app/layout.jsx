// src/app/layout.jsx

// Importa as fontes do Google
import { Oswald, Montserrat } from 'next/font/google';

// Importa nossos estilos globais
import '../styles/globals.css';

// Importa os componentes
import Header from '../componentes/Header';


// Configura as fontes
const oswald = Oswald({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-heading' 
});
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '500'], 
  variable: '--font-body' 
});

// Metadata (bom para SEO)
export const metadata = {
  title: 'Luxury Auto Salon',
  description: 'Sua paixão pela excelência.',
};

// Este é o componente Layout
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${oswald.variable} ${montserrat.variable}`}>
        <Header />
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}