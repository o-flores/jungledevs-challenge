<h1 align="center"> :man_technologist: Jungle Devs - React Challenge #001 :woman_technologist: </h1>

## :nerd_face: What I learned?
  - **_How to create A/B tests in React Applications using MarvelApp_**
  - **_How to integrate MixPanel to check metrics of running A/B tests_**
  - **_Using custom enviroment variables in a React Application_**

## :computer:  Tecnologies
  - **_[React](https://reactjs.org)_**
  - **_[MarvelApp - A/B Testing React Components](https://www.npmjs.com/package/@marvelapp/react-ab-test)_**
  - **_[MixPanel](https://mixpanel.com/)_**


## How to run the application in development mode

To run this project, install it locally using npm:

1. Open the terminal and create a local directory:
```javascript
  mkdir jungledevs
```

2. Clone the project:
```javascript
  cd jungledevs
  git clone https://github.com/o-flores/jungledevs-challenge.git
```

3. install dependencies:
```javascript
  cd busca-livre
  npm i
```

4. For last, run **npm start** to open the app in your browser

---

## How to create production builds using [GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

1. Install [gh-pages](https://github.com/tschaub/gh-pages) in your application:
```javascript
  npm install gh-pages
```

2. Add following scripts on package.json:
```javascript
  "homepage": "https:\/\/username.github.io/app-name",
  "scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
},
```

3. Execute your app deploy:
```javascript
  npm run deploy
```

4. Finally, go to your remote repository settings and be sure to enable **gh-pages** branch:

![image](https://user-images.githubusercontent.com/78616220/131594518-674d66c1-f1fb-4505-908c-ff79f3f0fd10.png)

5. That's it! Your app is now accessible at the URL you specified in step 2. 


## How to integrate MixPanel with your application

![image](https://user-images.githubusercontent.com/78616220/131593146-56ae3efe-4b54-45d3-b859-3ad3f331a306.png)
