<template>
  <div class="container mt-5">
    <div
      id="carouselExampleControls"
      class="carousel slide mt-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active text-center"
          data-bs-interval="10000000000"
        >
          <h3 class="text-center">Seleccione el tipo de docente que es</h3>
          <div class="container-xl row mt-5 text-center">

            <div class="col-sm-6 mb-2" align="center">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://economipedia.com/wp-content/uploads/Equivalente-a-tiempo-completo-FTE-1.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 mt-4">
                    <div class="card-body">
                      <h5 class="card-title">Docente de tiempo completo</h5>
                      <div class="d-grid mt-5">
                        <button
                          id="docente1"
                          type="button"
                          class="btn btn-primary"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                          :value="1"
                          @click="docenteCompleto()"
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

            <div class="col-sm-6 mb-2" align="center">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://image.freepik.com/vector-gratis/profesor-apuntando-boligrafo-sosteniendo-libro-dibujo-educativo-dibujos-animados-lindo_107355-760.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 mt-4">
                    <div class="card-body">
                      <h5 class="card-title">Docente de apoyo</h5>
                      <div class="d-grid mt-5">
                        <button
                          id="docente1"
                          type="button"
                          class="btn btn-primary"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                          :value="1"
                          @click="docenteApoyo()"
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

            <div class="col-sm-6 mb-2" align="center">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/001/447/269/non_2x/online-education-male-teacher-and-ebooks-cartoon-vector.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 mt-4">
                    <div class="card-body">
                      <h5 class="card-title">Docente de asignatura</h5>
                      <div class="d-grid mt-5">
                        <button
                          id="docente1"
                          type="button"
                          class="btn btn-primary"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                          :value="1"
                          @click="docenteAsignatura()"
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

            <div class="col-sm-6 mb-2" align="center">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://www.wikihow.com/images/3/35/Draw-Realistic-People-Step-21-Version-2.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 mt-4">
                    <div class="card-body">
                      <h5 class="card-title">Personal académico</h5>
                      <div class="d-grid mt-5">
                        <button
                          id="docente1"
                          type="button"
                          class="btn btn-primary"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                          :value="1"
                          @click="personalAcademico()"
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

            <div class="d-grid gap-2 col-6 mx-auto mb-3 mt-3">
              <router-link class="btn btn-secondary mr" type="button" to="/">
                <i class="fas fa-arrow-left"></i>
                Regresar al inicio de sesión
              </router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="10000000000">
          <h1><i class="fas fa-pencil-alt mr"></i>Registro docente</h1>

          <div class="row mt-5">
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="firstName" class="form-label">Nombre(s)</label>
                <input type="text" name="firstName" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="lastName" class="form-label">Apellidos</label>
                <input type="text" name="lastName" class="form-control" />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="mb-2">
                <label for="institucionalEmail" class="form-label"
                  >Correo institucional</label
                >
                <input
                  type="email"
                  name="institucionalEmail"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="personalEmail" class="form-label"
                  >Correo personal</label
                >
                <input type="email" name="personalEmail" class="form-control" />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="mb-2">
                <label for="password1" class="form-label">Contraseña</label>
                <input type="password" name="password1" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="password2" class="form-label"
                  >Repita su contraseña</label
                >
                <input type="password" name="password2" class="form-control" />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="mb-2">
                <label for="phoneNumber" class="form-label">Teléfono</label>
                <input type="number" name="phoneNumber" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="extension" class="form-label">Extensión</label>
                <input type="number" name="extension" class="form-control" />
              </div>
            </div>

            <div class="col-sm-6" v-if="docente != 4">
              <div class="mb-2">
                <label for="division" class="form-label"
                  >División académica</label
                >
                <select class="form-select">
                  <option selected>Seleccione</option>
                  <option value="1">DATIC</option>
                  <option value="2">DACEA</option>
                  <option value="3">DAMI</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <button
              class="btn btn-secondary mr"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      docente: null,
    };
  },
  methods: {
    docenteCompleto() {
      this.docente = 1;
    },
    docenteApoyo() {
      this.docente = 2;
    },
    docenteAsignatura() {
      this.docente = 3;
    },
    personalAcademico(){
      this.docente = 4;
    }
  },
};
</script>

<style scoped>
  img{
    height: 169.33px;
    width: 100%;
  }

</style>