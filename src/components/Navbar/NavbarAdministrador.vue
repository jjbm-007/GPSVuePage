<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SGPS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>asd
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Administrador
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link
                  to="division-academica-administrador"
                  class="dropdown-item"
                  href="#"
                  ><i class="fas fa-building mr"></i>Asignaturas</router-link
                >
              </li>
              <li><a class="dropdown-item" href="#">Carreras</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Directores</a></li>
              <li><a class="dropdown-item" href="#">Docentes</a></li>
            </ul>
          </li>
          <!--
          <li class="nav-item">
            <a class="nav-link" href="#">Mi perfil</a>
          </li>
          -->
        </ul>
        <div class="navbar-text">
          <router-link to="/" type="button" class="btn btn-outline-secondary">
            <i class="fas fa-sign-out-alt"></i>
            Cerrar sesión
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
