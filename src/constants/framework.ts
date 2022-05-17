import { Framework } from '../types/framework'

export const FRAMEWORKS: {
  [id: Framework['id']]: Framework
} = {
  simplecss: {
    id: 'simplecss',
    name: 'Simple.css',
    cdnUrl: {
      default: 'https://cdn.simplecss.org/simple.min.css',
    },
    officialUrl: 'https://simplecss.org/',
    githubUrl: 'https://github.com/kevquirk/simple.css',
    npmUrl: 'https://www.npmjs.com/package/simpledotcss',
  },
  mvpcss: {
    id: 'mvpcss',
    name: 'MVP.css',
    cdnUrl: {
      default: 'https://unpkg.com/mvp.css',
    },
    officialUrl: 'https://andybrewer.github.io/mvp/',
    githubUrl: 'https://github.com/andybrewer/mvp',
    npmUrl: 'https://www.npmjs.com/package/mvp.css',
  },
  watercss: {
    id: 'watercss',
    name: 'Water.css',
    cdnUrl: {
      default: 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css',
    },
    officialUrl: 'https://watercss.kognise.dev/',
    githubUrl: 'https://github.com/kognise/water.css',
    npmUrl: 'https://www.npmjs.com/package/water.css',
  },
  sakuracss: {
    id: 'sakuracss',
    name: 'sakura',
    cdnUrl: {
      default: 'https://unpkg.com/sakura.css/css/sakura.css',
    },
    officialUrl: 'https://oxal.org/projects/sakura/',
    githubUrl: 'https://github.com/oxalorg/sakura',
  },
}
