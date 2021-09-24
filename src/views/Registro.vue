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
          <div class="container-xl row mt-4 text-center">
            <div class="col-sm-6 mb-3" align="center">
              <div class="card float-right" style="width: 18rem">
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
                      @click="docenteCompleto()"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3" align="center">
              <div class="card" style="width: 18rem">
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
                      @click="docenteApoyo()"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3" align="center">
              <div class="card" style="width: 18rem">
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
                      v-bind="(docente = 3)"
                      @click="docenteAsignatura()"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3" align="center">
              <div class="card" style="width: 18rem">
                <img
                  src="https://economipedia.com/wp-content/uploads/Equivalente-a-tiempo-completo-FTE-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">Personal académico</p>
                  <div class="d-grid">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                      v-bind="(docente = 3)"
                      @click="docenteAsignatura()"
                    >
                      <i class="fas fa-hand-pointer mr"></i>
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto mb-3 mt-3">
              <router-link
                class="btn btn-secondary mr"
                type="button"
                to="/"
              >
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

            <div class="col-sm-6">
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
  },
};
</script>

<style scoped>
</style>