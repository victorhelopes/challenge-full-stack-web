import { api } from "..";

interface UpdateStudentProps{
    name: string
    email: string,
}

export async function updateStudent(ra: number, studentProps: UpdateStudentProps){
    try{
        const response = await api.put(`update/${ra}`, studentProps)
        return response
    }catch(e){
        return e
    }
}