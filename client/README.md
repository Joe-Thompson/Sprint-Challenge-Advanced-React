This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Self-Study/Essay Questions
Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the ANSWERS.md file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

 Why would you use class component over function components (removing hooks from the question)?
 
        A class component allows you to control life cycle events.
 
 Name three lifecycle methods and their purposes.
 
    Component did mount, this phase of a components life is where it is created in memory, and a good place to use an api call, mounting does not mean rendering to the user.
    component did update, this phase is where something in the components state updated and react will now re render using the updated state
    component will unmount, with the components dying breath it will run this last chunk of code, cleaning up the mess it made, or sending out one last bit of state before it rides off into the sunset
 
 What is the purpose of a custom hook?
 
    To add additional logic to the (useState or useEffect) hooks
 
 Why is it important to test our apps?
 
    The simplest answer is to trust our code.  As an app grows a function or bit of state may be overlooked and return something we did not expect,
    writing test’s allows us to test chucks of our code then forget about that chuck till we find a failed test.  Testing also allows us to weed out
    bugs that may not be noticeable to use at first glance, or may not surface and allows to protect the app from regression. 