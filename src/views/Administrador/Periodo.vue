<template>
  <div class="text-center">
    <img
      src="@/assets/logo-utez.png"
      class="text-center"
      width="300"
      alt="UTEZ"
    />
  </div>

  <h3 class="text-center mt-4">
    <i class="fas fa-external-link-square-alt mr"></i>
    Periodo escolar
  </h3>

  <div class="row">
    <div class="col-sm-6">
      <div class="mb-2">
        <label for="mes" class="form-label"><i class="far fa-calendar mr"></i>Mes</label>
        <input type="text" class="form-control" name="mes" disabled />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="mb-2">
        <label for="anio" class="form-label"><i class="fas fa-hourglass-half mr"></i>Año</label>
        <input type="text" class="form-control" name="anio" disabled />
      </div>
    </div>
  </div>

  <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Registrar nuevo periodo escolar
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="mes" class="form-label"><i class="far fa-calendar mr"></i>Mes</label>
                <input type="text" class="form-control" name="mes" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-2">
                <label for="anio" class="form-label"><i class="fas fa-hourglass-half mr"></i>Año</label>
                <input type="text" class="form-control" name="anio" />
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button class="btn btn-primary" type="button"><i class="fas fa-redo mr"></i>Cambiar periodo</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>