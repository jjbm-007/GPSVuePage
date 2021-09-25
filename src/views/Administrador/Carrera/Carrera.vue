<template>
  <h3 class="text-center"><i class="fas fa-university mr"></i>Carreras</h3>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button
      data-bs-toggle="modal"
      data-bs-target="#modalRegistro"
      class="btn btn-primary"
      type="button"
    >
      <i class="fas fa-pencil-alt mr"></i>Registrar carrera
    </button>
  </div>
  <table class="table table-hover text-center mt-4">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Carrera</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Carrera 1</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalModificar"
            class="btn btn-outline-warning btn-sm mr"
            ><i class="fas fa-edit"></i
          ></button>
          <button type="button" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Carrera 2</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalModificar"
            class="btn btn-outline-warning btn-sm mr"
            ><i class="fas fa-edit"></i
          ></button>
          <button type="button" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Carrera 3</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalModificar"
            class="btn btn-outline-warning btn-sm mr"
            ><i class="fas fa-edit"></i
          ></button>
          <button type="button" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal Registro -->
  <div
    class="modal fade"
    id="modalRegistro"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-pencil-alt mr"></i>Registrar carrera</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label for="careerName" class="form-label"><i class="fas fa-university mr"></i>Carrera</label>
            <input type="text" id="careerName" class="form-control" />
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
          <button type="button" class="btn btn-primary"><i class="fas fa-pencil-alt mr"></i>Registrar</button>
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
          <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-edit mr"></i>Modificar carrera</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label for="careerName" class="form-label"><i class="fas fa-university mr"></i>Carrera</label>
            <input type="text" id="careerName" class="form-control" />
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
          <button type="button" class="btn btn-primary"><i class="fas fa-edit mr"></i>Modificar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>