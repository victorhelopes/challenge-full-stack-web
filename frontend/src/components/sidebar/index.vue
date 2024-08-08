<template>
  <div class="menu elevation-4" :class="{ open: isOpen }">
    <button @click="openSidebar" class="open-button">
      ☰
    </button>
    <nav v-if="isOpen" class="elevation-10">
      <ul>
        <li v-for="item in menuItems" :key="item.text">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',

    data() {
      return {
        isOpen: false,
        menuItems: [
          { text: 'Alunos', link: '/' },
        ]
      };
    },
    methods: {
      openSidebar() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .open-button {
    padding: 20px;
    border: none;
    cursor: pointer;
    background-color: white;
  }
   

  .menu {
    width: 100%;
  }
  
  nav {
    position: absolute;
    background-color: white;
  }
  
  nav ul li {
    padding: 8px;
  }
  
  nav ul li a {
    text-decoration: none;
    display: block;
  }
  </style>