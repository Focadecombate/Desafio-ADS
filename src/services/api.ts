import { Cliente } from '../interfaces/Cliente';

export const ApiServices = {
    GetUser: async () => {
        const URL = "http://localhost:3004/users"
        const requestInfo = {
            method: 'Get',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        };
        const request = await fetch(URL, requestInfo);
        if (request.ok) {
            const response = await request.json() as Cliente[];
            return response;
        }
    }
} 