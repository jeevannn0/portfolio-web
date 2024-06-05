import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    projects: [
    {
        id: getId(),
        name: 'Nike Thrifts',
        url: 'https://nike-thrifts.vercel.app/',
        repo: 'https://github.com/jeevannn0/Nike_Thrifts',
        img: '/nike.jpg',
        year: 2023,
        tags: ['React', 'Redux', 'Tailwind'],
    },
    {
        id: getId(),
        name: 'Krypt',
        url: 'https://crypto-giphy-exchange.vercel.app/',
        repo: 'https://github.com/jeevannn0/F1',
        img: '/krypt.jpg',
        year: 2023,
        tags: ['Blockchain', 'React'],
    },
    {
        id: getId(),
        name: 'F1 - Lewis Hamilton',
        url: 'https://f1-sigma.vercel.app/',
        repo: 'https://github.com/jeevannn0/F1',
        img: '/f1.jpg',
        year: 2024,
        tags: ['React', 'Threejs'],
    },
    {
        id: getId(),
        name: 'Portfolio',
        url: 'https://portfolio-2ip.pages.dev/',
        repo: 'https://github.com/jeevannn0/portfolio',
        img: '/portfolio.jpg',
        year: 2024,
        tags: ['Nextjs', 'Sass'],
    },
    {
        id: getId(),
        name: 'weather app',
        url: 'https://weather-kv.netlify.app/',
        repo: 'https://github.com/vatsalsinghkv/weather-app',
        img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
        year: 2022,
        tags: ['Html', 'sass', 'JS', 'jQuery'],
    },
    ],
};