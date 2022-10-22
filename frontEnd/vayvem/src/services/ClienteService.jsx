import axios from 'axios'

const CLIENTE_API_BASE_URL = "http://localhost:8080/api/clientes";

class ClienteService {

    getClientes(){
        return axios.get(CLIENTE_API_BASE_URL);
    }

}

export default new ClienteService()