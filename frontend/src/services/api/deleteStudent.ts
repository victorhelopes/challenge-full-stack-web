import { api } from "..";

export async function deleteStudent(ra: number){
    try{
        const response = await api.delete(`/delete/${ra}`)
        return response
    }catch(e){
        return e
    }
}