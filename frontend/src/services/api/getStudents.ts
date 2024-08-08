import { api } from "..";

export async function getStudents(){
    try{
        const students = await api.get('/findAll')
        return students
    }catch(e){
        return e
    }
}