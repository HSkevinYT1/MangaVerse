const mangas = [
    {
        id: 1,
        title: "Chainsaw-man", 
        cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        chapters: 512, 
        status: "Publicandose",
        genres: ["Shonen"],
        chapter_list: [
            { 
                id: 1, 
                title: "Capítulo 1", 
                imageUrls: [
                    'Mangas/Chainsaw-man/E1/P1.jpg',
                    'Mangas/Chainsaw-man/E1/P2.jpeg',
                    'Mangas/Chainsaw-man/E1/P3.jpeg',
                ] 
            },
            { 
                id: 2, 
                title: "Capítulo 2", 
                imageUrls: [
                    'images/dragon_ball/cap_002/01.jpg',
                    'images/dragon_ball/cap_002/02.jpg',
                    'images/dragon_ball/cap_002/03.jpg',
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
        cover: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        chapters: 234,
        status: "Terminado",
        genres: ["Acción", "Drama"],
        chapter_list: []
    },
    {
        id: 3,
        title: "Attack on Titan",
        cover: "linear-gradient(135deg, #a78bfa 0%, #4c1d95 100%)",
        chapters: 140,
        status: "Terminado",
        genres: ["Acción", "Militar", "Drama"],
        chapter_list: []
    },
    {
        id: 4,
        title: "One Piece",
        cover: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
        chapters: 1168,
        status: "Publicandose",
        genres: ["Aventura", "Shonen", "Fantasía"],
        chapter_list: []
    },
    {
        id: 5,
        title: "Jujutsu Kaisen",
        cover: "linear-gradient(135deg, #10b981 0%, #065f46 100%)",
        chapters: 278,
        status: "Terminado",
        genres: ["Sobrenatural", "Acción"],
        chapter_list: []
    }
];


let currentPage = 1;
let selectedManga = null;
let currentChapter = null;
let sortAscending = true;