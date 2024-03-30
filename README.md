# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Requisitos Funcionales:

1. Página de inicio con una lista de películas populares.
2. Barra de búsqueda que permita buscar películas por título.
3. Página de detalles de la película que muestre información comano título, descripción, 
puntuación, géneros, etc.
4. Capacidad para marcar películas como favoritas y ver la lista de películas favoritas.
5. Diseño bonito, minimalista y responsivo, con enfoque en mobile first.
6. Implementación de estrategias de SEO para mejorar el posicionamiento en buscadores

## Instalación y uso

Para el uso de la aplicación es necesario clonar el repositorio localmente.
 
  1. Ya con el proyecto localmente, es necesario instalar los modulos de node.

```js

  npm install

```

  2. Para correr el programa se debe de usar el comando.

```js

  npm run dev

``` 

## Desarrollo

La aplicación esta desarrollada en Vite React-TypeScript y utiliza librerias como Axios, React-router y Tailwind.

- `Axios` Se utiliza para hacer los request en la API de The Movie Database (TMDb).
- `React-router` Se utiliza para manejar la navegación entre paginas del aplicativo.
- `Tailwind` Se utiliza para darle estilos a la aplicación.

El codigo esta distribuido entre las siguientes carpetas.

- **Api:** Se encuentra el codigo con el cual se conecta a la API. 
- **Components:** Se encuentran los componentes utilizados en el aplicativo.
- **Interfaces:** Estan las interfaces con las que se estructuran los datos que nos da la API para ser utilizados en el aplicativo.
- **Pages:** Se encuentra las paginas utilizadas en el aplicativo.

## Desafios superados

De primeras siempre enfrentarse a un API que no se conoce representa un obstaculo, pero ya entendiendo como funciona y los datos que nos da, se facilita mucho el trabajo.

Tambien ayuda mucho el uso de interfaces que en este caso los genere con una herramienta quicktype el cual ya con el response del API me genero el interface, asi que la implementación y la estructuración de datos fue mucho mas facil.

Otro inconveniente que me encontre, es que no entendia muy bien como hacer el post para agregar a favoritos de la API, asi que use chatGPT y este me arrojo la estructura de como debia hacer esa accion.

