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
        <span class="navbar-toggler-icon"></span>
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
              <i class="fas fa-user-tie mr"></i>Director académico
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="justificantes-director" class="dropdown-item"
                  ><i class="fas fa-file-medical-alt mr"></i>Justificantes</router-link
                >
              </li>
              <li>
                <router-link to="pases-director" class="dropdown-item"
                  ><i class="fas fa-ticket-alt mr"></i>Pases de salida</router-link
                >
              </li>
              <li>
                <router-link to="historial-director" class="dropdown-item"
                  ><i class="fas fa-book-open mr"></i>Historial</router-link
                >
              </li>
              <li>
                <router-link to="docente-director" class="dropdown-item"
                  ><i class="fas fa-chalkboard-teacher mr"></i>Mis colaboradores</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
               <li>
                <router-link to="perfil-director" class="dropdown-item"
                  ><i class="fas fa-user-tie mr"></i>Mi perfil</router-link
                >
              </li>
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
