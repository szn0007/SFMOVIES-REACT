## SFMOVIES CODING CHALLENGE
Project Demo: https://master.d348t8b81a7o0l.amplifyapp.com/

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
|-- public (Where static files are stored)<br />
|   |-- images<br />
|   |-- index.html (file served to user browser)<br />
|-- src (Main source folder)<br />
|   |-- App.js<br />
|   |-- App.css (Main css file used in this project)<br />
|   |-- index.js<br />
|   |-- selectors.js (To return data in different form after taking state as an argument)<br />
|   |-- thunks.js (Handling asynchronous actions)<br />
|   |-- components<br />
|   |   |-- LandingPage.js (Component that shows list of movies retrieved from DataSF api)<br />
|   |   |-- NavBar.js (Component that has search functionality)<br />
|   |   |-- MovieDetails.js (Component that shows map and movie details. Move details is retreived from another api by passing movie title)<br />
|   |   |-- MovieCard.js (Re-usable component that shows movie poster and movie name. On clicked movie details page is routed)<br />
|   |   |-- MapComponent.js (Component whose sole purpose is to render google map)<br />
|   |-- store<br />
|   |   |-- actions.js (All the actions to be dispatched)<br />
|   |   |-- reducers.js (uses action to determine state change)<br />
|   |   |-- store.js (redux store configuration)<br />
|   |-- tests<br />
|   |   |-- thunks.test.js (thunk test)<br />
|-- package.json<br />


## Libraries Used:
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>Redux Thunk</li>
  <li>React Router</li>
  <li>Axios</li>
  <li>Google Map</li>
  <li>Semantic UI</li>
</ul>

## API Used:
<ul>
  <li>https://data.sfgov.org/resource/yitu-d5am.json</li>
  <p>This API was provided during coding challenge. This api provides list of movies filmed in San Francisco.</p>
  <li>https://www.omdbapi.com/</li>
  <p>To make this web application more interactive and to add more features, I used this api to get the details of movies.</p>
</ul>

## Problems Faced:
<ul>
  <li>The provided api had little information in the response to build interactive project.</li>
  <li>Time Constraint.</li>
  <li>Google Map</li>
  <li>No movie image in the provided api</li>
</ul>

## Solutions to above problems:
<ul>
  <li>To make this application more interactive, I used another additional api https://www.omdbapi.com which had more details about the movie like posters, ratings, runtimes, reviews etc.</li>
  <li>Currently working as a fulltime Senior Software Engineer in Cotiviti, Sun-Fri (10:00am - 7:00pm) and as a Senior Engineering Consultant at Lapsii Online Group Pvt. ltd, so it was hard to manage time for this coding challenge.</li>
  <li>Using google map in development mode was very overwhelming.</li>
  <li>Manually downloaded images of 10 images. And dynamically rendered the images in the home page if the image exists and if image doesnot exist default image is rendere.</li>
</ul>

## Technical Choices:
<ul>
  <li>ReactJS: To build a SPA, react is very simple and easy. I have frequently used Javascript framework like VueJS and ReactJS in various projects. </li>
  <li>Redux: Plain and simple: To manage state effectively.</li>
  <li>Redux-Thunk: For asynchronous action dispatching. I Could have done api calls in react component itself, but i like to separate functionality of each components of my project.</li>
  <li>Google Map: Started this project with open street map, but due to its various limitations, I chose Google map as it is simple. And main things was time constraint.</li>
</ul>

## Task not present in the Project due to time constraint:
<ul>
  <li>Unit Testing</li>
  <li>More interactive UI</li>
</ul>

## About Developer
Portfolio: https://www.sujanshrestha.info.np/
LinkedIn: https://www.linkedin.com/in/sujan-shrestha-274b70b8/
