const GITHUB_USER = "HSkevinYT1";  
const GITHUB_REPO = "MangaVerse";  

const isGithubPages = window.location.hostname.includes('github.io');
const BASE_URL = isGithubPages 
    ? `https://${GITHUB_USER}.github.io/${GITHUB_REPO}/`
    : './';

const mangas = [
    {
        id: 1,
        title: "Chainsaw-man", 
        cover: `${BASE_URL}Mangas/Chainsaw-man/Cover.jpg`,
        chapters: 512, 
        status: "Publicandose",
        genres: ["Shonen"],
        chapter_list: [
            { 
                id: 1, 
                title: "Capítulo 1", 
                imageUrls: [
                    `${BASE_URL}Mangas/Chainsaw-man/E1/P1.jpg`,
                    `${BASE_URL}Mangas/Chainsaw-man/E1/P2.jpeg`,
                    `${BASE_URL}Mangas/Chainsaw-man/E1/P3.jpeg`,
                ] 
            },
            { 
                id: 2, 
                title: "Capítulo 2", 
                imageUrls: [
                    `${BASE_URL}images/dragon_ball/cap_002/01.jpg`,
                    `${BASE_URL}images/dragon_ball/cap_002/02.jpg`,
                    `${BASE_URL}images/dragon_ball/cap_002/03.jpg`,
                ] 
            },
            { 
                id: 3, 
                title: "Capítulo 3", 
                imageUrls: [
                    'https://via.placeholder.com/600x800/1e1b4b/a78bfa?text=CAPITULO+3+EN+PREPARACION',
                    'https://via.placeholder.com/600x800/1e1b4b/a78bfa?text=PAGINA+2+DE+3',
                    'https://via.placeholder.com/1200x500/1e1b4b/a78bfa?text=ILUSTRACION+PANORAMICA+(Scroll+Horizontal)', 
                ] 
            }
        ]
    },
    {
        id: 2,
        title: "Dr Stone",
        cover: `${BASE_URL}Mangas/Dr Stone/Cover.jpg`,
        chapters: 234,
        status: "Terminado",
        genres: ["Acción", "Drama"],
        chapter_list: []
    },
    {
        id: 3,
        title: "Attack on Titan",
        cover: `${BASE_URL}Mangas/Attack on Titan/Cover.jpg`,
        chapters: 140,
        status: "Terminado",
        genres: ["Acción", "Militar", "Drama"],
        chapter_list: []
    },
    {
        id: 4,
        title: "One Piece",
        cover: `${BASE_URL}Mangas/One Piece/Cover.jpg`,
        chapters: 1168,
        status: "Publicandose",
        genres: ["Aventura", "Shonen", "Fantasía"],
        chapter_list: []
    },
    {
        id: 5,
        title: "Jujutsu Kaisen",
        cover: `${BASE_URL}Mangas/Jujutsu Kaisen/Cover.jpg`,
        chapters: 278,
        status: "Terminado",
        genres: ["Sobrenatural", "Acción"],
        chapter_list: []
    },
    {
        id: 6,
        title: "Kaguya-sama: Love is War",
        cover: `${BASE_URL}Mangas/Kaguya-sama/Cover.jpg`,
        chapters: 281,
        status: "Terminado",
        genres: ["Comedia Romantica", "Comedia"],
        chapter_list: [
            { 
                id: 1, 
                title: "Capítulo 1", 
                imageUrls: [
                    `${BASE_URL}Mangas/Kaguya-sama/E1/P1.jpg`,
                    `${BASE_URL}Mangas/Kaguya-sama/E1/P2.jpg`,
                    `${BASE_URL}Mangas/Kaguya-sama/E1/P3.jpg`,
                ] 
            },
            { 
                id: 2, 
                title: "Capítulo 2", 
                imageUrls: [
                    `${BASE_URL}images/Kaguya-sama/cap_002/01.jpg`,
                    `${BASE_URL}images/Kaguya-sama/cap_002/02.jpg`,
                    `${BASE_URL}images/Kaguya-sama/cap_002/03.jpg`,
                ] 
            },
            { 
                id: 161, 
                title: "Capítulo 161", 
                imageUrls: [
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P1.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P2.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P3.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P4.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P5.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P6.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P7.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P8.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P9.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P10.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P11.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P12.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P13.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P14.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P15.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P16.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P17.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P18.png`,
                    `${BASE_URL}Mangas/Kaguya-sama/E161/P19.png`
                ] 
            },
        ]
    }
];
