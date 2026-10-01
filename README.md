# Scape Room · React escape-room exercise

Historical React game prototype with routes for a home screen, two rooms, a key screen, and win/loss screens. The first room uses component state and drag-and-drop interaction to unlock a door. The repository includes local illustrations and styles.

## Stack

React 16, React Router 5 and Create React App are declared in `package.json`. This is a learning project, not a maintained game or verified live deployment.

## Explore locally

From the repository root, these commands were checked with Node 20:

```sh
npm ci --legacy-peer-deps --ignore-scripts
CI=true npm test -- --watch=false --runInBand
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

For local play, run `NODE_OPTIONS=--openssl-legacy-provider npm start`. The OpenSSL flag is needed by this historical Create React App/Webpack version on Node 20. It is a development workaround, not a deployment recommendation.
