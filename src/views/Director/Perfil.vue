<template>
  <h3 class="text-center mt-5">
    <i class="fas fa-user-tie mr"></i>
    Mi perfil
  </h3>

  <div class="mt-5">
      <div class="row">
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="name" class="form-label">
                      <i class="fas fa-user mr"></i>Nombre(s)</label>
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="lastName" class="form-label">
                      <i class="fas fa-user mr"></i>Apellidos</label>
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="emailInstitucional" class="form-label">
                      <i class="fas fa-envelope mr"></i>Correo institucional</label>
                  <input type="email" class="form-control">
              </div>
          </div>
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="emailPersonal" class="form-label">
                      <i class="far fa-envelope mr"></i>Correo personal</label>
                  <input type="email" class="form-control">
              </div>
          </div>
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="phoneNumber" class="form-label">
                      <i class="fas fa-phone mr"></i>Teléfono</label>
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="extension" class="form-label">
                      <i class="fas fa-voicemail mr"></i>Extensión</label>
                  <input type="text" class="form-control">
              </div>
          </div>
          <div class="col-sm-6">
              <div class="mb-2">
                  <label for="extension" class="form-label">
                      <i class="fas fa-calendar-week mr"></i>Horario</label>
                  <input type="file" class="form-control">
              </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button class="btn btn-primary" type="button">
                <i class="fas fa-edit mr"></i>
                Modificar información
            </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>