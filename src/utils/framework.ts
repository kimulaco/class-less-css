export type FrameworkData = {
  id: string
  name: string
  cdnUrl: {
    default: string
  }
}

export const FRAMEWORKS: {
  [id: FrameworkData['id']]: FrameworkData
} = {
  simplecss: {
    id: 'simplecss',
    name: 'Simple.css',
    cdnUrl: {
      default: 'https://cdn.simplecss.org/simple.min.css',
    },
  },
  mvpcss: {
    id: 'mvpcss',
    name: 'MVP.css',
    cdnUrl: {
      default: 'https://unpkg.com/mvp.css',
    },
  },
  watercss: {
    id: 'watercss',
    name: 'Water.css',
    cdnUrl: {
      default: 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css',
    },
  },
  sakuracss: {
    id: 'sakuracss',
    name: 'sakura',
    cdnUrl: {
      default: 'https://unpkg.com/sakura.css/css/sakura.css',
    },
  },
}
