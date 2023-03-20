import * as http from 'http'
import { apiName, port } from './config/index'
import loaders from './loaders/index';

const { server: app } = loaders();

app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server ${apiName} Listening on port: ${port}`)
}).on('error', (error) => console.error('Error in server', error))