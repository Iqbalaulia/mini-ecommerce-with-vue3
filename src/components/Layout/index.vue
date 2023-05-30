<template>
  <div>
    <Navbar/>
    <router-view />
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './Navbar/Navbar.vue'
import Footer from './Footer/Footer.vue'
import { RouterView } from 'vue-router'

</script>