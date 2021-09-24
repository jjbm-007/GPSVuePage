<template>
  <h1><i class="fas fa-pencil-alt mr"></i>Registro</h1>
  <form action="#">
    <div class="row mt-5">
    <div class="col-sm-6">
      <div class="mb-2">
        <label for="divisionName" class="form-label">Carrera</label>
        <input type="text" name="divisionName" class="form-control" />
      </div>
    </div>
  </div>

  <div class="mt-4 text-center">
    <router-link class="btn btn-danger mr" to="carreras-administrador">
      <i class="fas fa-times mr"></i>
      Cancelar
    </router-link>
    <button
      class="btn btn-primary"
      type="submit"
    >
      <i class="fas fa-pencil-alt mr"></i>
      Registrar
    </button>
  </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>