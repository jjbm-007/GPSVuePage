<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4 box">
        <img :src="url" >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{textTitulo}}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        url:String,
        textTitulo:String
    }
};
</script>

<style scoped>
    .box{
        background: #CCC;
        overflow: hidden;
    }
    .box img{
        width: 100%;
        height: auto;
    }
    @supports(object-fit: cover){
    .box img{
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
}
</style>