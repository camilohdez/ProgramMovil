# ProgramMovil
Instrucciones de Instalación
Para comenzar a trabajar con este proyecto de React Native, sigue los siguientes pasos:

Prerrequisitos
Asegúrate de tener instalado:

Node.js
npm (viene con Node.js)
Expo CLI para la gestión del proyecto React Native.
Git para el control de versiones.

Clonar el Repositorio
Primero, clona el repositorio a tu máquina local usando Git:
git clone https://github.com/camilohdez/ProgramMovil.git

Instalar Dependencias
Dentro del directorio del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias:
npm install

Configuración de Firebase
Asegúrate de tener un archivo firebaseConfig.js en la raíz del proyecto con tu configuración personal de Firebase. Debería verse algo así:

// firebaseConfig.js
const firebaseConfig = {
  apiKey: "tu_api_key",
  authDomain: "tu_auth_domain",
  projectId: "tu_project_id",
  storageBucket: "tu_storage_bucket",
  messagingSenderId: "tu_messaging_sender_id",
  appId: "tu_app_id"
};

export default firebaseConfig;

Nota: Este proyecto tiene la configuracion de coneccion a firebase en caso de utilizar otra configuración Reemplaza los valores de tu_api_key, tu_auth_domain, etc., con tus propias credenciales de Firebase.

Ejecutar la Aplicación
Una vez instaladas las dependencias y configurado Firebase, puedes iniciar la aplicación con:
expo start

Esto abrirá una ventana de tu consola con un panel de control de Expo. Desde aquí, puedes elegir ejecutar tu aplicación en un emulador de iOS o Android, o en tu propio dispositivo usando la aplicación Expo Go.
