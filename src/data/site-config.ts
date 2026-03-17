import avatar from '../assets/images/avatar.png';
import type { SiteConfig } from '../types';
import linkedinIcon from '../assets/icons/linkedin.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import githubIcon from '../assets/icons/github.svg';

const siteConfig: SiteConfig = {
    website: 'https://mluparu.github.io',
    avatar: {
        src: avatar,
        alt: 'Marian Luparu',
    },
    title: 'Marian Luparu',
    subtitle: 'Product Lead, Developer tools for C++, Rust, and Python @ Microsoft',
    description: 'Product leader building tools, platforms, and ecosystems for developers. Growing product organizations that prioritize customer success within deeply technical environments, in a culture of product building, systems thinking, experimentation and continuous learning.',
    image: {
        src: avatar,
        alt: 'Marian Luparu'
    },
    headerNavLinks: [
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: "Blog Feed",
            href: '/rss.xml'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/marianluparu',
            image: {
                src: linkedinIcon,
                alt: 'LinkedIn'
            }
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/mluparu',
            image: {
                src: twitterIcon,
                alt: 'X/Twitter'
            }
        },
        {
            text: 'GitHub',
            href: 'https://github.com/mluparu',
            image: {
                src: githubIcon,
                alt: 'GitHub'
            }
        }
    ],
    hero: {
        title: "Marian's Window Office",
        text: "Welcome! This is new. I'll share my thoughts and writing on this site, with a likely focus on developer tools, software engineering, and the evolution of AI. \n\nThis is a personal site, opinions are mine, are loosely held, and do not reflect the views of my employer.",
        actions: [
            {
                text: 'View Blog',
                href: '/blog'
            },
            {
                text: 'About Me',
                href: '/about'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
