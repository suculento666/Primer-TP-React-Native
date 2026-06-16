# Primer TP React Native - Login

## Descripción general

Este proyecto consiste en una pantalla de login desarrollada con React Native utilizando componentes, props y hooks.

La aplicación simula el ingreso de un usuario mediante credenciales definidas en el código. Cuando el usuario presiona el botón "Ingresar", se valida que el nombre de usuario y la contraseña coincidan con los datos almacenados. Dependiendo del resultado, se muestra un mensaje de éxito o de error.

---

## Componentes utilizados

### App.js

Es el componente principal de la aplicación.

Responsabilidades:

* Mantener los estados principales mediante useState.
* Guardar el usuario ingresado.
* Guardar la contraseña ingresada.
* Guardar el mensaje que se mostrará al usuario.
* Validar las credenciales mediante la función handleLogin().
* Renderizar los componentes LoginForm y Message.

Estados utilizados:

```javascript
username
password
message
```

Función principal:

```javascript
handleLogin()
```

Esta función compara los datos ingresados con las credenciales válidas definidas en el proyecto.

---

### LoginForm.jsx

Responsabilidad:

Mostrar toda la interfaz del formulario de login.

Elementos que contiene:

* Logo de Coca-Cola.
* Campo de usuario.
* Campo de contraseña.
* Botón Ingresar.
* Textos secundarios ("Olvidaste la clave?" y "Crear cuenta").

Este componente no tiene estados propios.

Recibe toda la información mediante props desde App.js.

Props recibidas:

```javascript
username
setUsername
password
setPassword
onLogin
```

Cuando el usuario escribe en los campos, este componente actualiza los estados definidos en App.js mediante las funciones recibidas por props.

Cuando se presiona el botón, ejecuta la función onLogin.

---

### Message.jsx

Responsabilidad:

Mostrar el resultado del intento de login.

Recibe una única prop:

```javascript
message
```

Funcionamiento:

* Si no existe mensaje, no renderiza nada.
* Si el mensaje contiene la palabra "correcto", utiliza el estilo de éxito.
* En cualquier otro caso utiliza el estilo de error.

Esto permite reutilizar el mismo componente para ambos escenarios.

---

## Flujo de funcionamiento

1. La aplicación inicia mostrando el formulario.
2. El usuario escribe nombre de usuario y contraseña.
3. Los datos ingresados se almacenan en los estados de App.js.
4. El usuario presiona "Ingresar".
5. Se ejecuta handleLogin().
6. Se comparan las credenciales ingresadas con las credenciales válidas.
7. Si coinciden:

   * Se muestra "Login correcto ✓".
8. Si no coinciden:

   * Se muestra "Usuario o contraseña incorrectos, vuelva a intentar".
9. El componente Message renderiza el mensaje correspondiente.

---

## Hooks utilizados

### useState

Se utiliza para almacenar información que puede cambiar durante la ejecución de la aplicación.

Estados utilizados:

```javascript
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
```

---

## Comunicación entre componentes

La comunicación se realiza mediante props.

Flujo:

```text
App
│
├── LoginForm
│      recibe datos y funciones
│
└── Message
       recibe el mensaje a mostrar
```

App es el componente que controla toda la lógica.

LoginForm solamente muestra el formulario y envía eventos.

Message solamente muestra información.

---

## Archivos principales

```text
App.js

src/
├── components/
│   ├── LoginForm.jsx
│   └── Message.jsx
│
└── styles/
    └── styles.js
```

---

## Consideraciones importantes

* Las credenciales están hardcodeadas.
* No existe conexión con una base de datos.
* No existe sistema de registro de usuarios.
* No existe autenticación real.
* El objetivo del proyecto es practicar:

  * Componentización.
  * Props.
  * useState.
  * Manejo de eventos.
  * Organización del código.
  * Estilos en React Native.

---

## Credenciales de prueba

Usuario:

```text
fidel
```

Contraseña:

```text
agus
```
