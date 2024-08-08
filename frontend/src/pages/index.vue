<template>
  <Section class="pa-5" title="Alunos">
    <v-row
      class="justify-space-between ma-0"
    >
      <v-col
        cols="12"
        md="8"
      >
        <Search
          @searchFunction="(value)=>{
            this.filterStudents(value)
          }"
        />
      </v-col>
    </v-row>

    <v-table>
      <thead fixed-header>
        <tr>
          <th class="text-left">
            Registro Acadêmico
          </th>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            CPF
          </th>
          <th class="text-left">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="student in students"
          :key="student.ra"
        >
          <td>{{ student.ra }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.cpf }}</td>
          <td>
            <button>
              [Editar]
            </button>
            <DialogModal
              buttonText="[Exlcuir]"
              buttonConfirm="Exlcuir"
              cardText="Deseja excluir aluno?"
              @confirmAction="deleteStudent(student.ra)"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
  </Section>
</template>

<script>
import { api } from '@/services';
import { deleteStudent } from '@/services/api/deleteStudent';
import { filterStudentsByName } from '@/services/api/filterStudentsByName';
import { getStudents } from '@/services/api/getStudents';

  export default {
    data () {
      return {
        students: [],
      }
    },

    methods:{
      async getAllStudents(){
        const response = await getStudents()
        if(response.data){
          this.students = response.data
          return true
        }
      },

      async filterStudents(name){
        if(name.length === 0){
          this.getAllStudents()
          return ;
        }
        const response = await filterStudentsByName(name)
        if(response.status === 200){
          this.students = response.data
        }
      },

      async deleteStudent(studentId){
        const response = await deleteStudent(studentId)  
        if(response.status === 200){
          this.getAllStudents();
          return;
        }
    }
    },

    async created(){
      this.getAllStudents()
    }
  }
</script>
