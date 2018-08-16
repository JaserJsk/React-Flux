### This is a "Tutorial App" based on the ["Starter Kit"](https://github.com/JonasJsk/React-Flux/tree/master/StarterKit) in the same repository

### This "Tutorial App" is done by following the tutorial made by "Cory House" at [Pluralsight](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents)

---

### Docs
The documentation for the "Tutorial App" can be found [here](https://docs.senseidev.com/dokumentation/javascript-library/react/react-flux-1/tutorial-app)

---

### Notes

#### Props & State
Props (Short for properties) - Look like HTML attributes, but immutable. Props are passed down and owned by parent components.
`this.props.username`

State - Holds mutable state. Should only be used on controller views or top-level components.
`this.state.username`

#### Initial State
Set the initial state of top-level components also known as controller views.
`getInitialState`

#### Default Prop Values
Define a set of default properties that components should use when and if the parent component does not declare a value.
`getDefaultProps`

#### Lifecycle Methods
* `componentWillMount` - Will run before the initial render on both client and server. This is a good place to set initial state.
* `componentDidMount` - Will run after render. Good to use when there is need to integrate with frameworks, timers and AJAX requests in the DOM.
* `componentWillReciveProps` - Will run before the component receives new props. Good place to set state before the next render.
* `shouldComponentUpdate` - Will run immediately before render and when new props or state are being recived by components. Good for performance to avoid unnecessary re-render calls.
* `componentWillUpdate` - Runs immediatle before rendering when new props or state are being received. Very useful when prepering for an update. Cannot call set state in this function.
* `componentDidUpdate` - Will invoke immediately after components updates are flushed to the DOM. Will allow work on the DOM immediatly after components have been updated and re-rendered.
* `componentWillUnmount` - Will run just before a component is unmounted from the DOM. This is a great place to clean up by destroying any related resources or DOM elements that were created when the component was mounted.

#### Keys for Dynamic Children
Add a key to dynamic child elements.
`<tr key = { author.id } >`

---

### Command Line
* Type `gulp` to Run the application.
* Type `ctrl + c` to kill current process.
* Type `ctrl + k` to clear the terminal.

---

### Unidirectional Flow
	┌─────────────────────┐
               |             	User clicked a button, notify "ACTION" 
             REACT           	that a button has been clicked!
	└─────────────────────┘
	┌─────────────────────┐
               |             	Thanks "REACT"! I registerd an action creator with the
            ACTION          	"DISPATCHER" and will notify all stores that care.          
	└─────────────────────┘
	┌─────────────────────┐
               |             	A "STORE" has registered a callback with me. 
      	DISPATCHER        	I will notify that "STORE" now. 
	└─────────────────────┘
	┌─────────────────────┐
               |             	Much obliged for the update "DISPATCHER"! - I will update
        	 STORE           	my data and emit an event for all components that care.
	└─────────────────────┘
	┌─────────────────────┐
               |             	Thanks for the new data "STORE"! I will update the UI
      	   COMPONENT         	to reflect all the changes.
	└─────────────────────┘

---

### Project Structure
	.root
	├── dist
		├── css
			└── bundle.css
		├── images
			└── pluralsight-logo.png
		├── scripts
			└── bundle.js
		├── favicon.ico
		└── index.html
	├── node_modules
		└── * packages
	├── src
		├── actions
			├── authorActions.js
			└── initializeActions.js
		├── api
			├── authorApi.js
			└── authorData.js
		├── components
			├── about
				└── aboutPage.js
			├── authors
				├── authorForm.js
				├── authorList.js
				├── authorPage.js
				└── manageAuthorPage.js
			├── common
				├── reusables
					└── textInput.js
				└── header.js
			├── App.js
			├── homePage.js
			└── notFoundPage.js
		├── constents
			└── actionTypes.js
		├── dispatcher
			└── appDispatcher.js
		├── images
			└── pluralsight-logo.png
		├── stores
			└── authorStore.js
		├── favicon.ico
		├── index.html
		├── main.js
		└── routes.js
	├── eslint.config.json
	├── gulpfile.js
	├── package.json
	├── package-lock.json
	└── README.md
	
	17 directories, 26 files