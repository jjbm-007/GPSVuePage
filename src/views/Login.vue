<template>
  <Navbar />
  <div class="container w-75 bg-primary mt-5 rounded shadow">
    <div class="row align-items-stretch">
      <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
      </div>
      <div class="col bg-white p-5 rounded-end" >
        <div class="text-center">
          <img src="@/assets/logo-utez.png" class="text-center" width="200" alt="UTEZ">
        </div>
        <h5 class="fw-bold text-center py-3">Bienvenido</h5>
        <form action="#">
          <div class="mb-4">
            <label for="email" class="form-label"><i class="fas fa-envelope mr"></i>Correo electrónico</label>
            <input type="email" class="form-control" name="email" placeholder="Ingresa tu correo institucional" />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label"><i class="fas fa-key mr"></i>Contraseña</label>
            <input type="password" class="form-control" name="password" placeholder="Ingresa tu contraseña" />
          </div>
          <div class="d-grid">
            <router-link class="btn btn-primary" to="docente-director">
              <i class="fas fa-sign-in-alt mr"></i>
              Iniciar sesión
            </router-link>
          </div>
          <div class="my-3 text-center">
            <span>¿No tienes cuenta? <router-link to="registro">Regístrate</router-link></span
            ><br />
            <span><a href="#">Recuperar contraseña</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped >
body {
  background: #ffe259;
  background: linear-gradient(to right, rgb(235, 235, 235), #b9b9b9);
}

.bg {
  background-image: url("https://conurbados.com/noticias/wp-content/uploads/2021/06/UTEZ.jpg");
  background-position: center center;
}
</style>
