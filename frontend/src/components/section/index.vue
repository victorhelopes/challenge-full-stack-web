<template>
    <section class="elevation-10 pa-4">
      <TitleHeader :title="title" />
      <div class="content">
        <slot></slot>
      </div>
    </section>
  </template>
  
  <script>
  import TitleHeader from '../titleHeader';
  
  export default {
    name: 'SectionComponent',
    components: {
      TitleHeader
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>