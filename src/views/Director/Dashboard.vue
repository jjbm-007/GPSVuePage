<template>
  <Navbar />
  <div class="container mt-4 mb-4">
      <router-view/>
  </div>
  <Footer />

</template>

<script>
import Navbar from '@/components/Navbar/NavbarDirector'
import Footer from '@/components/Footer'
export default {
    components:{
        Navbar, Footer
    }
}
</script>