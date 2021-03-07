import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {
  zonas:any;
  constructor() { }

  ngOnInit(): void {
    this.zonas = [
      {
        id: 'welcome',
        titulo:'Bienvienido a CarShare',
        captura:'assets/capturas/home.gif',
        subtitulo:'Pantalla de bienvenida',
        descripcion:`La pantalla <i>Bienvienido a CarShare</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            <b><a href="#login">Accede</a></b>
            <small>Accede a la página para entrar en la aplicación</small>
          </li>
          <li class="mt-2">
            <b><a href="#register">Registrarse</a></b>
            <small>Accede a la página para registrarse como nuevo usuario</small>
          </li>
          <li class="mt-2">
            <b><a href="#about">Quienes somos</a></b>
            <small>Accede a una página informativa sobre la aplicación</small>
          </li>
        <ul>`
      },
      {
        id: 'login',
        titulo:'Acceso a la aplicación',
        captura:'assets/capturas/login.gif',
        subtitulo:'Pantalla de acceso a la aplicación',
        descripcion:`La pantalla <i>Acceso a la aplicación</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Email del usuario
            <small>Se introduce la dirección de correo de usuario</small>
          </li>
          <li class="mt-2">
            Contraseña del usuario
            <small>Se introduce la contraseña del usuario</small>
          </li>
          <li class="mt-2">
            <b><a href="#main">Login</a></b>
            <small>Accede a la aplicación</small>
          </li>
          <li class="mt-2">
            <b><a href="#register">Regístrate</a></b>
            <small>Accede a la página para registrarse como nuevo usuario</small>
          </li>
          <li class="mt-2">
            <b><a href="#remember">Olvidé mi contraseña</a></b>
            <small>Accede a una página para recuperar la constraseña</small>
          </li>
        <ul>`,
      },
      {
        id: 'register',
        titulo:'Registro de un nuevo usuario',
        captura:'assets/capturas/register.gif',
        subtitulo:'Pantalla del formulario de registro',
        descripcion:`La pantalla <i>Registro de un nuevo usuario</i> consta de:<br>
        <ul class='list-unstyled'>
          <li>
            Nombre
            <small>Se introduce el nombre del usuario</small>
          </li>
          <li>
            Apellidos
            <small>Se introducen los apellidos del usuario</small>
          </li>
          <li>
            Email
            <small>Se introduce la dirección de correo electrónico</small>
          </li>
          <li>
            Contraseña
            <small>Se introduce la contraseña para el acceso del usuario</small>
          </li>
          <li class="mt-2">
            <b><a href="#register-mail">Registrar</a></b>
            <small>Registra al usuario en la aplicación y esta envía un <i>Confirmación de registro</i> para que el usuario confirme su dirección electrónica</small>
          </li>
          <li class="mt-2">
            <b><a href="#login">Iniciar sesión</a></b>
            <small>Accede a la página <i>Acceso a la aplicación</i></small>
          </li>
        <ul>`,
      },
      {
        id: 'register-mail',
        titulo:'Confirmación de registro',
        captura:'assets/capturas/mail-register.gif',
        subtitulo:'Pantalla del mensaje para confirmar el registro',
        descripcion:`Una vez el usuario se ha registrado debe acceder a su correo para validar su registro pulsando en el enlace  descrito como <i>Click aqui</i>`,
      },
      {
        id: 'remember',
        titulo:'He olvidado mi contraseña',
        captura:'assets/capturas/remember.gif',
        subtitulo:'Pantalla del formulario para recuperar contraseña',
        descripcion:`La pantalla <i>He olvidado mi contraseña</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Email del usuario
            <small>Se introduce la dirección de correo de usuario</small>
          </li>
          <li>
            <b>Recuperar contrseña</b>
            <small>Se envía un correo electronico a su dirección con una nueva clave generada</small>
          </li>
          <li class="mt-2">
            <b><a href="#login">Inicia sesión</a></b>
            <small>Accede a la página para acceder a la aplicación</small>
          </li>
          <li class="mt-2">
            <b><a href="#register">Registro<a></b>
            <small>Accede a la página para registrarse como nuevo usuario</small>
          </li>
        <ul>`,
      },
      {
        id: 'remember-mail',
        titulo:'Nueva contraseña',
        captura:'assets/capturas/remember-mail.gif',
        subtitulo:'Pantalla del mensaje para nueva contraseña',
        descripcion:`Mensaje enviado con la nueva contraseña para el usuario`,
      },
      {
        id: 'join',
        titulo:'Unirme a una rueda',
        captura:'assets/capturas/join.gif',
        subtitulo:'Pantalla para unirse a una rueda',
        descripcion:`La pantalla <i>Unirme a una rueda</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Nombre
            <small>Lista de ruedas disponibles a las que el usuario se puede unir</small>
          </li>
          <li>
            Datos de la rueda
            <small>
            <br>Descripción: Información sobre la rueda
            <br>Origen: Ciudad de salida de la rueda
            <br>Destino: Sitio de destino
          </small>
          </li>
          <li class="mt-2">
            <b>Horario de la rueda</b>
            <small>El usuario debe marcar las horas en las que viajaría tanto de ida como de vuelta</small>
          </li>
          <li class="mt-2">
            <b><a href="#main">Enviar</a></b>
            <small>Envía la selección de rueda y horas seleccionadas para unirse a una rueda</small>
          </li>
        <ul>`,
      },
      {
        id: 'menu',
        titulo:'Mi menú',
        captura:'assets/capturas/menu.gif',
        subtitulo:'Pantalla de opciones del menú',
        descripcion:`La pantalla <i>Mi menú</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Avatar y nombre del usuario
          </li>
          <li class="mt-2">
            <b>Editar perfil</b>
            <small>Abre la página <a href="#profile">Editar mi perfil</a></small>
          </li>
          <li class="mt-2">
            <b>Mi rueda</b>
            <small>Abre la página <a href="#main">Mi rueda</a></small>
          </li>
          <li class="mt-2">
            <b>Acerca de</b>
            <small>Abre la página <a href="#about">Acerca de</a></small>
          </li>
          <li class="mt-2">
            <b>Admin. Ruedas</b>
            <small>Abre la página <a href="#wheels">Gestionar ruedas</a></small><br>
            <small>(Esta es una opción solo para administradores)</small>
          </li>
          <li class="mt-2">
            <b>Admin. Usuarios</b>
            <small>Abre la página <a href="#users">Gestionar usuarios</a></small><br>
            <small>(Esta es una opción solo para administradores)</small>
          </li>
          <li class="mt-2">
            <b>Cerrar sesión</b>
            <small>Sale de la aplicación a <a href="#login">Acceder a la aplicación</a></small>
          </li>
        <ul>`,
      },
      {
        id: 'main',
        titulo:'Mi rueda',
        captura:'assets/capturas/main.gif',
        subtitulo:'Pantalla con la rueda del usuario',
        descripcion:`La pantalla <i>Mi rueda</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Nombre de la rueda
          </li>
          <li>
            Datos de la rueda
            <small>
              <br>Descripción: Información sobre la rueda
              <br>Origen: Ciudad de salida de la rueda
              <br>Destino: Sitio de destino
            </small>
          </li>
          <li class="mt-2">
            <b>Horario de la rueda</b>
            <small>Aquí se muestran los viajes de los usuarios de está rueda<br>Los viajes en los que va el usuario están resaltados</small>
          </li>
        <ul>`,
      },
      {
        id: 'profile',
        titulo:'Editar mi perfil',
        captura:'assets/capturas/profile.gif',
        subtitulo:'Pantalla para editar el perfil de usuario',
        descripcion:`La pantalla <i>Editar mi perfil</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Nombre
            <small>Se introduce el nombre del usuario</small>
          </li>
          <li class="mt-2">
            Apellidos
            <small>Se introducen los apellidos del usuario</small>
          </li>
          <li class="mt-2">
            Email
            <small>Se introduce la dirección de correo del usuario</small>
          </li>
          <li class="mt-2">
            Constraseña
            <small>Se introduce la contraseña para el usuario</small>
          </li>
          <li class="mt-2">
            Verificar contraseña
            <small>Se introduce la contraseña para comprobar que es correcta</small>
          </li>
          <li>
            <b>Guardar</b>
            <small>Guarda los cambios en los datos del usuario</small>
          </li>
          <li class="mt-2">
            <b><a href="#join">Cambiar horario</a></b>
            <small>Abre la página para unirse a otra rueda o cambiar su horario</small>
          </li>
          <li class="mt-2">
            <b>Darse de baja</b>
            <small>Elimina al usuario de la aplicación y lo quita de la rueda en la que estuviese</small>
          </li>
        <ul>`,
      },
      {
        id: 'users',
        titulo:'Gestionar usuarios',
        captura:'assets/capturas/users.gif',
        subtitulo:'Pantalla para gestionar los usuarios',
        descripcion:`<small>Esta es una opción solo para administradores</small><br>
        La pantalla <i>Gestionar usuarios</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            <b><a href="#users-form">Agregar usuario</a></b>
            <small>Abre el formulario para agregar un nuevo usuario</small>
          </li>
          <li>
            <b>Lista de usuarios</b>
            <p>La lista de usuarios muestra el nombre y apellidos de cada uno</p>
            <p>Cada usuario consta de un boton para editar los datos y otro para eliminar al usuario de la aplicación</p>
          </li>
        <ul>`,
      },
      {
        id: 'users-form',
        titulo:'Formulario de usuario',
        captura:'assets/capturas/users-form.gif',
        subtitulo:'Pantalla para gestionar los datos de un usuario',
        descripcion:`La pantalla <i>Formulario de usuario</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Nombre
            <small>Se introduce el nombre del usuario</small>
          </li>
          <li class="mt-2">
            Apellidos
            <small>Se introducen los apellidos del usuario</small>
          </li>
          <li class="mt-2">
            Email
            <small>Se introduce la dirección de correo del usuario</small>
          </li>
          <li class="mt-2">
            Constraseña
            <small>Se introduce la contraseña para el usuario</small>
          </li>
          <li class="mt-2">
            Rol
            <small>Lista de roles para el usuario<br>Los roles son: Usuario o Administrador<br>Los administradores tienen permisos para gestionar a los usuarios y las ruedas</small>
          </li>
          <li>
            <b>Cerrar</b>
            <small>Cierra la ventana</small>
          </li>
          <li>
            <b>Guardar/Modificar</b>
            <small>Guarda los cambios en los datos del usuario</small>
          </li>
        <ul>`,
      },
      {
        id: 'wheels',
        titulo:'Gestionar ruedas',
        captura:'assets/capturas/wheels.gif',
        subtitulo:'Pantalla para gestionar las ruedas',
        descripcion:`La pantalla <i>Gestionar ruedas</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            <b><a href="#wheels-form">Agregar rueda</a></b>
            <small>Abre el formulario para agregar una nueva rueda</small>
          </li>
          <li>
            <b>Lista de ruedas</b>
            <p>La lista de ruedas muestra el nombre y origen de cada una</p>
            <p>Cada rueda consta de un boton para editar los datos y otro para eliminarla de la aplicación</p>
          </li>
        <ul>`,
      },
      {
        id: 'wheels-form',
        titulo:'Formulario de rueda',
        captura:'assets/capturas/wheels-form.gif',
        subtitulo:'Pantalla para gestionar los datos de una rueda',
        descripcion:`La pantalla <i>Formulario de rueda</i> consta de:<br>
        <ul class='list-unstyled'>
          <li class="mt-2">
            Nombre
            <small>Se introduce el nombre de la rueda</small>
          </li>
          <li class="mt-2">
            Descripcion
            <small>Se introducen una breve información de la rueda</small>
          </li>
          <li class="mt-2">
            Origen
            <small>Se introduce la ciudad de origen de la rueda</small>
          </li>
          <li class="mt-2">
            Puntos de salida
            <small>Lista de los puntos de salida de la rueda</small>
          </li>
          <li>
            <b>Cerrar</b>
            <small>Cierra la ventana</small>
          </li>
          <li>
            <b>Guardar/Modificar</b>
            <small>Guarda los cambios en los datos de la rueda</small>
          </li>
        <ul>`,
      },
      {
        id: 'about',
        titulo:'Acerca de',
        captura:'assets/capturas/about.gif',
        subtitulo:'Pantalla con los datos de la aplicación y sus desarrolladores',
        descripcion:`La pantalla <i>Acerca de</i> muestra información tanto de la aplicación como de los desarrolladores`,
      },
      {
        id: 'info',
        titulo:'Información',
        descripcion:`<p>Este manual ha sido desarrollado por Rodrigo Navas [rodrigo.navas.arriaga@gmail.com]</p>
        <div>
        <img class="rounded rounded-circle float-left py-1 mr-md-3" src="https://avatars.githubusercontent.com/u/61503016?s=64&v=4" alt="Foto de Rodrigo">
        <a class="pl-3 d-block" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">LinkedIn</a>
        <a href="https://github.com/rnavas81" target="_blank">Github</a>
        </div>`,
      },

    ]
  }

}
