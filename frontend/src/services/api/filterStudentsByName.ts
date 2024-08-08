import { api } from "..";

export async function filterStudentsByName(name: string){
    try{
        const students = await api.get(`/filterStudent/${name}`)
        return students
    }catch(e){
        return e
    }
}