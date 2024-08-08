<template>
  <Section class="pa-5" title="Alunos">
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
            <button>
              [Excluir]
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
  </Section>
</template>

<script>
import { api } from '@/services';
import { getStudents } from '@/services/api/getStudents';

  export default {
    data () {
      return {
        students: [],
      }
    },

    async created(){
      const response = await getStudents()
        if(response.data){
          this.students = response.data
          return true
        }
    }
  }
</script>
