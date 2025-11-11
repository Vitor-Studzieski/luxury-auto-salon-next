// src/data/stockData.js

export const stockData = [
  // Porsche
  {
    id: 1,
    brand: 'Porsche',
    model: '911 GT3 RS ',
    slug: 'porsche-911-gt3-rs',
    price: 'R$ 3.450.000',
    imageUrls: [ 
      '/images/cars/porsche-911-gt3-rs.jpg',
      '/images/cars/porsche-911-gt3-rs-2.png',
      '/images/cars/porsche-911-gt3-rs-3.png',
      '/images/cars/porsche-911-gt3-rs-4.png',
      '/images/cars/porsche-911-gt3-rs-5.png',
      '/images/cars/porsche-911-gt3-rs-6.png',
      
    ],
    year: '2024/2025',
    km: '1.100 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '4.0 6 CILINDROS BOXER', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Laranja', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O 911 GT3 RS é a personificação da performance de pista para as ruas, com aerodinâmica ativa e um motor aspirado que gira a 9.000 RPM.',
  },
  {
    id: 2,
    brand: 'Porsche',
    model: '911 Turbo S',
    slug: 'porsche-911-turbo-s', // Corrigido
    price: 'R$ 1.450.000',
    imageUrls: ['/images/cars/porsche-911-turbo-s.jpg',
      '/images/cars/porsche-911-turbo-s-2.png',
      '/images/cars/porsche-911-turbo-s-3.png',
      '/images/cars/porsche-911-turbo-s-4.png',
      '/images/cars/porsche-911-turbo-s-5.png',
      '/images/cars/porsche-911-turbo-s-6.png',
      '/images/cars/porsche-911-turbo-s-7.png',
      '/images/cars/porsche-911-turbo-s-8.png',
      '/images/cars/porsche-911-turbo-s-9.png',
    ], // Atualizado
    year: '2022/2023',
    km: '9.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '3.8 6 CILINDROS BOXER', // Adicionado
    city: 'Rio de Janeiro - RJ', // Adicionado
    licensePlateEnd: '8', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O 911 Turbo S é o supercarro para o dia a dia, combinando luxo extremo com uma aceleração brutal e controle em todas as condições climáticas.',
  },
  {
    id: 3,
    brand: 'Porsche',
    model: 'Cayenne GT',
    slug: 'porsche-cayenne-gt',
    price: 'R$ 900.000',
    imageUrls: ['/images/cars/porsche-cayenne-gt.jpg'], // Atualizado
    year: '2023/2023',
    km: '7.500 KM',
    isArmored: true,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '4.0 V8 BITURBO', // Adicionado
    city: 'Balneário Camboriú - SC', // Adicionado
    licensePlateEnd: '7', // Adicionado
    color: 'Cinza', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'Desempenho de carro esportivo em um corpo de SUV. O Cayenne GT é projetado para máxima performance em pista, sem sacrificar o luxo.',
  },
  {
    id: 4,
    brand: 'Porsche',
    model: '918',
    slug: 'porsche-918',
    price: 'R$ 23.500.000',
    imageUrls: ['/images/cars/porsche-918.jpg'], // Corrigido e Atualizado
    year: '2015/2015',
    km: '2.500 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '4.6 V8 + ELÉTRICO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '8', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Um dos "hypercars" da trindade sagrada. O Porsche 918 Spyder combina um motor V8 de alta rotação com dois motores elétricos para um desempenho de outro mundo.',
  },
  {
    id: 5,
    brand: 'Porsche',
    model: 'Panamera',
    slug: 'porsche-panamera',
    price: 'R$ 850.000',
    imageUrls: ['/images/cars/porsche-panamera.jpg'], // Atualizado
    year: '2021/2022',
    km: '21.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '2.9 V6 HÍBRIDO', // Adicionado
    city: 'Curitiba - PR', // Adicionado
    licensePlateEnd: '3', // Adicionado
    color: 'Preto', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O sedan de luxo com o coração de um Porsche. O Panamera oferece conforto para quatro ocupantes com o desempenho de um verdadeiro esportivo.',
  },
  {
    id: 6,
    brand: 'Porsche',
    model: 'Carrera GT',
    slug: 'porsche-carrera-gt',
    price: 'R$ 11.190.000',
    imageUrls: ['/images/cars/porsche-carrera-gt.jpeg'], // Atualizado
    year: '2006/2006',
    km: '8.100 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '5.7 V10 ASPIRADO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Uma lenda analógica. Com um chassis de carbono e um motor V10 derivado da F1, o Carrera GT é uma das experiências de condução mais puras já criadas.',
  },

  // Ferrari
  {
    id: 7,
    brand: 'Ferrari',
    model: 'Purosangue',
    slug: 'ferrari-purosangue',
    price: 'R$ 7.600.000',
    imageUrls: ['/images/cars/ferrari-purosangue.jpg'], // Atualizado
    year: '2024/2024',
    km: '0 KM',
    isArmored: true,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.5 V12 ASPIRADO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Vermelho', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'A primeira Ferrari de quatro portas e quatro lugares. Um puro-sangue V12 que redefine o conceito de SUV de ultra-luxo e performance.',
  },
  {
    id: 8,
    brand: 'Ferrari',
    model: '296 Speciale',
    slug: 'ferrari-296-speciale', // Corrigido
    price: 'R$ 7.280.000',
    imageUrls: ['/images/cars/ferrari-296-speciale.jpg'], // Corrigido e Atualizado
    year: '2025/2025',
    km: '0 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '3.0 V6 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Vermelho', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'A versão mais focada em performance da 296. Este V6 híbrido leva a tecnologia de pista da Ferrari diretamente para suas mãos.',
  },
  {
    id: 9,
    brand: 'Ferrari',
    model: 'SF90 XX',
    slug: 'ferrari-sf90-xx',
    price: 'R$ 10.420.000',
    imageUrls: ['/images/cars/ferrari-sf90-xx.jpg'], // Atualizado
    year: '2025/2025',
    km: '0 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '4.0 V8 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Vermelho', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'A primeira Ferrari XX legalizada para as ruas. Mais de 1000cv de performance híbrida com aerodinâmica extrema, testada em Fiorano.',
  },
  {
    id: 10,
    brand: 'Ferrari',
    model: 'Enzo',
    slug: 'ferrari-enzo',
    price: 'R$ 42.000.000',
    imageUrls: ['/images/cars/ferrari-enzo.jpg'], // Atualizado
    year: '2004/2004',
    km: '11.900 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.0 V12 ASPIRADO', // Adicionado
    city: 'Belo Horizonte - MG', // Adicionado
    licensePlateEnd: '4', // Adicionado
    color: 'Vermelho', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Construída para celebrar o sucesso da Ferrari na F1, a Enzo é um ícone. Seu motor V12 e chassi de carbono definiram uma era de supercarros.',
  },
  {
    id: 11,
    brand: 'Ferrari',
    model: 'LaFerrari Aperta',
    slug: 'ferrari-laferrari-aperta',
    price: 'R$ 65.000.000',
    imageUrls: ['/images/cars/ferrari-laferrari.jpeg'], // Atualizado
    year: '2014/2015',
    km: '1.100 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '6.3 V12 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '5', // Adicionado
    color: 'Vermelho', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'A versão conversível da LaFerrari. Este hypercar híbrido V12 é uma das máquinas mais desejadas e exclusivas já produzidas pela Ferrari.',
  },
  {
    id: 12,
    brand: 'Ferrari',
    model: '12 Cilindri',
    slug: 'ferrari-12-cilindri',
    price: 'R$ 7.100.000',
    imageUrls: ['/images/cars/ferrari-12-cilindri.jpg',
      '/images/cars/ferrari-12-cilindri-2.png',
      '/images/cars/ferrari-12-cilindri-3.png',
      '/images/cars/ferrari-12-cilindri-4.png',
      '/images/cars/ferrari-12-cilindri-5.png',
      '/images/cars/ferrari-12-cilindri-6.png',
      '/images/cars/ferrari-12-cilindri-7.png',
    ], // Atualizado
    year: '2025/2025',
    km: '0 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.5 V12 ASPIRADO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'A mais nova berlinetta V12 da Ferrari. Uma homenagem aos grand tourers clássicos com a mais recente tecnologia de performance e design.',
  },

  // Lamborghini
  {
    id: 13,
    brand: 'Lamborghini',
    model: 'Urus Se',
    slug: 'lamborghini-urus-se',
    price: 'R$ 4.100.000',
    imageUrls: ['/images/cars/lamborghini-urus-se.jpg'], // Atualizado
    year: '2024/2024',
    km: '1.500 KM',
    isArmored: true,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '4.0 V8 HÍBRIDO', // Adicionado
    city: 'Goiânia - GO', // Adicionado
    licensePlateEnd: '2', // Adicionado
    color: 'Preto', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O Super SUV da Lamborghini agora em versão híbrida plug-in. O Urus SE combina o design agressivo com performance e eficiência impressionantes.',
  },
  {
    id: 14,
    brand: 'Lamborghini',
    model: 'Revuelto',
    slug: 'lamborghini-revuelto',
    price: 'R$ 8.900.000',
    imageUrls: ['/images/cars/lamborghini-revuelto.jpg'], // Atualizado
    year: '2024/2024',
    km: '900 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '6.5 V12 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '4', // Adicionado
    color: 'Laranja', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O sucessor do Aventador. O Revuelto é o primeiro "HPEV" da Lamborghini, com um V12 aspirado e três motores elétricos.',
  },
  {
    id: 15,
    brand: 'Lamborghini',
    model: 'Ultimae',
    slug: 'lamborghini-ultimae',
    price: 'R$ 7.800.000',
    imageUrls: ['/images/cars/lamborghini-ultimae.jpg'], // Atualizado
    year: '2022/2022',
    km: '2.800 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.5 V12 ASPIRADO', // Adicionado
    city: 'Balneário Camboriú - SC', // Adicionado
    licensePlateEnd: '3', // Adicionado
    color: 'Cinza', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'A despedida do Aventador. O Ultimae é a versão final e mais potente do lendário V12 aspirado, combinando o melhor do SVJ e do S.',
  },
  {
    id: 16,
    brand: 'Lamborghini',
    model: 'Temerário',
    slug: 'lamborghini-temerario',
    price: 'R$ 4.500.000',
    imageUrls: ['/images/cars/lamborghini-temerario.jpg'], // Atualizado
    year: '2025/2025',
    km: '0 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '4.0 V8 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Verde', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O sucessor do Huracán, o Temerário (nome especulado) promete redefinir os supercarros V8 com um sistema híbrido inovador e design radical.',
  },
  {
    id: 17,
    brand: 'Lamborghini',
    model: 'Countach',
    slug: 'lamborghini-countach',
    price: 'R$ 18.000.000',
    imageUrls: ['/images/cars/lamborghini-countach.jpg'], // Atualizado
    year: '2022/2022',
    km: '750 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '6.5 V12 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '7', // Adicionado
    color: 'Branco', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Uma releitura moderna do ícone que definiu os supercarros. O novo Countach LPI 800-4 é uma edição limitadíssima com tecnologia V12 híbrida.',
  },
  {
    id: 18,
    brand: 'Lamborghini',
    model: 'Sian',
    slug: 'lamborghini-sian',
    price: 'R$ 26.000.000',
    imageUrls: ['/images/cars/lamborghini-sian.jpg'], // Atualizado
    year: '2020/2021',
    km: '1.200 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '6.5 V12 HÍBRIDO', // Adicionado
    city: 'Brasília - DF', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Verde', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O primeiro híbrido da Lamborghini. O Sian FKP 37 utiliza supercapacitores para um boost de potência, combinado ao glorioso motor V12.',
  },

  // Bugatti
  {
    id: 19,
    brand: 'Bugatti',
    model: 'Chiron',
    slug: 'bugatti-chiron',
    price: 'R$ 52.330.000',
    imageUrls: ['/images/cars/bugatti-chiron.jpg'], // Atualizado
    year: '2019/2020',
    km: '3.500 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '8.0 W16 QUAD-TURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '9', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O rei da velocidade. O Chiron é uma obra-prima da engenharia com seu motor W16 quad-turbo que entrega uma potência e luxo incomparáveis.',
  },
  {
    id: 20,
    brand: 'Bugatti',
    model: 'Divo',
    slug: 'bugatti-divo',
    price: 'R$ 55.000.000',
    imageUrls: ['/images/cars/bugatti-divo.png'], // Atualizado
    year: '2020/2021',
    km: '1.800 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '8.0 W16 QUAD-TURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Cinza', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Baseado no Chiron, o Divo é focado em curvas. Com aerodinâmica aprimorada e menor peso, é a Bugatti feita para agilidade e downforce.',
  },
  {
    id: 21,
    brand: 'Bugatti',
    model: 'Mistral',
    slug: 'bugatti-mistral',
    price: 'R$ 51.000.000',
    imageUrls: ['/images/cars/bugatti-mistral.jpg'], // Atualizado
    year: '2024/2024',
    km: '400 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '8.0 W16 QUAD-TURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'A despedida do motor W16. O Mistral é um roadster deslumbrante que oferece a experiência definitiva de dirigir um Bugatti a céu aberto.',
  },
  {
    id: 22,
    brand: 'Bugatti',
    model: 'Bolide',
    slug: 'bugatti-bolide',
    price: 'R$ 38.000.000',
    imageUrls: ['/images/cars/bugatti-bolide.jpg'], // Atualizado
    year: '2024/2024',
    km: '50 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '8.0 W16 QUAD-TURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'A expressão mais extrema da Bugatti, apenas for pistas. O Bolide é uma máquina leve e brutal, construída em torno do lendário W16.',
  },
  {
    id: 23,
    brand: 'Bugatti',
    model: 'EB 110',
    slug: 'bugatti-eb-110',
    price: 'R$ 15.000.000',
    imageUrls: ['/images/cars/bugatti-eb-110.jpg'], // Atualizado
    year: '1994/1994',
    km: '11.000 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '3.5 V12 QUAD-TURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '2', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O supercarro que reviveu a Bugatti nos anos 90. Com um motor V12 quad-turbo e tração integral, o EB 110 era uma maravilha tecnológica.',
  },
  {
    id: 24,
    brand: 'Bugatti',
    model: 'Veyron',
    slug: 'bugatti-veyron',
    price: 'R$ 12.000.000',
    imageUrls: ['/images/cars/bugatti-veyron.jpg'], // Atualizado
    year: '2010/2011',
    km: '9.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '8.0 W16 QUAD-TURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '5', // Adicionado
    color: 'Preto', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O carro que quebrou a barreira dos 400 km/h. O Veyron redefiniu o que era possível em um carro de produção, combinando velocidade com luxo.',
  },

  // Pagani
  {
    id: 25,
    brand: 'Pagani',
    model: 'Zonda R',
    slug: 'pagani-zonda-r',
    price: 'R$ 31.000.000',
    imageUrls: ['/images/cars/pagani-zonda-r.jpg'], // Atualizado
    year: '2010/2010',
    km: '600 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.0 V12 ASPIRADO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Carbono', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Uma obra de arte para as pistas. O Zonda R é a visão sem limites de Horacio Pagani, com um som de V12 AMG que é pura música.',
  },
  {
    id: 26,
    brand: 'Pagani',
    model: 'Zonda F',
    slug: 'pagani-zonda-f',
    price: 'R$ 28.000.000',
    imageUrls: ['/images/cars/pagani-zonda-f.jpg'], // Atualizado
    year: '2006/2007',
    km: '4.500 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '7.3 V12 ASPIRADO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '7', // Adicionado
    color: 'Carbono', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Dedicado ao piloto Juan Manuel Fangio, o Zonda F é a evolução do Zonda original, combinando arte em fibra de carbono com um motor V12 AMG.',
  },
  {
    id: 27,
    brand: 'Pagani',
    model: 'Huayra',
    slug: 'pagani-huayra',
    price: 'R$ 26.000.000',
    imageUrls: ['/images/cars/pagani-huayra.jpg'], // Atualizado
    year: '2013/2014',
    km: '3.900 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.0 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '3', // Adicionado
    color: 'Vermelho', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Nomeado em homenagem ao deus do vento, o Huayra é uma maravilha de aerodinâmica ativa e detalhes artesanais. Um V12 biturbo da AMG.',
  },
  {
    id: 28,
    brand: 'Pagani',
    model: 'Huayra BC',
    slug: 'pagani-huayra-bc',
    price: 'R$ 30.000.000',
    imageUrls: ['/images/cars/pagani-huayra-bc.jpg'], // Atualizado
    year: '2017/2018',
    km: '2.100 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.0 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '9', // Adicionado
    color: 'Carbono', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'A versão mais leve e agressiva do Huayra, nomeada em homenagem a Benny Caiola, o primeiro cliente da Pagani. Feito para dominar as pistas.',
  },
  {
    id: 29,
    brand: 'Pagani',
    model: 'Utopia',
    slug: 'pagani-utopia',
    price: 'R$ 25.000.000',
    imageUrls: ['/images/cars/pagani-utopia.png'], // Atualizado
    year: '2023/2024',
    km: '300 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '6.0 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O terceiro ato da Pagani. O Utopia foca na pureza da condução, oferecendo um V12 biturbo e a opção de uma transmissão manual.',
  },
  {
    id: 30,
    brand: 'Pagani',
    model: 'Huayra R',
    slug: 'pagani-huayra-r',
    price: 'R$ 28.500.000',
    imageUrls: ['/images/cars/pagani-huayra-r.png'], // Atualizado
    year: '2022/2022',
    km: '150 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.0 V12 ASPIRADO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Branco', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O Huayra R abandona as regras. Um carro exclusivo para pistas com um motor V12 aspirado que grita a mais de 9.000 RPM. Pura emoção.',
  },

  // Koenigsegg
  {
    id: 31,
    brand: 'Koenigsegg',
    model: 'Jesko',
    slug: 'koenigsegg-jesko',
    price: 'R$ 36.000.000',
    imageUrls: ['/images/cars/koenigsegg-jesko.jpg',
      '/images/cars/koenigsegg-jesko-2.png',
      '/images/cars/koenigsegg-jesko-3.png',
      '/images/cars/koenigsegg-jesko-4.png',
      '/images/cars/koenigsegg-jesko-5.png',
      '/images/cars/koenigsegg-jesko-6.png'], // Atualizado
    year: '2023/2024',
    km: '200 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '5.0 V8 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Branco', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Projetado para ser o carro de rua mais rápido do mundo, o Jesko (especialmente a versão Absolut) é uma obra-prima de engenharia sueca.',
  },
  {
    id: 32,
    brand: 'Koenigsegg',
    model: 'Regera',
    slug: 'koenigsegg-regera',
    price: 'R$ 33.000.000',
    imageUrls: ['/images/cars/koenigsegg-regera.jpg'], // Atualizado
    year: '2018/2019',
    km: '2.700 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '5.0 V8 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '3', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O "Megacar" de luxo. O Regera combina um V8 biturbo com um sistema de transmissão direta (KDD) e motores elétricos, eliminando a caixa de câmbio tradicional.',
  },
  {
    id: 33,
    brand: 'Koenigsegg',
    model: 'Gemera',
    slug: 'koenigsegg-gemera',
    price: 'R$ 18.000.000',
    imageUrls: ['/images/cars/koenigsegg-gemera.jpg'], // Atualizado
    year: '2024/2024',
    km: '100 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '2.0 3C HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Cinza', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O primeiro "Mega-GT" de quatro lugares do mundo. O Gemera oferece espaço para a família e performance de hypercar, com tecnologia de motor inovadora.',
  },
  {
    id: 34,
    brand: 'Koenigsegg',
    model: 'Agera',
    slug: 'koenigsegg-agera',
    price: 'R$ 16.000.000',
    imageUrls: ['/images/cars/koenigsegg-agera.jpg'], // Atualizado
    year: '2012/2013',
    km: '6.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '5.0 V8 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '6', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O carro que colocou a Koenigsegg no mapa mundial de recordes. O Agera (e suas variantes como o RS) é sinônimo de velocidade pura.',
  },
  {
    id: 35,
    brand: 'Koenigsegg',
    model: 'CCX',
    slug: 'koenigsegg-ccx',
    price: 'R$ 11.000.000',
    imageUrls: ['/images/cars/koenigsegg-ccx.jpg'], // Atualizado
    year: '2008/2009',
    km: '9.500 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '4.7 V8 SUPERCHARGED', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '7', // Adicionado
    color: 'Preto', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O primeiro Koenigsegg totalmente "global", projetado para atender aos padrões de segurança mundiais. Um V8 supercharged brutal e analógico.',
  },
  {
    id: 36,
    brand: 'Koenigsegg',
    model: 'CCR',
    slug: 'koenigsegg-ccr',
    price: 'R$ 9.000.000',
    imageUrls: ['/images/cars/koenigsegg-ccr.jpg'], // Atualizado
    year: '2005/2005',
    km: '12.000 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '4.7 V8 SUPERCHARGED', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '4', // Adicionado
    color: 'Laranja', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Uma evolução do CC8S, o CCR foi brevemente o carro mais rápido do mundo, provando a capacidade da Koenigsegg de desafiar gigantes.',
  },
  {
    id: 37,
    brand: 'Koenigsegg',
    model: 'CC8S',
    slug: 'koenigsegg-cc8s',
    price: 'R$ 8.500.000',
    imageUrls: ['/images/cars/koenigsegg-cc8s.jpg'], // Atualizado
    year: '2003/2003',
    km: '14.000 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '4.7 V8 SUPERCHARGED', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '8', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O primeiro carro de produção da Koenigsegg. O CC8S introduziu o mundo às portas diédricas e à engenharia radical de Christian von Koenigsegg.',
  },

  // Rolls Royce
  {
    id: 38,
    brand: 'Rolls Royce',
    model: 'Phantom',
    slug: 'rolls-royce-phantom',
    price: 'R$ 6.800.000',
    imageUrls: ['/images/cars/rolls-royce-phantom.jpg'], // Atualizado
    year: '2022/2023',
    km: '8.000 KM',
    isArmored: true,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.75 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '5', // Adicionado
    color: 'Preto', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O ápice do luxo automotivo. O Phantom oferece um silêncio incomparável e um "passeio de tapete mágico", isolando seus ocupantes do mundo exterior.',
  },
  {
    id: 39,
    brand: 'Rolls Royce',
    model: 'Ghost',
    slug: 'rolls-royce-ghost',
    price: 'R$ 5.100.000',
    imageUrls: ['/images/cars/rolls-royce-ghost.jpg'], // Atualizado
    year: '2023/2023',
    km: '5.200 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.75 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '3', // Adicionado
    color: 'Branco', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'Um luxo "pós-opulência". O Ghost é o Rolls-Royce para quem prefere dirigir, oferecendo tecnologia avançada e um design mais minimalista.',
  },
  {
    id: 40,
    brand: 'Rolls Royce',
    model: 'Cullinan',
    slug: 'rolls-royce-cullinan',
    price: 'R$ 6.200.000',
    imageUrls: ['/images/cars/rolls-royce-cullinan.jpg'], // Atualizado
    year: '2022/2023',
    km: '11.000 KM',
    isArmored: true,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.75 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O luxo sem esforço, em qualquer terreno. O Cullinan é o primeiro SUV da Rolls-Royce, levando o conforto do "tapete mágico" para o off-road.',
  },
  {
    id: 41,
    brand: 'Rolls Royce',
    model: 'Spectre',
    slug: 'rolls-royce-spectre',
    price: 'R$ 4.800.000',
    imageUrls: ['/images/cars/rolls-royce-spectre.jpg'], // Atualizado
    year: '2024/2024',
    km: '1.800 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Elétrico',
    engine: 'ELÉTRICO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '9', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O futuro da Rolls-Royce é elétrico. O Spectre é o primeiro super-coupé elétrico da marca, prometendo o silêncio e o torque instantâneo do luxo.',
  },
  {
    id: 42,
    brand: 'Rolls Royce',
    model: 'Boat Tail',
    slug: 'rolls-royce-boat-tail',
    price: 'R$ 145.000.000',
    imageUrls: ['/images/cars/rolls-royce-boat-tail.jpg'], // Atualizado
    year: '2021/2021',
    km: '1.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.75 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Azul', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Uma obra de arte sob medida. O Boat Tail é um dos carros mais caros já feitos, uma criação da divisão "Coachbuild" da Rolls-Royce.',
  },
  {
    id: 43,
    brand: 'Rolls Royce',
    model: 'Dawn',
    slug: 'rolls-royce-dawn',
    price: 'R$ 4.500.000',
    imageUrls: ['/images/cars/rolls-royce-dawn.jpg'], // Atualizado
    year: '2019/2020',
    km: '16.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '6.6 V12 BITURBO', // Adicionado
    city: 'Florianópolis - SC', // Adicionado
    licensePlateEnd: '7', // Adicionado
    color: 'Branco', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O conversível mais social do mundo. O Dawn foi projetado para oferecer uma experiência de luxo a céu aberto para quatro adultos em total conforto.',
  },

  // Aston Martin
  {
    id: 44,
    brand: 'Aston Martin',
    model: 'Vantage F1',
    slug: 'aston-martin-vantage-f1',
    price: 'R$ 2.100.000',
    imageUrls: ['/images/cars/aston-martin-vantage-f1.jpg'], // Atualizado
    year: '2021/2022',
    km: '9.800 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '4.0 V8 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Verde', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'Nascido do retorno da Aston Martin à F1. Esta edição especial do Vantage tem mais potência, aerodinâmica aprimorada e foco total na pista.',
  },
  {
    id: 45,
    brand: 'Aston Martin',
    model: 'DB12',
    slug: 'aston-martin-db12',
    price: 'R$ 3.600.000',
    imageUrls: ['/images/cars/aston-martin-db12.jpg'], // Atualizado
    year: '2024/2024',
    km: '2.200 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '4.0 V8 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '2', // Adicionado
    color: 'Verde', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O primeiro "Super Tourer" do mundo. O DB12 combina o luxo de um GT com o desempenho de um supercarro, apresentando um interior totalmente novo.',
  },
  {
    id: 46,
    brand: 'Aston Martin',
    model: 'Vanquish',
    slug: 'aston-martin-vanquish',
    price: 'R$ 2.900.000',
    imageUrls: ['/images/cars/aston-martin-vanquish.jpg'], // Atualizado
    year: '2018/2019',
    km: '14.000 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Gasolina',
    engine: '5.9 V12 ASPIRADO', // Adicionado
    city: 'Curitiba - PR', // Adicionado
    licensePlateEnd: '9', // Adicionado
    color: 'Cinza', // Adicionado
    acceptsTradeIn: 'Sim', // Adicionado
    description: 'O último dos grandes GTs V12 aspirados da Aston. O Vanquish (especialmente na versão S) é uma obra-prima de design e som.',
  },
  {
    id: 47,
    brand: 'Aston Martin',
    model: 'Valkyrie',
    slug: 'aston-martin-valkyrie',
    price: 'R$ 33.000.000',
    imageUrls: ['/images/cars/aston-martin-valkyrie.jpg'], // Atualizado
    year: '2022/2023',
    km: '450 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '6.5 V12 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '7', // Adicionado
    color: 'Prata', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Um carro de F1 para as ruas, projetado por Adrian Newey. O Valkyrie e seu motor V12 Cosworth aspirado são uma maravilha da engenharia.',
  },
  {
    id: 48,
    brand: 'Aston Martin',
    model: 'Valhalla',
    slug: 'aston-martin-valhalla',
    price: 'R$ 9.000.000',
    imageUrls: ['/images/cars/aston-martin-valhalla.jpg'], // Atualizado
    year: '2024/2024',
    km: '100 KM',
    isArmored: false,
    transmission: 'Automático',
    fuel: 'Híbrido',
    engine: '4.0 V8 HÍBRIDO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '0', // Adicionado
    color: 'Verde', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'O "filho do Valkyrie". O Valhalla traz a tecnologia híbrida e a aerodinâmica de motor central para um formato mais acessível, mas ainda extremo.',
  },
  {
    id: 49,
    brand: 'Aston Martin',
    model: 'Valour',
    slug: 'aston-martin-valour',
    price: 'R$ 11.000.000',
    imageUrls: ['/images/cars/aston-martin-valour.jpg'], // Atualizado
    year: '2024/2024',
    km: '50 KM',
    isArmored: false,
    transmission: 'Manual',
    fuel: 'Gasolina',
    engine: '5.2 V12 BITURBO', // Adicionado
    city: 'São Paulo - SP', // Adicionado
    licensePlateEnd: '1', // Adicionado
    color: 'Preto', // Adicionado
    acceptsTradeIn: 'Não', // Adicionado
    description: 'Uma celebração dos 110 anos da Aston Martin. O Valour é uma edição limitadíssima que combina um design retrô com um motor V12 e câmbio manual.',
  },
];