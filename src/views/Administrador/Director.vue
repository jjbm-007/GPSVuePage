<template>
  <h3 class="text-center">
    <i class="fas fa-user-tie mr"></i>
    Directores
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
        <th scope="col">División</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Araceli Jacobo Sanchez</td>
        <td>aracelijacobo@utez.edu.mx</td>
        <td>aracelijacobo@gmail.com</td>
        <td>366-145-159</td>
        <td>04</td>
        <td>DATIC</td>
        <td>
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
</template>

<script>
export default {
    mounted(){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },
    methods:{
        abrirHorario(){
            $("#modalHorario").modal("show");
        }
    }
}
</script>

<style>
</style>