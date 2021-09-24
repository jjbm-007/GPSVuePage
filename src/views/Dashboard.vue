<template>
  <Navbar />
  <div class="container">
      <div class="row mt-3">
          <div class="col-sm-4">
              <Cards textTitulo="titulo"  url = "https://images.ecestaticos.com/_659iCiPGN8YC2EkgRkZFv8EnNQ=/0x0:991x496/992x497/filters:fill(white):format(JPG)/f.elconfidencial.com/original/271/f5c/378/271f5c3780b737de98ba960affd2ba3b.jpg"/>
          </div>
          <div class="col-sm-4">
              <Cards url = "https://cdnmundo1.img.sputniknews.com/img/07e5/01/0d/1094101060_0:160:3073:1888_1920x0_80_0_0_e2fb624202f324e5f68888cb824da65b.jpg"/>
          </div>
          <div class="col-sm-4">
              <Cards url = "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/las-mujeres-trabajadoras-presentan-mas-problemas-de-salud-mental-que-los-hombres/5799411-5-esl-MX/Las-mujeres-trabajadoras-presentan-mas-problemas-de-salud-mental-que-los-hombres.jpg" />
          </div>
          <div class="col-sm-4">
              <Cards/>
          </div>
          <div class="col-sm-4">
              <Cards/>
          </div>
          <div class="col-sm-4">
              <Cards/>
          </div>
          <div class="col-sm-4">
              <Cards url="" />
          </div>
          <div class="col-sm-4">
              <Cards/>
          </div><div class="col-sm-4">
              <Cards/>
          </div><div class="col-sm-4">
              <Cards/>
          </div><div class="col-sm-4">
              <Cards/>
          </div><div class="col-sm-4">
              <Cards/>
          </div>
      </div>
  </div>
  <Footer />

</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
export default {
    components:{
        Navbar, Footer, Cards
    }
}
</script>

<style>

</style>