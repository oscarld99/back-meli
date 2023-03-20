import { Loaders } from "interfaces/loaders.interface"
import ServerApplication from "./server"


const loaders = (): Loaders => {
    
    console.log('Loading server configuration...')

    const loaders = {
        server: undefined
    } as unknown as Loaders

    try {
        loaders.server = ServerApplication()
        console.log('Server loaded Successfully')
    } catch (error) {
        console.log('Error loading server')
        throw error
    }

    return loaders
}

export default loaders