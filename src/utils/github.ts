import axios from 'axios'

const { GITHUB_USER_NAME, GITHUB_API_TOKEN } = process.env

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})

githubApi.interceptors.request.use((config) => {
  config.auth = {
    username: GITHUB_USER_NAME || '',
    password: GITHUB_API_TOKEN || '',
  }
  return config
})
