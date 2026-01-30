import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Fellows',
      href: getPermalink('/#fellows'),
    },
    {
      text: 'Funders',
      href: getPermalink('/#funders'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Research',
      links: [
        { text: 'Projects', href: '#projects' },
        { text: 'Publications', href: '#' },
        { text: 'Working Papers', href: '#' },
        { text: 'Data', href: '#' },
      ],
    },
    {
      title: 'Lab',
      links: [
        { text: 'About', href: '#' },
        { text: 'Fellows', href: '#fellows' },
        { text: 'Funders', href: '#funders' },
        { text: 'Contact', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'LUSEM', href: 'https://www.lusem.lu.se/' },
    { text: 'Lund University', href: 'https://www.lunduniversity.lu.se/' },
  ],
  socialLinks: [
    { ariaLabel: 'Lund University', icon: 'tabler:brand-github', href: 'https://github.com/patent-history-lab' },
  ],
  footNote: `
    © <a class="text-blue-600 underline dark:text-muted" href="https://www.lunduniversity.lu.se/">Lund University</a> · Department of Economic History · French Patent History Lab
  `,
};
