<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Correo electrónico</label>
        <input
          v-model="login.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >Sus datos no serán compartidos con terceros</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          v-model="login.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button 
      @click.prevent= "loginUser"
      type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <pre>
  {{ login }}
</pre
    >
  </div>
</template>

<script>
import swal from 'sweetalert';    //Se importan librerias para generar mensajes de alerta
export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    //Aquí va la lógica del componente (funciones o métodos)
    async loginUser() {
      try {
      //  let response = await this.$http.post('api/usuario/login', this.login); //Función asincrona para hacer la petición axios al backend 
        let response = await this.$http.post('api/user/login', this.login); //Función asincrona para hacer la petición axios al backend
       //se le envian los datos del login (usuario y contraseña)
        //y él responde con info de autenticación
        console.log(response.data);   //Se muestran por consola los datos recibidos
        let miToken = response.data.tokenReturn;  //se guarda el token en una variable
        let usuario = response.data.user;   //se guarda el usuario en una variable

        localStorage.setItem('jwt', miToken);   //Se guardan las variables en almacenamiento local
        localStorage.setItem('usuario', JSON.stringify(usuario));   //al usuario toca pasarlo de JSON a string
          if(miToken)   //Si hay token
            {
              swal("Datos correctos!", "Acceso permitido", "success");
              this.$router.push('/Home');  //se envia a la pagina de inicio
            }
      } 
      catch {
            console.log('error no conectó')
            swal("Datos incorrectos", "Acceso denegado", "error");
      }
    }
  }
}
</script>