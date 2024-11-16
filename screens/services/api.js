import axios from 'axios';

// Configuração da instância do Axios
const api = axios.create({
    baseURL: 'http://10.0.0.165:3000', // Substitua pelo endereço correto da sua API
});

// Função para buscar registros de glicose
export const getUsuarios = async () => {
    try {
        const response = await api.get('/Usuarios');
        return response.data; // Retorna os dados obtidos
    } catch (error) {
        console.error('Erro ao buscar Usuario:', error);
        throw error; // Propaga o erro para ser tratado pelo chamador
    }
};

// Função para buscar registros de glicose
export const getPeriodo = async () => {
    try {
        const response = await api.get('/Periodo');
        return response.data; // Retorna os dados obtidos
    } catch (error) {
        console.error('Erro ao buscar Periodos:', error);
        throw error; // Propaga o erro para ser tratado pelo chamador
    }
};

// Função para buscar registros de glicose
export const getRegistroGlicose = async () => {
    try {
        const response = await api.get('/RegistroGlicose');
        return response.data; // Retorna os dados obtidos
    } catch (error) {
        console.error('Erro ao buscar registros de glicose:', error);
        throw error; // Propaga o erro para ser tratado pelo chamador
    }
};

// Função para criar um novo registro de glicose (exemplo de POST)
export const createRegistroGlicose = async (data) => {
    try {
        const response = await api.post('/RegistrarGlicose', data);
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao criar registro de glicose:', error);
        throw error;
    }
};

// Função para excluir um registro de glicose pelo ID
export const deleteRegistroGlicose = async (id) => {
    try {
        const response = await api.delete(`/ExcluirRegistroGlicose/${id}`);
        return response.data; // Retorna os dados da resposta, incluindo a confirmação de exclusão
    } catch (error) {
        console.error('Erro ao excluir registro de glicose:', error);
        throw error; // Propaga o erro para ser tratado pelo chamador
    }
};

// Função para editar um registro de glicose pelo ID
export const editRegistroGlicose = async (id, data) => {
    try {
        const response = await api.put(`/EditarRegistroGlicose/${id}`, data);
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao editar registro de glicose:', error);
        throw error; // Propaga o erro para ser tratado pelo chamador
    }
};

export default api;
