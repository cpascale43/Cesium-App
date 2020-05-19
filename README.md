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
I used React for the application code. Since this was completed in three hours and intended to serve as a skeleton application, I managed state using State Hooks. I included Redux as a dependency for later use.

### CSS
I used Primitive - a small CSS framework made by Tania Rascia. I felt like the purpose of this project was to demonstrate understanding of how code runs in the browser overall, and this file provides sensible defaults and a simple grid.

### Express
I chose Express to handle building a simple static server in Node. The server sends static files and allows the app to run on a specified port. It also has a route '/api' that returns a dummy JSON object to show how fetching data would work in development.

### Webpack & Babel
Webpack and Babel make up this app's build process. Webpack bundles the JavaScript files and Babel transpiles ES6+ code across all browsers, with presets set to the latest JavaScript and React.

## Deployment
This app is deployed via Netlify at: https://cesium-app.netlify.app/

## Unit Testing
For general purpose testing, this app provides Mocha (testing framework) and Chai (assertion library). For Express routes, I provided supertest - an abstraction for testing HTTP requests. For React, it uses enzyme - a browserless abstraction for testing React components.
