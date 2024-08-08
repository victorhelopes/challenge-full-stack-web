<template>
  <Section title="Atualização de aluno">
    <v-form v-model="valid">
      <v-row>
          <v-col
            cols="12"
            md="6"
          >
          <v-text-field
              v-model="studentData.ra"
              label="RA"
              :rules="[requiredField]"
              disabled
            />
            
          </v-col>
            <v-col
            cols="12"
            md="6"
          >
          <v-text-field
              v-model="studentData.name"
              :rules="[requiredField]"
              label="Nome"
              required
            />
            
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="studentData.cpf"
              :rules="[requiredField]"
              label="CPF"
              disabled
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
          <v-text-field
              v-model="studentData.email"
              label="E-mail"
              :rules="[requiredField, emailRules]"
              required
            />
          </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <v-btn
                variant="outlined"
                @click="goToHome"
                class="mr-4"
            >
                Cancelar
        </v-btn>
        <v-btn
            @click="submit"
            :disabled="!valid"
        >
            Confirmar
        </v-btn>
      </div>
    </v-form>
  </Section>

  <v-snackbar
    v-model="snackbarInfos.isOpen"
    :timeout="timeout"
    class="pa-0"
  >
      <v-alert
        :text="snackbarInfos.text"
        :title="snackbarInfos.title"
        :type="snackbarInfos.type"
      />
  </v-snackbar>
</template>

<script>
import { updateStudent } from '@/services/api/updateStudent';
import { TWO_SECONDS } from '@/utils/constants';
import { emailValidator } from '@/utils/emailValidator';
import { findStudentByRA } from '@/services/api/findStudentByRA.ts'

export default {
  data: () => ({
    timeout: TWO_SECONDS,
    valid: false,
    snackbarInfos: {
      isOpen: false,
      text: '',
      title: '',
      type: ""
    },
    studentData:{
        name: '',
        ra: '',
        email: '',
        cpf: '',
    },
    requiredField: value => {
      if(value) return true
      return 'Campo é obrigatório'
    },
    emailRules: value => {
      if (emailValidator(value)) return true
      return 'E-mail inválido.'
    }, 
  }),

  methods:{
    goToHome() {
      this.$router.push('/');
    },

    async submit(){
      const { ra } = this.$route.params
      const response = await updateStudent(ra, this.studentData);
      if(response.status === 200){
        this.snackbarInfos ={
            isOpen: true,
            text: 'Cadastro de aluno foi atualizado com sucesso',
            title: 'Atualização feita com sucesso',
            type: 'success'
        }
          return;
      }
      this.snackbarInfos ={
        isOpen: true,
        text: 'Atualização de cadastro de aluno falhou, verifique se todas as informações estão corretas',
        title: 'Atualização falhou',
        type: 'error'
      }
    },
  },

  async created(){
    const { ra } = this.$route.params
    const response = await findStudentByRA(ra)
    if(response.status === 200 && response.data !== null){
      this.studentData = response.data
    }else{
      this.snackbarInfos ={
          isOpen: true,
          text: 'Usuário não foi encontrado',
          title: 'Usuário não foi encontrado',
          type: 'error'
        }
    }
  }
}
</script>

<style>
    .v-snackbar__content{
        padding: 0 !important;
    }
</style>