<template>
    <v-row class="align-center">
        <v-text-field
        class="mr-3"
          v-model="searchText"
          label="Digite sua busca"
          hide-details
        />
        <v-btn
          @click="search"
        >
            Pesquisar
        </v-btn>
      </v-row>
</template>

<script>
export default {
    name: 'Search',
    data () {
      return {
        searchText: '',
      }
    },

    methods: {
        search() {
            this.$emit('searchFunction', this.searchText);
        }
    }

}
</script>