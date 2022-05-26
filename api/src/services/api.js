import axios from 'axios';
import Votant from '../models/Votant';

class Api {
    /**
     * Busca todos os registros na api e insere no banco caso não exista
     * @param {*} request 
     * @param {*} response
     * 
     * Retorna os dados salvos no banco de dados
     */
    async listAll(request, response) {
        const { offset = 0} = request.query;
        axios.get(`https://assembleia.api.pandora.com.br/eventos/7747/votante`, {
            headers: {
                'authorization': `Bearer 9dc19260-ff58-4cf2-a5f4-e2f297595fab`
            }
        })
        .then(async data => {
            if (data.data) {
                data.data.map(async item => {
                    const votant = await Votant.findOne({id: item.id});
                    if (!votant) {
                        await Votant.create(item);
                    }
                })
            }

            const allVotants = await Votant.paginate({}, {offset: offset});

            return response.status(200).json(allVotants);
        })
        .catch(error => {
            return response.status(500).json({error});
        });
    }

    /**
     * Busca o registro pelo id no banco, sem a necessidade de consultar a api novamente
     * @param {*} request 
     * @param {*} response 
     */
    async findOneVotant(request, response) {
        const { id } = request.params;
        await Votant.findOne({ 'id': id })
        .then(data => {
            if (!data) {
                return response.status(404).json({ message: "Votante não econtrado" });
            }
            return response.status(200).json(data);
        })
        .catch(error => {
            return response.status(500).json({error});
        })
    }
}

export default new Api;