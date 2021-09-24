<template>
  <div class="container mt-5">
    <div
      id="carouselExampleControls"
      class="carousel slide text-center mt-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000000000">
          <h3 class="text-center">Seleccione el tipo de docente que es</h3>
          <div class="row mt-5">
            <div class="col-sm-4">
              <div class="card m-3" style="width: 18rem">
                <img
                  src="https://economipedia.com/wp-content/uploads/Equivalente-a-tiempo-completo-FTE-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Docente de tiempo completo</p>
                  <div class="d-grid">
                    <button
                      id="docente1"
                      type="button"
                      class="btn btn-primary"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                      :value="1"
                      @click="tipoDocente(value)"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card m-3" style="width: 18rem">
                <img
                  src="https://economipedia.com/wp-content/uploads/Equivalente-a-tiempo-completo-FTE-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Docente de apoyo</p>
                  <div class="d-grid">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                      :value="2"
                      @click="tipoDocente()"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card m-3" style="width: 18rem">
                <img
                  src="https://economipedia.com/wp-content/uploads/Equivalente-a-tiempo-completo-FTE-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Docente de asignatura</p>
                  <div class="d-grid">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                      v-bind="docente = 3"
                      @click="tipoDocente()"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <button
            class="btn btn-primary mr"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <i class="fas fa-backward"></i>
            Anterior
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <i class="fas fa-share"></i>
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            docente: 0
        }
    },
    methods:{
        tipoDocente(value){

            alert("Docente: "+ document.getElementById("docente1"))
        }
    }
};
</script>

<style>
</style>