# LFL Employee Directory code challenge

For this assignment you will be building an online employee directory, using only vanilla JS (**no jQuery**).

1. Please fork this repository before starting to work on it
2. Commit changes as if you are working on a team (including realistic commit messages)
3. When you are done, make to push your changes and send a link to your repo back to your recruiter

You should spend no more than 4-6h on this and please make sure to document anything you'd like us to know in the `Dev Notes` section of this `README`

Feel free to reach out to with any questions or for clarification.

## Setup
- No dependencies needed
- Task runners are okay
- `SASS/SCSS` is okay, your choice
- `dom.js` contains some helper functions

## Requirements
#### Sidebar / main content layout is honored per screenshots

#### A `View` option that displays all employees & their info

![view](images/print.png)

#### An `Add` option that allows users to input a name, an office number, and a phone number

![add](images/add.png)

#### A `Verify` option that allows users to input a name and returns a success/error state to the UI

![verify](images/verify.png)

#### An `Update` option that allows the user to input name, office number, and phone number -- updating only the office number and phone number upon a name match

#### A `Delete` option that deletes the employee with the matching name

## Bonus
- Style all/any of the aforementioned interactions however you see fit, this is an opportunity to show off your creativity!
- MVC JS architecture

## Dev notes

For this assignment, I opted against using any of the built in helpers in dom.js

I felt that vanilla was good enough for this example. 

I ended up not using a few of the items in the sidebar, namely the delete option, as I chose to include a delete icon instead on the card itself

You'll find my helper functions I made inside utils.js, the markup inside of index.html, and the main setup inside of app.js

I used regular css for this project, as I didn't want to have to worry about setting up a build process.

I wanted to add a scroll to bottom effect when adding a new employee, but I wasn't able to get the javascript to behave properly

I didn't want to spend too much longer on this, but I think it could be improved in a number of ways

1. Add more robust verification
2. Make it more obvious what is wrong with a form
3. Toggle visibility so only one form is visible at a time
4. Add errors states to each form
5. Scroll to bottom of the page when a new employee is added.