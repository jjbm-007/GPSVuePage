<template>
  <h3 class="text-center">Carreras</h3>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <router-link
      to="crear-division-academica-administrador"
      class="btn btn-primary"
      type="button"
      ><i class="fas fa-pencil-alt mr"></i>Registrar carrera</router-link
    >
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
          <router-link
            to="crear-carrera-administrador"
            class="btn btn-outline-warning btn-sm mr"
            ><i class="fas fa-edit"></i
          ></router-link>
          <button type="button" 
            class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Carrera 2</td>
        <td>
          <router-link
            to="crear-carrera-administrador"
            class="btn btn-outline-warning btn-sm mr"
            ><i class="fas fa-edit"></i
          ></router-link>
          <button type="button" 
            class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Carrera 3</td>
        <td>
          <router-link
            to="crear-carrera-administrador"
            class="btn btn-outline-warning btn-sm mr"
            ><i class="fas fa-edit"></i
          ></router-link>
          <button type="button" 
            class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
</script>

<style>
</style>