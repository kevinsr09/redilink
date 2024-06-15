export let apiUrl: string

const env = process.env.NODE_ENV

  switch (env) {
    case 'development':
      apiUrl = 'http://localhost:3001'
      break
    case 'production':
      apiUrl = ''
      break
    default:
      throw new Error('environment is not defined')
  }
