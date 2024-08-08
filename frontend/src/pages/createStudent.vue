<template>
  <Section title='Cadastro de aluno'>
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
              required
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
              :rules="[requiredField, cpfRules]"
              label="CPF"
              required
              :counter="11"
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
    >
        <v-alert
          :text="snackbarInfos.text"
          :title="snackbarInfos.title"
          :type="snackbarInfos.type"
        />
    </v-snackbar>
  </template>

<script>
import { createStudent } from '@/services/api/createStudent';
import { TWO_SECONDS } from '@/utils/constants';
import { cpfValidator } from '@/utils/cpfValidator';

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
      if (/.+@.+\..+/.test(value)) return true
      return 'E-mail inválido.'
    },
    cpfRules: value => {
      if (cpfValidator(value) && value.length === 11) return true
      return 'CPF inválido.'
    } 
  }),

  methods:{
    goToHome() {
      this.$router.push('/');
    },

    async submit(){
      const response = await createStudent(this.studentData)
      if(response.status === 200){
        this.snackbarInfos ={
          isOpen: true,
          text: 'Novo cadastro de aluno foi salvo com sucesso',
          title: 'Cadastro realizado com sucesso',
          type: 'success'
        }
        this.studentData = {
            name: '',
            ra: '',
            email: '',
            cpf: '',
        }
        return ;
      }
    
      this.snackbarInfos ={
        isOpen: true,
        text: 'Novo cadastro de aluno falhou, verifique se todas as informações estão corretas',
        title: 'Cadastro falhou',
        type: 'error'
      }
    }
  }
}
</script>

<style>
    .v-snackbar__content{
        padding: 0 0 !important;
    }
</style>