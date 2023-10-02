import env from '#start/env'
import { ApiClient } from '@japa/api-client'

const api = new ApiClient(`http://${env.get('HOST')}:${env.get('PORT')}`)

export default api
