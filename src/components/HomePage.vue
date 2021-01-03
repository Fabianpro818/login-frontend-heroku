<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <form class="form-inline my-2 my-lg-0">
          <button 
          class="btn btn-outline-success my-2 my-sm-0" 
          type="button"
          @click= "cerrarSesion"
          >
            Salir
          </button>
        </form>
      </div>
    </nav>
    <div class="container">
        <p>
                {{ usuario.username }}
        </p>
        <p>
                {{ usuario.email }}
        </p>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';    //Se importan librerias para generar mensajes de alerta
export default {
  name: "HomePage",
  data() {
    return {
        usuario: {}
    };
  },
  methods: {
    darDatosUsuario()
        {
            let usuario = localStorage.getItem("usuario");  //Se leen los datos de usario desde el almacenamiento local
            let token = localStorage.getItem("jwt");        //Se lee el token desde el almacenamiento local
            console.log(JSON.parse(usuario));
            if(token)
                {
                    this.usuario = JSON.parse(usuario);
                }

        },
    cerrarSesion() {    //Función para cerrar sesión. Es llamada por el evento @click del boton del nav
        localStorage.removeItem("jwt"); //Elimina el token de usuario del almacenamiento local
      localStorage.removeItem("usario"); //Elimina el token de usuario del almacenamiento local
      swal("Has cerrado sesión");     //Se genera mensaje con sweetalert de cierre de sesión
      this.$router.push("/"); //Vuelve a la página de login
    },
  },
  created() {   //Momento en el que se crea la página web (antes de pintar la página)
    this.darDatosUsuario();     //Llamado a la función que trae los datos de usario
  },
};
</script>