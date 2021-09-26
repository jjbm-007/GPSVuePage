<template>
  <h3 class="text-center">
    <i class="fas fa-chalkboard-teacher mr"></i>
    Docentes
  </h3>
  <!--
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button
      data-bs-toggle="modal"
      data-bs-target="#modalRegistro"
      class="btn btn-primary"
      type="button"
      ><i class="fas fa-pencil-alt mr"></i>Registrar Docente</button
    >
  </div>
  -->
  <table class="table table-hover text-center mt-4">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Docente</th>
        <th scope="col">Correo Institucional</th>
        <th scope="col">Correo Personal</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Extensión</th>
        <th scope="col">Tipo</th>
        <th scope="col">División</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Reynel Flores Brto</td>
        <td>reynelflores@utez.edu.mx</td>
        <td>reynelflores@gmail.com</td>
        <td>366-145-159</td>
        <td>04</td>
        <td>Tiempo completo</td>
        <td>DATIC</td>
        <td>
          <button
            @click="abrirHorario()"
            id="verHorario"
            class="btn btn-outline-info btn-sm mr"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Ver horario"
          >
            <i class="fas fa-calendar-week"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Eliminar"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal Horario -->
  <div
    class="modal fade"
    id="modalHorario"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="fas fa-calendar-week mr"></i>Horario
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">Hora</th>
                <th scope="col">Lunes</th>
                <th scope="col">Martes</th>
                <th scope="col">Miercoles</th>
                <th scope="col">Jueves</th>
                <th scope="col">Viernes</th>
                <th scope="col">Sabado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">13:00</th>
                <td>Base de datos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
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
    abrirHorario() {
      $("#modalHorario").modal("show");
    },
  },
};
</script>

<style>
</style>