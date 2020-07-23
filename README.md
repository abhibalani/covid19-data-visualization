## Covid19 Data Visualization

<img src="https://i0.wp.com/oddblogger.com/wp-content/uploads/2020/07/covid19-india-tracker.png?w=600&ssl=1" alt="covid19-india-tracker"/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For data visualization, the library used is [Kepler.gl](https://kepler.gl).

Article about kepler.gl implementation: [Kepler.gl Data Visualization with React.js](https://oddblogger.com/integrating-kepler-gl-in-react-js/)

## Live Demo
[Covid19 Data Visualization](https://covid19.oddblogger.com)

## Dataset
The data which is plotted on the map is live data coming from covid19india.org. There is a python script which runs every 1 hour to fetch the latest data, add geocoordinates and format the data in a form which kepler.gl accepts.

## Roadmap

- Add covid19 data for rest of the world
- Add functionality to change visualization by giving options to switch layer
- Add functionality to change map style
- more ...

## Contribution
[Contribution](./CONTRIBUTING.md)

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
