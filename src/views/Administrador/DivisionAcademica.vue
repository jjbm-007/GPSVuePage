<template>
  <h3 class="text-center">
    <i class="fas fa-building mr"></i>
    División académica
  </h3>

  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button
      @click="registrar()"
      class="btn btn-primary"
      type="button"
    >
      <i class="fas fa-pencil-alt mr"></i>Registrar División Academica
    </button>
  </div>

  <table class="table table-hover text-center mt-4">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">División académica</th>
        <th scope="col">Siglas</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>
          División Académica de Tecnologías de la Información y Comunicación
        </td>
        <td>DATIC</td>
        <td>
          <button
            @click="modificar()"
            class="btn btn-outline-warning btn-sm mr"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom" 
            title="Modificar"
          >
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" 
            class="btn btn-outline-danger btn-sm"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom" 
            title="Eliminar">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      
    </tbody>
  </table>

  <!-- Modal Registro -->
  <div
    class="modal fade"
    id="modalRegistrar"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="fas fa-pencil-alt mr"></i>Registrar división
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label for="divisionName" class="form-label">
              <i class="fas fa-building mr"></i>
              División académica
            </label>
            <input type="text" name="divisionName" class="form-control" />
          </div>
          <div class="mb-2">
            <label for="siglasName" class="form-label">
              <i class="fas fa-ellipsis-h mr"></i>
              Siglas
            </label>
            <input type="text" name="siglasName" class="form-control" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            <i class="fas fa-times mr"></i>
            Cancelar
          </button>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-pencil-alt mr"></i>Registrar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Modificar -->
  <div
    class="modal fade"
    id="modalModificar"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="fas fa-edit mr"></i>Modificar división
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label for="divisionName" class="form-label">
              <i class="fas fa-building mr"></i>
              División académica
            </label>
            <input type="text" name="divisionName" class="form-control" />
          </div>
          <div class="mb-2">
            <label for="siglasName" class="form-label">
              <i class="fas fa-ellipsis-h mr"></i>
              Siglas
            </label>
            <input type="text" name="siglasName" class="form-control" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            <i class="fas fa-times mr"></i>
            Cancelar
          </button>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-edit mr"></i>Modificar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
  methods: {
    registrar() {
      $("#modalRegistrar").modal("show");
    },
    modificar() {
      $("#modalModificar").modal("show");
    },
  },
};
</script>

<style>
</style>