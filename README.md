# Cesium Project

## Setup

### MacOS/Linux

To run this on your own machine:

- `npm install`
- `npm start-dev`

Optional Testing:

- `npm test` to start tests

## Technology Choices

### React, React-Redux & Redux Thunk
I used React for the frontend. Since this was completed in three hours and intended to be a boilerplate app, I managed state using State Hooks. I added Redux as a dependency for later use.

### CSS
I used Primitive - a small CSS boilerplate framework made by Tania Rascia. I felt like the purpose of this project was to demonstrate understanding of code in the browser overall, and this file provides sensible defaults and a simple grid.

### Express
I chose Express to handle building a simple static server. It serves up static files and can connect to a database. In development, the app loads a mock API from your local server.

### Webpack & Babel
Webpack and Babel make up this app's build process. Webpack bundles the JavaScript files and Babel transpiles ES6+ code across all browsers, with presets set to React.

## Deployment
This app is deployed via Netlify at: https://cesium-app.netlify.app/

## Unit Testing
For general purpose testing, this app provides Mocha (testing framework) and Chai (assertion library). For Express routes, supertest - an abstraction for testing HTTP requests). For React, it uses Enzyme - a browserless abstraction for testing React components.
