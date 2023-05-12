Framework for Checkpoint 2: Small Business App

Bring in the Thunk app as a base framework.

I will need to have 2 parts to this. A login page, and parts that is accessible publicly. 

Tab 1 Listing
Tab 2 Details
Tab 3 Sign-In 
Tab 4 Admin
Tab 5 Add New Listing

**TECHNICAL FRAMEWORK AFTER DESCRIPTION**


Listing Page when LOGGED OUT
	-Table
		-Business Name
		-Description
		-Hours(operating hours)
		-Address
		-Phone Number
		-Website
	-Pagination?? Yes or no?
	-Will I add multiple businesses', if so that pagination may be a good thing so I don't take away from the user experience.


Details Page
	-Google Maps API for this.
	-Details from the listing page should be presented. 
	-User-friendly


Sign-In Page
	-Two fields;  Username and password
	-Make sure to use "type" of password input so that we cannot see which characters we are typing.
	-Upon login, the user cookies and possibly store the user in the redux state. That's up to me. 
	-Once logged in, 
		-add a small bar below the navbar, that exists on every page while logged in, that notifies the user they are logged in and shows their username. 

Requirements for a logged-in user
Do conditional rendering on the login page so that the "login" link doesn't show up when you login; instead, it shows logout.
	-Only a user can delete a listing.
	-Only a user can navigate to the "/add" page which should be protected by a Private route. 
	-Only a user has access to the "admin view"

Requirements/capabilities for a logged-out user
	-Can see the "listing" page.
	-Can see the "details" page.
	*WHEN THE USER LOGS OUT, REMOVE THE COOKIES AND RESET THE 'USER' STATE IN REDUX.


Admin Page when LOGGED IN
	*EVERYTHING FROM THE ABOVE LISTING PAGE
	-Conditionally render a 'delete' column on that table with an icon so that the user can delete a given row. 


Add New Listing Page
	-Provide a form with which the logged-in user can enter data about a new small business and save it.
	-Once saved, it should be added to the Redux store and should automatically be populated in the Listing table when you navigate back to that page.
	-This "Add" page should be protected by a private route which means a user can't navigate to it if they are not logged in.
	-Update the Google Map as you fill out the address field so that the user gets a preview regarding the address.
	-You would do something like that using the componentDidUpdate functionality of a class component.

**TECHNICAL FRAMEWORK**

Components
    -Header 
        -Header display is on all pages.
            -LBK Small Business
            -'Listing'
        -With conditional ternary operator for filtering when logged in.
            -Displays 'Listing' and 'Login' when logged out.
            -Displays 'Listing', 'Add' and 'LOGOUT' when logged in.

    Sign-In
        -no need to authenticate user.
        -once logged in, switch login button to display 'logout' until user logs out. 
        -once logged out, remove cookies and reset the 'user' state in redux. 
        -Ternary operator brings in 'app bar' that shows 'Logged in as: username' when logged in.

    Listing
        -brings in business information from API calls

    Add New Listing

    Import 



	

Redux State
	-user
	-listings
	-map

Redux Actions
    -delete a listing
    -add a listing
    -login/logout
    -fetch coordinates for your map

React Router
    -search 'Private Routes React' in Google or look at previous homework. 
    -Private Routes
        -Add New Listing
        -Admin View
        -Delete function
    Your "isAuthenticated" function that complements the private route may use the "cookie" npm package to parse the cookie. Remember you can set a cookie by writing document.cookie = "user=<USERNAME>;max-age=60*1000*5;

Login
    -you do not have to validate the login. Using any username and password combo is okay for this project.

Add Listing
    If you use componentDidUpdate you'll know when certain properties of state have changed. You'll probably be changing these properties as you type in the Text field. If the address has changed, you can use this to call your getCoordinates action (or whatever you named it) and get the lat/lng for your map. This will allow you to update your map in real time.