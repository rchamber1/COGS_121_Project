# COGS 121 Project - Final

## Group Name

	Accessibility for All 2.0

## Group Members

	Juan Zapien
	Ellisa Lee
	Ryan Chambers
	Amparo Davalos

## Group Contributions

Juan Zapien - He worked on debugging a lot of the code and making sure that all the functionality was working correctly. Juan also focused on implementing user accounts and also worked on the SQLite database set ups. Other code that Juan worked on along with everyone else was storing user data to the database and presenting it to the user that was logged in. Overall Juan worked on most of the code along with all other members.

Ellisa Lee - She worked on designing UI layouts from low-fidelity to high-fidelity screens. Along with layouts, she worked on choosing, designing, and creating UI components (such as color scheme, fonts, main home buttons, visuals) that fit the design of the app.  She implemented intro.js to give tutorials to the novice users. She also worked on creating database for regions page that has GET/POST functions during AJAX calls. Nonetheless, she worked most of the code collaboratively with her teammates.
	
Amparo Davalos - Her contributions to team's project involved working in several areas of it. Some of the main contributions included incorporating the data visualization and working with the databases from different parts of the web application. In addition, she worked on implementing the initial stages of some of the UI as well as working on different pieces of functionality code with the rest of the team members.

Ryan Chambers - His contributions centered around many pieces of the project, as all of the group memberes worked together for a majortiy of what was completed. He started with working on a high fidelity mock-up of the orginal app design. As work on the code started, his main contributions were in layout of the code files (i.e. how all of them would be organized and connected) as well as the javascript functionality for tracking the page time visits. He also spent time helping in design of the pages and formatting of the data storage and retrival.

## Source Code

#### account_edit.css
This file makes additions to the overall style of the site, particularly for the create an account page, which edits the locations of the input boxes and gives style to the buttons.
#### home_edit.css
This file contains small additions to the home page of the website, including the four clickable buttons to navigate to each of the website elements.
#### login_style.css
This contains additions to the style of the login page, such as the static brain image and the positioning of the input text boxes.
#### style.css
This contains the code to control the overall style/layout of the entire website, declaring the font types, coloring, element positionings/padding, and all other stylistic aspects of the website.
#### account.html
This houses the source code for the page where users create an account. It allows them to enter a username, and a password (twice, which it verifies are matching). This username and password create an account which is stored in the database of users.
#### brainmodel.html
This is home to the brain browser API we've included, which provides a 3D, interactable model of the brain for users to play around with and explore.
#### conditions.html
This houses the basic format and ajax calls for the conditions information. When opened, it defaults to Alzheimer's and allows for in-page reloading between each of the available conditions. This is also the source for the timing javascript functionality.
#### index.html
This is the first page reached when running the site: the login page. If a user has already created an account, it will allow them to login, and if not, it has a feature to take them to the account page to create an account.
#### regions_detail.html
This page, much like the conditions page, houses the basic structure of the information for the regions of the brain, which pulls from a database to allocate. Ajax allows for in page reloads between each of the regions and javascript functions track and store the visits and page time on each of the pages.
#### tracking.html
This page houses the data visualizations to allow the users to track their studying progress. There is a guage chart that tracks total page time use overall, showing how close they are to reaching goals we have predetermined. There are also bar charts to represent the total and average time spent on each of the individual regions and conditions pages.
#### img (image files)
These are all of the static images utilized in running the site, including button images and brain images, among others.
#### create_database.js
This creates the database to store the information for the regions page, including the text information and headers which work in with the ajax.
#### create_database1.js
This creates the databse for the conditions page, simiarly storing the conditions information for each of the available brain conditions (including Alzheimer's, stroke, etc.).
#### create_database2.js
This creates the final database to house the user profile information (username, password), along with total page time and total page visits for each of the individual regions and conditions, which are later used for logging in and data visualization.
#### server.js
This is the main driver for the backend of our site. It launches/hosts the site itself, and contains informaition for managing the database usage and user profiles.


## Link to Video
[Link to 'NeuroViz' demo video](https://drive.google.com/file/d/1pY8k52e_Xj6ZYYy2GoFvj5Zcl8AbHNte/view?usp=sharing)

