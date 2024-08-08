<template>
    <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <button
                  v-bind="activatorProps"
                >
                  {{buttonText}}
                </button>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Excluir aluno">
                  <v-card-text>
                    {{ cardText }}
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Cancelar"
                      @click="isActive.value = false"
                    ></v-btn>
                    <v-btn
                      :text="buttonConfirm"
                      @click="()=>{
                        confirm()
                        isActive.value = false
                      }"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
</template>


<script>
export default {
    name: 'DialogModal',

    props: {
      buttonText: {
        type: String,
        required: true
      },
      buttonConfirm: {
        type: String,
        required: true
      },
      cardText: {
        type: String,
        required: true
      },
    },

    methods: {
      confirm(){
        this.$emit('confirmAction');
      }
    }
}
</script>