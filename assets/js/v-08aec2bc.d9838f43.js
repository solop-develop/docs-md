"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[98499],{26679:(e,a,r)=>{r.r(a),r.d(a,{default:()=>s});var i=r(78e3);const n=[(0,i.uE)('<p>En ADempiere el login es el proceso que permite el acceso de forma segura utilizando la identificación de un usuario único y su contraseña, a continuación se explicará el procedimiento.</p><p>Para acceder o iniciar sesión en ADempiere, el usuario requiere lo siguiente:</p><ul><li>Servicio de ADempiere (URL del Servicio)</li><li>Credenciales de acceso (Facilitadas por un consultor de ERPyA) <ul><li>Usuario: <code>Estandar</code></li><li>Clave: <code>Estandar</code></li></ul></li><li>Rol asignado al usuario creado por ERPyA</li></ul><p>Al ingresar a la url del servicio de ADempiere facilitada por un consultor de ERPyA, podrá visualizar la ventana <strong>Login</strong> o <strong>Iniciar Sesión</strong>, la cual cuenta con los campos necesarios para iniciar sesión en el idioma que el usuario lo requiera.</p><p><img src="/assets/img/docs/basic-rules/bar-login-login.png" alt="Ventana Login o Iniciar Sesión en ADempiere"> Imagen 1. Ventana Login o Iniciar Sesión en ADempiere</p><p>Introduzca en el campo <strong>Usuario</strong>, el usuario previamente facilitado por el consultor de ERPyA.</p><p><img src="/assets/img/docs/basic-rules/bar-login-user.png" alt="Usuario"> Imagen 2. Usuario</p><p>Introduzca en el campo <strong>Contraseña</strong>, la contraseña del usuario previamente facilitada por el consultor de ERPyA.</p><p><img src="/assets/img/docs/basic-rules/bar-login-password.png" alt="Campo Contraseña del Usuario"> Imagen 3. Campo Contraseña del Usuario</p><p>Seleccione en el campo <strong>Lenguaje</strong>, el idioma con el cual requiere ingresar al servicio de ADempiere.</p><p><img src="/assets/img/docs/basic-rules/bar-login-language.png" alt="Campo Lenguaje para Acceso"> Imagen 4. Campo Lenguaje para Acceso</p><p>De igual manera, la ventana cuenta con el checklist <strong>Recordar mis datos</strong>, que al tildar el mismo serán recordadas las credenciales de acceso del usuario.</p><p><img src="/assets/img/docs/basic-rules/bar-login-checklist.png" alt="Checklist Recordar mis datos"> Imagen 5. Checklist Recordar mis datos</p><p>Seleccione la opción <strong>OK</strong>, para cargar las credenciales de acceso y proceder a detallar el rol, la organización, compañía y almacén para ingresar a ADempiere.</p><p><img src="/assets/img/docs/basic-rules/bar-login-ok.png" alt="Opción OK para Cargar las Credenciales"> Imagen 6. Opción OK para Cargar las Credenciales</p><p>Podrá visualizar la ventana <strong>Login</strong> o <strong>Iniciar Sesión”</strong>, con los campos competentes al rol del usuario.</p><p><img src="/assets/img/docs/basic-rules/bar-login-session.png" alt="Ventana Login o Iniciar Sesión en ADempiere con Rol del Usuario"> Imagen 7. Ventana Login o Iniciar Sesión en ADempiere con Rol del Usuario</p><p>Seleccione en el campo <strong>Rol</strong>, el rol que cumple el usuario dentro de la organización.</p><p><img src="/assets/img/docs/basic-rules/bar-login-rol.png" alt="Campo Rol del Usuario"> Imagen 8. Campo Rol del Usuario</p><p>Seleccione en el campo <strong>Compañía</strong>, la compañía para la cual trabaja el usuario.</p><p><img src="/assets/img/docs/basic-rules/bar-login-company.png" alt="Campo Compañía"> Imagen 9. Campo Compañía</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual trabaja el usuario.</p><p><img src="/assets/img/docs/basic-rules/bar-login-organization.png" alt="Campo Organización"> Imagen 10. Campo Organización</p><p>Seleccione en el campo <strong>Almacén</strong>, el almacén para el requiere acceder el usuario.</p><p><img src="/assets/img/docs/basic-rules/bar-login-store.png" alt="Campo Almacén"> Imagen 11. Campo Almacén</p><p>Por último, para iniciar sesión en el servicio de ADempiere, debe seleccionar la opción <strong>OK</strong>.</p><p><img src="/assets/img/docs/basic-rules/bar-login-ok-2.png" alt="Opción OK para acceder a ADempiere"> Imagen 12. Opción OK para acceder a ADempiere</p><h2 id="recuperar-contrasena" tabindex="-1"><a class="header-anchor" href="#recuperar-contrasena" aria-hidden="true">#</a> Recuperar Contrasena</h2><p>Si el usuario no recuerda la contraseña para iniciar sesión puede recuperarla seleccionando la interrogante <strong>¿Se te olvidó tu contraseña?</strong>.</p><p><img src="/assets/img/docs/basic-rules/bar-login-recover.png" alt="Interrogante ¿Se te Olvidó tu Contraseña?"> Imagen 13. Interrogante ¿Se te Olvidó tu Contraseña?</p><p>Podrá visualizar la ventana <strong>Login</strong> o <strong>Iniciar Sesión</strong>, con el campo <strong>ID de usuario</strong>, donde debe ingresar el usuario de acceso al servicio de ADempiere.</p><p><img src="/assets/img/docs/basic-rules/bar-login-id.png" alt="Ventana Login o Iniciar Sesión en ADempiere para Recuperar Contraseña"> Imagen 14. Ventana Login o Iniciar Sesión en ADempiere para Recuperar Contraseña</p><p>Seleccione la opción <strong>OK</strong>, para que ADempiere envie por correo electrónico, la verificación de usuario y la URL para cambiar la contraseña.</p><p><img src="/assets/img/docs/basic-rules/bar-login-ok-3.png" alt="Opción OK para Recuperar Contraseña"> Imagen 15. Opción OK para Recuperar Contraseña</p><p>Ubique el nuevo mensaje recibido en su correo electrónico y seleccione la opción <strong>Verify Token</strong>.</p><p><img src="/assets/img/docs/basic-rules/bar-login-verify.png" alt="Correo Recibido de ADempiere"> Imagen 16. Correo Recibido de ADempiere</p><p>Automáticamente se cargará una pestaña en el navegador, con la url indicada en el correo recibido. En dicha pestaña podrá visualizar la ventana <strong>Login</strong> o <strong>Iniciar Sesión</strong> con los campos necesarios para crear una nueva contraseña.</p><p><img src="/assets/img/docs/basic-rules/bar-login-eyelash.png" alt="Pestaña Cargada Automáticamente"></p><p>Introduzca en el campo <strong>Nueva Contraseña</strong>, la contraseña para iniciar sesión en ADempiere.</p><p><img src="/assets/img/docs/basic-rules/bar-login-new.png" alt="Campo Nueva Contraseña"> Imagen 18. Campo Nueva Contraseña</p><p>Introduzca en el campo <strong>Repita la Nueva Contraseña</strong>, la contraseña ingresada en el campo <strong>Nueva Contraseña</strong>, para iniciar sesión en ADempiere.</p><p><img src="/assets/img/docs/basic-rules/bar-login-repeat.png" alt="Campo Repita la Nueva Contraseña"></p><p>Seleccione la opción <strong>OK</strong>, para guardar la nueva contraseña ingresada.</p><p><img src="/assets/img/docs/basic-rules/bar-login-ok-4.png" alt="Opción Ok para Guardar la Contraseña"> Imagen 20. Opción Ok para Guardar la Contraseña</p>',44)],o={},s=(0,r(13860).Z)(o,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,n)}]])},87001:(e,a,r)=>{r.r(a),r.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-08aec2bc","path":"/docs/basic-rules/login.html","title":"Inicio de Sesión","lang":"es-ES","frontmatter":{"title":"Inicio de Sesión","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"En ADempiere el login es el proceso que permite el acceso de forma segura utilizando la identificación de un usuario único y su contraseña, a continuación se explicará el procedimi","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/basic-rules/login.html"}],["meta",{"property":"og:title","content":"Inicio de Sesión"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Recuperar Contrasena","slug":"recuperar-contrasena","children":[]}],"git":{"createdTime":1677704962000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":5},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":2.85,"words":856},"filePathRelative":"docs/basic-rules/login.md","localizedDate":"1 de marzo de 2023"}')}}]);