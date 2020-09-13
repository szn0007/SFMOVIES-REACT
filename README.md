## SFMOVIES CODING CHALLENGE
Project Demo: https://master.d254tlo2iiyf3z.amplifyapp.com/

This web applcation shows on a map where movies have been filmed in San Francisco.

![SFMOVIES Home Page](https://master.d348t8b81a7o0l.amplifyapp.com/images/screenshot2.png)

![SFMOVIES Movie Detail Page](https://master.d348t8b81a7o0l.amplifyapp.com/images/screenshot1.png)

## INSTALLATION

### `create-react-app`
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

npx create-react-app my-app
cd my-app
npm start

Clone Code
To serve the app on your local environment, you need to run the following commands:

git clone https://github.com/szn0007/SFMOVIES-REACT.git
cd sfmovies
yarn
(If you don't have yarn, you can run npm install instead)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Description

In this Application Users Can:
1. Search the movie name and find the location, where that movie had been filmed in San Francisco. Data is fetched from https://data.sfgov.org/resource/yitu-d5am.json
2. Search has autocomplete feature to help users find the film more conviniently.
3. Users can select the film from autocomplete list.
4. When selected, movie details page is loaded. On the left side of the page, google map is rendered.Markers are seen in google map. Each marker represents the location where the movie was filmed. And the Markers are clickable as well. When clicked, it shows an info window with movie title and location name.
5. Movie details are also shown on the right sidebar. Movie poster, plot, facts and details and list of location where movie is filmed are listed.The list are clickable as well and when clicked google maps show that exact location marker.

## Project Structure
~> SFMOVIES
|-- public (Where static files are stored)
|   |-- images
|   |-- index.html (file served to user browser)
|-- src (Main source folder)
|   |-- App.js
|   |-- App.css (Main css file used in this project)
|   |-- index.js
|   |-- selectors.js (To return data in different form after taking state as an argument)
|   |-- thunks.js (Handling asynchronous actions)
|   |-- components
|   |   |-- LandingPage.js (Component that shows list of movies retrieved from DataSF api)
|   |   |-- NavBar.js (Component that has search functionality)
|   |   |-- MovieDetails.js (Component that shows map and movie details. Move details is retreived from another api by passing movie title)
|   |   |-- MovieCard.js (Re-usable component that shows movie poster and movie name. On clicked movie details page is routed)
|   |   |-- MapComponent.js (Component whose sole purpose is to render google map)
|   |-- store
|   |   |-- actions.js (All the actions to be dispatched)
|   |   |-- reducers.js (uses action to determine state change)
|   |   |-- store.js (redux store configuration)
|   |-- tests
|   |   |-- thunks.test.js (thunk test)
|-- package.json
