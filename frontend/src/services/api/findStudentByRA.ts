import { api } from "..";

export async function findStudentByRA(ra: number){
    try{
        const response = await api.get(`/findStudent/${ra}`)
        return response
    }catch(e){
        return e
    }
}