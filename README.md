<h1 align="center"> :man_technologist: Jungle Devs - React Challenge #001 :woman_technologist: </h1>

<div align='center'>
  
Good evening everyone! I am Orlando and this is my solution for React challenge  :smiley:
It was a great learning opportunity and enjoyed it very much!
Hope you like it! Feel free to get in touch with me if you have any questions :)

</div>

## :nerd_face: What I learned?
  - **_How to create A/B tests in React Applications using MarvelApp_**
  - **_How to integrate MixPanel to check metrics of running A/B tests_**
  - **_Using custom enviroment variables in a React Application_**
  - **_Using media queries to create a responsive website_**
  - **_How to handle with API errors_**
  - **_Using Figma as a Desing resource_**

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
  cd jungledevs-challenge
  npm i
```

4. For last, run **npm start** to open the app in your browser

---

## How to create production builds using [GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)

1. Install [gh-pages](https://github.com/tschaub/gh-pages) in your application:
```javascript
  npm install --save gh-pages
```

2. Add homepage and scripts on package.json:
```javascript
  "homepage": "https://myusername.github.io/my-app",
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

5. That's it! Your app is now accessible at the homepage you specified in step 2. 


## How to integrate MixPanel with your application

1. MixPanel React library is already installed, so you can skip ahead and create a [MixPanel](https://mixpanel.com/) account.

2. Create a new project in MixPanel.

3. Go to your project's settings and take note of your Project Token.

4. Create a ```.env.local``` file in the root of your project and create ```REACT_APP_MIXPANEL_KEY``` [enviroment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env) :

```javascript
  REACT_APP_MIXPANEL_KEY="YOUR_PROJECT_TOKEN"
```

5. That's it! Now you can track your A/B test metrics in MixPanel's Reports section:

![image](https://user-images.githubusercontent.com/78616220/131593146-56ae3efe-4b54-45d3-b859-3ad3f331a306.png)


If you have troubles integrating MixPanel don't forget to check [MixPanel's integration documentation](https://developer.mixpanel.com/docs/javascript-quickstart) <br />

If you want to create more A/B tests don't forget to check [@marvelapp/react-ab-test documentation](https://www.npmjs.com/package/@marvelapp/react-ab-test)


## SEO and Accessibility

Report generated by [Lighthouse](https://developers.google.com/web/tools/lighthouse/). Lighthouse is an open-source, automated tool for improving the quality of web pages.

<div align='center'>
  
![image](https://user-images.githubusercontent.com/78616220/131719670-d414b777-261a-4a2b-a2e6-917bfc28ccb8.png)
  
</div>

### Accessibility

To improve Accessibility in our App we would have to increase contrast in three elements. On the span element we could achieve bigger contrast by increasing opacity to 0.8. On the buttons we would have to change the font or the button background to a darker color. So i woud take this opportunities to improve the legibility of the app to the design team.

<div align='center'>
  
![image](https://user-images.githubusercontent.com/78616220/131721335-e79fc4ab-1056-4d86-83db-0a9580d878dd.png)
  
</div>
