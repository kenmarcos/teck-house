import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "O mouse Logitech MX Master 3s é uma poderosa e sofisticada ferramenta de produtividade que combina design ergonômico com desempenho excepcional. Com uma roda de rolagem MagSpeed e sensor de alta precisão, oferece uma experiência de navegação suave e eficiente. Seu design elegante e confortável é ideal para longas horas de trabalho, e a conectividade versátil permite alternar facilmente entre dispositivos. Com personalização avançada de botões e uma bateria de longa duração, o MX Master 3s é a escolha perfeita para profissionais que buscam produtividade e conforto superiores em seu ambiente de trabalho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "O mouse Logitech Pro X Superlight é a escolha definitiva para jogadores ávidos e profissionais que buscam desempenho máximo em jogos. Com um design ultraleve e aerodinâmico, pesando apenas 63 gramas, ele oferece uma experiência de jogo ágil e precisa. Equipado com o sensor HERO, oferece rastreamento de alta precisão com até 25.000 DPI, garantindo movimentos suaves e responsivos. Além disso, seus botões mecânicos de alta qualidade proporcionam uma resposta rápida e durabilidade excepcional. O Logitech Pro X Superlight é projetado para jogadores que exigem o melhor desempenho e conforto, proporcionando uma vantagem competitiva definitiva em qualquer campo de batalha virtual.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "O mouse Logitech G305 Lightspeed é a escolha perfeita para os gamers que buscam desempenho excepcional e liberdade sem fio. Com a tecnologia Lightspeed, oferece uma conexão ultra rápida e estável, garantindo que cada movimento seja preciso e responsivo. Seu sensor HERO proporciona uma precisão incrível, com até 12.000 DPI, e sua durabilidade é notável, com uma vida útil da pilha de até 9 meses. Com design ergonômico e 6 botões programáveis, o Logitech G305 oferece uma experiência de jogo excepcional para gamers de todos os níveis.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "O mouse HyperX Pulsefire Dart é a escolha ideal para gamers que buscam desempenho superior e liberdade sem fio. Com sua conectividade RF 2.4GHz e bateria de longa duração, este mouse oferece uma experiência de jogo sem atrasos, garantindo que você esteja sempre um passo à frente da concorrência. Com um sensor óptico de alta precisão, botões programáveis e iluminação RGB personalizável, o Pulsefire Dart proporciona uma combinação perfeita de funcionalidade e estilo para elevar sua experiência de jogo a um novo patamar. Seja em jogos de tiro, estratégia ou qualquer outro gênero, este mouse foi projetado para ajudá-lo a alcançar o máximo desempenho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "O Razer DeathAdder V2 Pro é um mouse de alto desempenho projetado para gamers que buscam precisão e conforto. Equipado com a tecnologia sem fio Razer HyperSpeed, possui uma conexão ultrarrápida para jogos sem interrupções. Seu sensor óptico de 20.000 DPI oferece uma precisão excepcional, enquanto os switches Razer Optical Mouse garantem cliques rápidos e responsivos. Com design ergonômico, é confortável para longas sessões de jogo, e os botões programáveis proporcionam uma experiência de personalização única. O Razer DeathAdder V2 Pro é a escolha ideal para jogadores que desejam vantagem competitiva em seus jogos favoritos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "O teclado Logitech MX Keys Mini é uma solução compacta e sofisticada para usuários que desejam um teclado de alta qualidade em um formato menor. Com teclas de perfil baixo e retroiluminação ajustável, proporciona uma experiência de digitação confortável e eficiente, tornando-o ideal para produtividade em ambientes de trabalho ou em trânsito. Sua conectividade Bluetooth permite fácil emparelhamento com dispositivos diversos, tornando-o versátil e conveniente. Além disso, sua construção de alta qualidade e design elegante fazem dele uma adição atraente para qualquer ambiente. O Logitech MX Keys Mini é a escolha perfeita para quem busca um teclado compacto e funcional que atenda às necessidades de trabalho e lazer.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "O teclado Logitech MX Keys S é uma elegante e avançada solução de entrada que combina design premium com desempenho excepcional. Projetado para atender às necessidades dos usuários que valorizam a produtividade e o conforto, o MX Keys S oferece uma experiência de digitação excepcionalmente suave e silenciosa, graças às suas teclas de perfil baixo com retroiluminação inteligente. Sua conectividade versátil permite emparelhamento com até três dispositivos diferentes e a troca entre eles é fácil e rápida. Além disso, a bateria de longa duração e os controles de mídia integrados tornam este teclado ideal para quem busca um produto de alta qualidade para aprimorar seu fluxo de trabalho. O Logitech MX Keys S é a escolha perfeita para quem valoriza tanto o estilo quanto o desempenho em um teclado.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "O teclado Logitech Pop Keys é a escolha perfeita para aqueles que buscam uma experiência de digitação eficiente e elegante. Com um design compacto e elegante, suas teclas de perfil baixo proporcionam uma digitação suave e silenciosa. Além disso, o teclado é compatível com dispositivos móveis e computadores, tornando-o versátil para todas as suas necessidades de digitação. Seu estilo moderno e funcionalidade intuitiva o tornam um acessório indispensável para quem valoriza qualidade e conforto na hora de digitar.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "O teclado Logitech MX Mechanical é a escolha ideal para quem busca uma experiência de digitação superior. Com switches mecânicos de alta qualidade, oferece uma resposta tátil precisa e um som de clique agradável, tornando a digitação mais satisfatória. Além disso, conta com retroiluminação personalizável, teclas programáveis e uma construção robusta e elegante. Este teclado é a combinação perfeita de estilo, desempenho e durabilidade, projetado para atender às necessidades dos usuários mais exigentes. Seja para trabalho ou lazer, o Logitech MX Mechanical é a escolha perfeita para elevar sua experiência de digitação a um novo patamar.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "O teclado Epomaker TH80 é uma escolha excepcional para os entusiastas de teclados mecânicos em busca de uma experiência de digitação premium. Com sua construção sólida, switches hot-swappable, e iluminação RGB personalizável, o TH80 oferece a combinação perfeita de durabilidade, versatilidade e estética para elevar sua experiência de digitação e gaming a um novo patamar. Seu design compacto e portátil torna-o uma opção conveniente para uso em casa ou em movimento, enquanto sua qualidade de construção e opções de personalização garantem que atenderá às necessidades de qualquer usuário exigente.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "O teclado Redragon Gamer Ashe é um equipamento de alta performance projetado para atender às demandas dos jogadores mais exigentes. Com um design ergonômico e iluminação RGB personalizável, o Ashe proporciona uma experiência de jogo imersiva e visualmente deslumbrante. Suas teclas mecânicas oferecem respostas precisas e táteis, tornando-o ideal para jogos de ação e competições. Além disso, conta com recursos avançados, como anti-ghosting e teclas programáveis, garantindo que cada comando seja executado com perfeição. O teclado Redragon Gamer Ashe é a escolha perfeita para gamers que buscam um desempenho excepcional e um visual único em seu setup de jogos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "O Logitech Zone Vibe 100 é um headset premium projetado para proporcionar uma experiência de áudio imersiva e conforto durante longas horas de uso. Com cancelamento de ruído ativo, áudio de alta qualidade e controles intuitivos, este headset é ideal para profissionais que desejam se concentrar no trabalho ou participar de reuniões online com clareza e conforto. Seu design elegante e ergonômico complementa a estética moderna e funcional de qualquer ambiente de trabalho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "O Logitech Pro X 2 Lightspeed é um fone de ouvido premium projetado para oferecer uma experiência de áudio imersiva e de alta qualidade. Com a tecnologia Lightspeed da Logitech, proporciona uma conexão sem fio rápida e estável, garantindo que você não perca nenhum detalhe sonoro nos seus jogos ou durante chamadas. Além disso, este headset é altamente personalizável, permitindo ajustes no som e nas configurações de acordo com suas preferências, tornando-o ideal para gamers e entusiastas de áudio que buscam o máximo desempenho e conforto.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Logitech Astro A30 é uma escolha excepcional para os entusiastas de áudio e gamers que buscam qualidade de som imersiva e conforto duradouro. Com sua construção sólida, design elegante e almofadas auriculares macias, este headset proporciona uma experiência de audição envolvente durante horas de uso. Compatível com uma variedade de plataformas de jogo e dispositivos, o Logitech Astro A30 oferece áudio nítido e um microfone de alta qualidade, tornando-o uma opção versátil e confiável para quem procura uma experiência de jogo e comunicação aprimoradas.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "O Logitech Zone Wired Earbuds é a escolha ideal para quem busca uma experiência de áudio imersiva e comunicação clara. Estes fones de ouvido oferecem excelente qualidade de som, com cancelamento de ruído ativo e microfones integrados de alto desempenho, tornando-os perfeitos para videoconferências e chamadas telefônicas. Além disso, seu design confortável e compacto os torna ideais para uso prolongado, garantindo a produtividade e o conforto durante todo o dia.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "O HyperX Cloud Stinger 2 é um fone de ouvido com headset projetado para oferecer uma experiência de áudio imersiva e confortável para gamers e entusiastas de entretenimento. Com drivers de 50mm, som estéreo de alta qualidade e um microfone com cancelamento de ruído, este headset proporciona uma comunicação nítida durante os jogos, enquanto sua estrutura leve e almofadas de espuma memory foam garantem horas de uso sem desconforto. Além disso, a conveniente conectividade com fio, controles de áudio integrados e um design elegante tornam o Cloud Stinger 2 uma escolha excelente para aqueles que buscam uma experiência sonora excepcional em todas as suas atividades de entretenimento.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "O fone/headset Razer Kraken X é a escolha ideal para os entusiastas de jogos que buscam uma experiência sonora imersiva e conforto duradouro. Com drivers de 40mm e áudio surround 7.1, ele oferece qualidade de som excepcional e permite que você mergulhe completamente em seus jogos favoritos. Além disso, seu design leve e almofadas de ouvido macias garantem horas de conforto ininterrupto, tornando-o perfeito para sessões de jogos prolongadas. Com o Razer Kraken X, você estará pronto para enfrentar qualquer desafio no mundo dos jogos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "O Logitech Powerplay é um mousepad revolucionário que combina perfeitamente o mundo da tecnologia sem fio e a conveniência do carregamento sem fio. Projetado para jogadores ávidos, ele oferece um espaço de superfície generoso para movimentos precisos do mouse e integra a tecnologia de carregamento sem fio Qi, permitindo que os mouses compatíveis sejam recarregados automaticamente enquanto são usados. Com isso, os jogadores nunca mais precisam se preocupar com a bateria do mouse durante as sessões de jogo mais intensas. Além disso, seu design elegante e funcional se encaixa perfeitamente em qualquer configuração de jogo. O Logitech Powerplay é a solução definitiva para gamers que buscam desempenho impecável e comodidade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "O mousepad Logitech Desk Mat é a escolha ideal para aprimorar a sua experiência de computação. Com sua superfície suave e generosas dimensões, ele oferece um amplo espaço para movimentação precisa do mouse, garantindo um desempenho excepcional em jogos e tarefas do dia a dia. Além disso, sua base antiderrapante assegura que o mousepad permaneça firmemente no lugar, enquanto o design elegante e durável o torna uma adição sofisticada para qualquer estação de trabalho. O Logitech Desk Mat é a combinação perfeita de funcionalidade e estilo para otimizar sua produtividade e diversão.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "O mousepad Logitech G740 é um acessório de alta qualidade projetado para atender às necessidades dos jogadores mais exigentes. Com uma superfície de pano de microtextura que oferece precisão e controle excepcionais, além de uma base de borracha aderente que evita deslizamentos indesejados, o G740 é ideal para aprimorar a experiência de jogo, proporcionando um desempenho suave e preciso, tornando-o um companheiro essencial para gamers em busca de vantagens competitivas.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "O mousepad Logitech Studio Series é a escolha ideal para quem busca um equilíbrio perfeito entre estilo e funcionalidade. Com um design elegante e textura de tecido premium, este mousepad não só complementa a estética do seu espaço de trabalho, mas também oferece uma superfície suave e precisa para o desempenho do seu mouse. Seja você um criativo em busca de inspiração ou um profissional em busca de produtividade, o mousepad Logitech Studio Series é a adição perfeita para aprimorar sua experiência computacional.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "O mousepad Force One Skyhawk Dark é um acessório de alta qualidade projetado para aprimorar sua experiência de jogo e trabalho. Com uma superfície texturizada que oferece um controle preciso do cursor e uma base antiderrapante para manter o mousepad no lugar, o Skyhawk Dark é perfeito para gamers e profissionais que exigem desempenho e durabilidade. Sua impressionante estampa temática de aviação confere um visual elegante e dinâmico à sua estação de trabalho, tornando-o uma escolha ideal para quem procura funcionalidade e estilo.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "O mousepad Force One Skyhawk Snow é um acessório de alta qualidade projetado para melhorar a precisão e o desempenho de seus dispositivos de entrada. Com uma superfície suave e texturizada que oferece excelente aderência e controle, o Skyhawk Snow é perfeito para gamers e profissionais que buscam uma experiência de uso mais fluida e responsiva. Seu design elegante e a estampa inspirada no universo aéreo o tornam não apenas funcional, mas também esteticamente atraente, complementando qualquer estação de trabalho ou setup de jogo.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "O monitor Dell S2421HN é uma escolha excelente para quem procura uma experiência de visualização nítida e vibrante. Com uma tela de 23,8 polegadas e resolução Full HD, oferece imagens detalhadas e cores vivas. Além disso, sua tecnologia IPS garante ângulos de visão amplos e precisos, tornando-o ideal para tarefas de produtividade, entretenimento e até mesmo jogos. Com design elegante e bordas finas, o Dell S2421HN também se integra perfeitamente a qualquer ambiente de trabalho ou entretenimento.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "O monitor Dell P2422H é uma escolha excepcional para quem busca qualidade de imagem e versatilidade. Com uma tela LED Full HD de 23,8 polegadas, proporciona imagens nítidas e cores vibrantes, tornando-o ideal para tarefas profissionais e entretenimento. Sua ampla variedade de opções de conectividade, incluindo HDMI, DisplayPort e USB, oferece flexibilidade para diferentes necessidades, enquanto recursos como a tecnologia ComfortView reduzem a fadiga visual. O design elegante e ergonômico, juntamente com a confiabilidade da marca Dell, fazem deste monitor uma escolha sólida para qualquer ambiente de trabalho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "O monitor Dell P2723QE é uma excelente opção para profissionais que buscam alta qualidade de imagem e versatilidade em um único dispositivo. Com uma tela de 27 polegadas, resolução 4K e uma ampla gama de cores, este monitor oferece imagens nítidas e vibrantes, tornando-o ideal para tarefas que exigem precisão, como edição de fotos e vídeos. Além disso, sua capacidade de ajuste de altura e rotação permite um posicionamento personalizado, enquanto as diversas opções de conectividade, incluindo USB-C e HDMI, tornam a integração com outros dispositivos uma tarefa simples. Combinando desempenho e flexibilidade, o Dell P2723QE atende às necessidades de profissionais exigentes.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "O monitor Dell S3422DWG é uma impressionante tela curva de 34 polegadas que oferece uma experiência visual imersiva e vibrante. Com resolução WQHD, proporciona imagens nítidas e detalhadas, enquanto sua taxa de atualização de 144Hz e suporte para tecnologia AMD FreeSync oferecem um desempenho suave e sem rasgos, ideal para gamers e profissionais criativos. Com uma elegante estrutura sem moldura, múltiplas opções de conectividade e uma curvatura sutil para maior conforto, este monitor Dell é a escolha perfeita para quem busca qualidade e desempenho excepcionais em um ambiente de trabalho ou entretenimento.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "O monitor Dell S3222DGM é uma impressionante tela de 32 polegadas com resolução Quad HD que oferece uma experiência visual imersiva. Com taxas de atualização de até 165Hz e suporte para tecnologia AMD FreeSync Premium Pro, proporciona imagens nítidas e suaves em jogos e aplicações exigentes. Sua ampla curvatura de 1500R envolve o espectador, aprimorando a imersão, enquanto as opções de conectividade versáteis, incluindo HDMI, DisplayPort e USB-C, garantem a compatibilidade com uma variedade de dispositivos. O Dell S3222DGM é uma escolha atraente para gamers e profissionais que buscam qualidade visual e desempenho em um único pacote.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "O monitor Dell AW2524HF é uma impressionante tela de 25 polegadas, projetada para oferecer uma experiência de jogo imersiva e de alta qualidade. Com uma taxa de atualização de 360Hz, resolução Full HD, e a tecnologia NVIDIA G-Sync, ele proporciona imagens incrivelmente suaves e livres de distorções, tornando-o ideal para gamers que buscam precisão e desempenho. Além disso, sua estilosa estética, com iluminação RGB AlienFX personalizável, adiciona um toque de sofisticação ao seu setup de jogo. Este monitor Dell é a escolha perfeita para aqueles que desejam uma vantagem competitiva nos jogos mais exigentes.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "O sistema de som Logitech Surround Sound Z607 oferece uma experiência de áudio envolvente e imersiva, ideal para entretenimento em casa. Com 160 watts de potência, esse conjunto de alto-falantes 5.1 proporciona um som nítido e vibrante, permitindo que você desfrute de filmes, música e jogos com uma qualidade sonora excepcional. Além disso, a conectividade Bluetooth e diversas opções de entrada garantem a compatibilidade com uma variedade de dispositivos, tornando o Z607 uma escolha versátil para aprimorar sua experiência audiovisual.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "O Logitech Dock é um dispositivo versátil e elegante projetado para melhorar sua experiência de áudio e carregamento. Com conectividade Bluetooth de alta qualidade, ele permite que você transmita músicas de forma fácil a partir de dispositivos móveis ou laptops, enquanto carrega simultaneamente seu dispositivo. Com design compacto e funcional, o Logitech Dock se torna um complemento ideal para qualquer ambiente, proporcionando som nítido e conveniência de carregamento em um único dispositivo.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Os alto-falantes Sony SA-Z9R são um complemento essencial para quem busca uma experiência de áudio imersiva e envolvente. Projetados para funcionar em conjunto com os sistemas de som da Sony, esses alto-falantes traseiros sem fio oferecem um som cristalino e surround, levando o entretenimento doméstico a um novo patamar. Com sua fácil configuração e qualidade de áudio excepcional, os SA-Z9R Speakers proporcionam uma experiência de áudio cinematográfica no conforto de sua casa.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "O speaker Sony XB43 Extra Bass é a escolha perfeita para os amantes da música que buscam um som potente e envolvente em um formato portátil. Com sua tecnologia de graves aprimorados, ele oferece uma experiência sonora excepcional, proporcionando batidas profundas e vibrantes em qualquer lugar que você vá. Além disso, sua construção robusta e à prova d'água torna-o ideal para uso ao ar livre, garantindo que a festa nunca pare. Com conectividade Bluetooth e uma bateria de longa duração, o XB43 é o companheiro ideal para suas aventuras musicais.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "O alto-falante Sony XB23 Extra Bass é a escolha perfeita para quem busca um som potente e portabilidade. Com sua tecnologia de reforço de graves, ele proporciona um som nítido e envolvente, tornando qualquer festa ou momento de entretenimento uma experiência musical excepcional. Além disso, sua construção durável e à prova d'água o torna ideal para uso tanto em ambientes internos quanto ao ar livre, garantindo que a música esteja sempre presente, não importa onde você esteja.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "A Sony HT-S200F Soundbar é a solução perfeita para aprimorar a qualidade de áudio da sua experiência de entretenimento em casa. Com seu design elegante e compacto, esta soundbar oferece um som nítido e envolvente que transforma sua sala de estar em um verdadeiro cinema. Com a tecnologia Bluetooth integrada, você pode facilmente conectar dispositivos móveis para reproduzir sua música favorita, e o subwoofer sem fio proporciona graves profundos e poderosos. Além disso, as opções de conectividade versáteis e os modos de som personalizáveis garantem uma experiência sonora adaptada às suas preferências individuais. A Sony HT-S200F Soundbar é a escolha ideal para elevar sua experiência de áudio doméstico a um novo patamar.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
