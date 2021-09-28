<template>
  <h3 class="text-center">
    <i class="fas fa-ticket-alt mr"></i>Pases de salida
  </h3>

  <table class="table table-hover text-center mt-4">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
        <th scope="col">Fecha de salida</th>
        <th scope="col">Hora de salida</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Reynel Flores Brito</td>
        <td>Tiempo completo</td>
        <td>26 de Septiembre</td>
        <td>13:00 hrs - 16:00 hrs</td>
        <td>
          <button
            @click="info()"
            class="btn btn-outline-info btn-sm mr text-center ac"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Información"
          >
            <i class="fas fa-info"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm mr ac"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Rechazar"
          >
            <i class="fas fa-times"></i>
          </button>
          <button
            class="btn btn-outline-success btn-sm ac"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Aceptar"
          >
            <i class="fas fa-check"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div
    class="modal fade"
    id="modalInformacion"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="fas fa-info mr"></i>Información
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <h5 class="text-center mb-3">Información del docente</h5>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="nombre" class="form-label">
                  <i class="fas fa-user mr"></i>
                  Nombre(s)
                </label>
                <input
                  type="text"
                  name="nombre"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="apellido" class="form-label">
                  <i class="fas fa-user mr"></i>
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="correoInstitucional" class="form-label">
                  <i class="fas fa-envelope mr"></i>
                  Correo institucional
                </label>
                <input
                  type="text"
                  name="correoInstitucional"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="correoPersonal" class="form-label">
                  <i class="far fa-envelope mr"></i>
                  Correo personal
                </label>
                <input
                  type="text"
                  name="correoPersonal"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="telefono" class="form-label">
                  <i class="fas fa-phone mr"></i>
                  Telefono
                </label>
                <input
                  type="text"
                  name="telefono"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="extension" class="form-label">
                  <i class="fas fa-voicemail mr"></i>
                  Extensión
                </label>
                <input
                  type="text"
                  name="extension"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="tipo" class="form-label">
                  <i class="fas fa-users mr"></i>
                  Tipo
                </label>
                <input type="text" name="tipo" class="form-control" disabled />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="horario" class="form-label">
                  <i class="fas fa-calendar-week mr"></i>
                  Horario
                </label>
                <div class="d-grid">
                  <input
                    type="button"
                    name="horario"
                    class="btn btn-secondary"
                    value="Ver horario"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="text-center mt-3 mb-3">Información del pase de salida</h5>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="fechaSalida" class="form-label">
                  <i class="fas fa-calendar-day mr"></i>
                  Fecha de salida
                </label>
                <input
                  type="text"
                  name="fechaSalida"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="horaSalida" class="form-label">
                  <i class="far fa-clock mr"></i>
                  Hora de salida
                </label>
                <input
                  type="text"
                  name="hora salida"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="mb-2">
                <label for="motivo" class="form-label">
                  <i class="fas fa-bars mr"></i>
                  Motivos
                </label>
                <textarea name="motivo" class="form-control" cols="30" rows="3" disabled></textarea>
              </div>
            </div>
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
          <button type="button" class="btn btn-danger">
            <i class="fas fa-times mr"></i>
            Rechazar
          </button>
          <button type="button" class="btn btn-success">
            <i class="fas fa-check mr"></i>
            Aceptar
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
    info() {
      $("#modalInformacion").modal("show");
    },
  },
};
</script>

<style>
</style>