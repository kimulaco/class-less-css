import { FrameworkType } from '../types/framework'

export const FRAMEWORKS: FrameworkType[] = [
  {
    id: 'simplecss',
    name: 'Simple.css',
    description:
      'A classless CSS framework that makes semantic HTML look good.',
    cdnUrl: {
      default: 'https://cdn.simplecss.org/simple.min.css',
    },
    officialUrl: 'https://simplecss.org/',
    githubRepository: 'kevquirk/simple.css',
    npmUrl: 'https://www.npmjs.com/package/simpledotcss',
  },
  {
    id: 'mvpcss',
    name: 'MVP.css',
    description: 'A minimalist stylesheet for HTML elements.',
    cdnUrl: {
      default: 'https://unpkg.com/mvp.css',
    },
    officialUrl: 'https://andybrewer.github.io/mvp/',
    githubRepository: 'andybrewer/mvp',
    npmUrl: 'https://www.npmjs.com/package/mvp.css',
  },
  {
    id: 'watercss',
    name: 'Water.css',
    description:
      'Water.css is a drop-in collection of CSS styles to make simple websites like this just a little bit nicer.',
    cdnUrl: {
      default: 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css',
    },
    officialUrl: 'https://watercss.kognise.dev/',
    githubRepository: 'kognise/water.css',
    npmUrl: 'https://www.npmjs.com/package/water.css',
  },
  {
    id: 'sakuracss',
    name: 'sakura',
    description: 'sakura: a minimal classless css framework / theme.',
    cdnUrl: {
      default: 'https://unpkg.com/sakura.css/css/sakura.css',
    },
    officialUrl: 'https://oxal.org/projects/sakura/',
    githubRepository: 'oxalorg/sakura',
  },
]
