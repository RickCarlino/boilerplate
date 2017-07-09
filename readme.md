# Boilerplate

This is my boilerplate for one off frontend projects.
I try to update it every 6 months or so to keep up with the JS tooling steam roller.

## Mandatory Screenshot

![screenshot](screenshot.png)

## The Stack


 * [Webpack](https://webpack.github.io/) for modules and bundling.
 * [Typescript](https://www.typescriptlang.org/) and TSLint for sanity.
 * [BlueprintJS](http://blueprintjs.com/) for UI component
 * [React](https://facebook.github.io/react/) and [React Router](https://github.com/ReactTraining/react-router) for the view layer stuff.

## Development

 1. `npm install`
 2. `npm start`
 3. Visit http://localhost:3002/

## Testing

I use Jest to test stuff.

Run tests with `npm run test`.

Check coverage reports inside the `coverage/` directory.

## TODOs

 - [ ] Integrate react-redux-typescript
 - [ ] Get `@connect()` components wired up to router.
 - [ ] Route based code Splitting
 - [ ] Deployments and whatnot (surge.sh maybe?)
 - [ ] Side effect handlers / middlewares
