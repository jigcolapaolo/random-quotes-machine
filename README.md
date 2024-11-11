# Random Quotes Machine <img src="https://github.com/user-attachments/assets/a32491bb-6e52-4733-87ec-5b58d79d5800" alt="App Logo" width="30" height="30" />
<br>
<img src="https://github.com/user-attachments/assets/2e255ee4-a0c0-4399-bd71-865766df1747" alt="App Img" width="400" height="250" />

## 🛠️ Tecnologías Utilizadas

- **Framework:** React
- **Lenguaje:** TypeScript
- **Estilos:** SCSS
- **Testing:** Playwright (end-to-end)
- **Linter:** ESLint

## 📚 Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local.

### 1. Clonar el repositorio

````
git clone https://github.com/jigcolapaolo/random-quotes-machine.git
````

### 2. Instalar dependencias

```
npm install
````

### 3. Ejecutar la aplicación

Para ejecutar el proyecto en modo desarrollo:

````
npm run dev
````

Para construir y ejecutar en modo producción:

````
npm build
npm start
````

## 🧪 Tests

La app incluye tests de extremo a extremo (E2E) con configuraciones específicas para Playwright.

### Ejecutar Tests E2E con Playwright

1. Usa el siguiente comando para ejecutar todos los tests de Playwright:
````
npx playwright test
````
Opcional con UI:
````
npx playwright test --ui
````
