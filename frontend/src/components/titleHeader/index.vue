<template>
    <h1 class="mb-3">
        {{ title }}
    </h1>
  </template>
  
  <script>
  export default {
    name: 'TitleHeader',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>
  