<template>
  <div>
    <Navbar/>
    <router-view />
    <VScrolltop/>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './Navbar/Navbar.vue'
import Footer from './Footer/Footer.vue'
import { RouterView } from 'vue-router'
import VScrolltop from '../v-scrolltop/index.vue'

</script>