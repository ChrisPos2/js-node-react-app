import { startServer } from './server'
import { config } from './config'

startServer(config.server)
console.log('Hello World!')
