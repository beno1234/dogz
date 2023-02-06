import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export const createSession = async (email, password) => {
    return await api.post('/login', { email, password })
}

export const getUser = async () => {
    return await api.get("/list-users")
}


/* export const CreateSessionTutor = async (nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact) => {
    return await api.post('/tutor', { nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact })
} */

export const getTutorEx = async (nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact) => {
    return await api.get('/tutor', { nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact })
}

export const getTutor = async (tutor_id) => {
    return await api.get(`/tutor/:${tutor_id}`)
}


export const CreateTutorPets = async (values) => {
    return await api.post('/tutor', values)
}

export const CreateService = async (values) => {
    return await api.post('/planos', values)
}

export const ListService = async (values) => {
    return await api.get('/planos', values)
}


/* export const CreateSessionPets = async (nomePets, apelido, raca, cor, nascimento, id_tutor) => {
    return await api.post('/pets', { nomePets, apelido, raca, cor, nascimento, id_tutor })
} */