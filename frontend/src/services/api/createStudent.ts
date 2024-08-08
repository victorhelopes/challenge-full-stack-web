import { api } from "..";

interface CreateStudentProps{
    name: string
    ra: string,
    email: string,
    cpf: string,
}

export async function createStudent(studentProps: CreateStudentProps){
    try{
        const response = await api.post(`create`, studentProps)
        return response
    }catch(e){
        return e
    }
}