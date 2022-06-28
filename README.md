# Cryptoverse
App that provide all kind of informations about cryptocurrency like price, history, news about specific crypto.

![This is an image](./img/Screenshot%202022-06-28%20at%2021-18-43%20Cryptoverse.png)

# Technologies :
- React 
- Redux Toolkit
- JS
- Ant Design
- Chart.js
- Rapid API

# Important Note
Due changes in Coinranking API app have two problems, solutions are available only in premium plan:
1. CORS policy(server side), site will run only by turning it off CORS, for example via CORS Everywhere plugin for Firefox.
2. Exchanges endpoint since this is reserved now for premium plan only, exchanges component will render only information about changes in API.

# LIVE
https://jarekcryptoapp.netlify.app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.