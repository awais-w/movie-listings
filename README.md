This project was bootstrapped with [Create React App]

# Movie listings challenge

Install the project using

### `npm install`

Once installed, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

##The app is doing the covering the following requirements

- Using TMDb Movies Now Playing API to populate the movie listing
- Using TMDb Movie genres API to fetch and display the genre titles
- Using TMDb Image API to display the poster images
- Multiple genres input (checkboxes). Only contain genres from the TMDb API that are in the returned movie result set.


- Display a list of movies, each showing their title, genres and poster image.
- The movies are ordered by popularity (most popular first - popularity property).
- Movies are filterable by multiple genres, the user has the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies will have both 'Action' and 'Drama' genres. A toggle filter is on the nav bar, clicking on filter will display the 'filter by genre' panel, the max height is set to 200px so it shows ok on mobile too, and is made scrollable to reach all the checkboxes.
- The input API's should is only called once.

- Sorry, i did'nt get time to plug the ratings feature in, but the rating filter implementation would be very similar to the the genre filter.
