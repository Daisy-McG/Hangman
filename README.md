# JavaScript Hangman Game
The live website can be found [here]()

## Purpose

This Website was created for the sole purpose of completing the second Milestone Project for the Code Institute's Full Stack Developer course. It was built using the knowledge gained from the HTML, CSS, User Centric Design, JavaScript Fundamentals and Interactive Frontend Development modules. A full list of technologies used can be found in the [technologies](#Technologies-Used) section of this document.

## Table of Contents
* [User Experience Design (UX)](#User-Experience-Design)
    * [The Strategy Plane](#The-Strategy-Plane)
        * [User stories](#User-Stories)
    * [The Scope Plane](#The-Scope-Plane)
    * [The Structure Plane](#The-Structure-Plane)
    * [The Skeleton Plane](#The-Skeleton-Plane)
        * [Wireframes](#Wireframes)
    * [The Surface Plane](#The-Surface-Plane)
        * [Design](#Design)
            * [Colour Scheme](#Colour-Scheme)
            * [Typography](#Typography)
            * [Imagery](#Imagery)
    * [Differences to Design](#Differences-to-Design)
- [Features](#Features)
    * [Existing Features](#Existing-Features)
    * [Future Features](#Features-Left-to-Implement)
* [Technologies](#Technologies)
* [Testing](#Testing)
* [Deployment](#Deployment)
    * [Project Creation](#Project-Creation)
    * [GitHub Pages](#Using-Github-Pages)
    * [Locally](Run-Locally)
* [Credits](#Credits)
  * [Content](#Content)
  * [Media](#Media)
  * [Acknowledgements](#Acknowledgements)
  * [Comments](#Comments)

****

## User Experience Design
### **The Strategy Plane**
This website was created to showcase my knowledge of HTML, CSS & JavaScript and to provide users with some entertainment in the form of an online Hangman game created with JavaScript and SVG and jQuery. The game should be easy to understand, simple to interactive with and give feedback to the user on all inputs.

Site Goals:
* To showcase the skills I have learnt in HTML, CSS, JS.
* To provide users with an interactive game to play that has clear Win / Lose Scenarios.
* To create an enjoyable, interactive game that makes the user want to stay and play again.
* To create a game that makes the user want to return to the website.

#### User stories
* As a user, I want to easily understand the main purpose of the site.
* As a user, I want to view the website and content clearly on any device.
* As a user, I want to have instructions on how to play the game so that I can easily understand the rules.
* As a user, I want to be able to start a game when I am ready.
* As a user, I want to know whether my guess was successful or not.
* As a user, I want a way to start a new game when the current game has ended.
* As a user, I want to see my score so that I know how many games I have won or lost.

### **The Scope Plane**
Features planned:
* Page Heading - A page heading that has a clear caption what the page is about.
* An interactive Hangman Game.
* Game Instructions - Clear instructions on how to play the game.
* An SVG drawing of Hangman.
* Start Button.
* Correct Guesses displayed.
* Score Count.
* Wrong Letters displayed.
* Restart Game button.
* Error messages with incorrect guesses.
* Win / Lose information.
* Footer Items - Contact Information and link GitHub Profile / Repo.

**Feature Scale** <br>
![Features](assets/images/scope.jpg)

### **The Structure Plane**

User Story:
> As a user, I want to easily understand the main purpose of the site.
 
 Acceptance Criteria:
* Header displayed with text 'Hangman'
* Sub heading displayed with text 'Can you guess the word?'

Description:<br>
There will be a page heading added that reads 'HangMan' with a tag line below it reading 'Can you guess the word?'. This will enable the users to immediately see what the site is about as soon as they enter.

User Story:
> As a user, I want to view the website and content clearly on any device.
 
 Acceptance Criteria:
 * Website layout is well displayed and readable across all sized devices.

Description:<br>
Bootstrap will be used to lay the content of the Website out in containers, rows and columns. Mobile first design will be used when coding the project and testing will be required to ensure the layout is clear on all devices. No elements should overlap their containers and all items should be responsive so that no elements are too large to display properly.

User Story:
> As a user, I want to have instructions on how to play the game so that I can easily understand the rules.
 
 Acceptance Criteria:
 * Game Instructions are provided that contain the following information:
    * How to interact with the game.
    * How to win the game.
    * How to lose the game.

Description:<br>
Information to be included:
A full set of game instructions will be added to the game board. This will display to the user, information on how to input guesses, what inputs are accepted, how to win or lose the game.<br>
Inccorect letter guesses will be shown under 'Wrong Letters' on the game board to that the user can see what letters have already been used.<br>
If you lose the game, the correct word will be revealed to ensure the user is able to see what the answer was.<br>
Only letters in the English alphabet will accepted as the words will be written in English.<br>
You may only enter a letter once as words with duplicate letters will be counted as one guess.<br>
User input letters are case insensitive.

User Story:
> As a user, I want to be able to start a game when I am ready.
 
 Acceptance Criteria:
 * User can initiate game play

Description:<br>
A button will be added to the game board to allow the user to start a game.

User Story:
> As a user, I want to know whether my guess was successful or not.
 
 Acceptance Criteria:
 * Successful letters are displayed
 * Unsuccessful letters are displayed

Description:<br>
If the user enters a successful guess, the word will be updated with the letter, leaving the remaining unguessed letters blank.<br>
If the user enters an unsuccessful guess, this will be displayed in the 'Wrong Letters' section of the game board.

User Story:
> As a user, I want a way to start a new game when the current game has ended.
 
 Acceptance Criteria:
 * User has a way to restart the game without refreshing the page.

Description:<br>
A button will be added to the game board upon completion of the game to allow the user to start a new game. This will generate a new word each time.

User Story:
> As a user, I want to see my score so that I know how many games I have won or lost.
 
 Acceptance Criteria:
 * User Win / Lose scores are displayed on Screen

Description:<br>
A score section will be added to the page to show the user how many games they have won or lost during their session. This score will only be dislayed for the current session. Once the browser is closed, the score will not be available next time the user goes to the site.

### **The Skeleton Plane**
#### Wireframes
Mobile and Desktop view
![Wireframes](assets/images/wireframe.JPG)

### **The Surface Plane**
### Design

#### Colour Scheme
Body colour: A Dark Grey![#373638](https://placehold.it/15/373638/000000?text=+)<br>
Text colour: White ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+)<br> 
Game Board background colour: A light grey ![#868686](https://placehold.it/15/868686/000000?text=+)<br>
Header and Footer background: A shade of light red ![#9E5656](https://placehold.it/15/9E5656/000000?text=+)<br>

#### Typography
The headers on all pages throughout the Website are using the [Playfair Display SC](https://fonts.google.com/specimen/Playfair+Display+SC) font while the main text is using the [Rokkitt](https://fonts.google.com/specimen/Rokkitt) font.

#### Imagery
No physical images will be used on the site. A Hangman image will be drawn with code by using Scalable Vector Graphics (SVG) to display this on the HTML page.

#### Differences to Design
****
## Features

### Existing Features

### Features Left to Implement
****
## Technologies
* [HTML](https://en.wikipedia.org/wiki/HTML)
	* This project uses HTML as the main language used to complete the structure of the Website.
* [CSS](https://en.wikipedia.org/wiki/CSS)
	* This project uses custom written CSS to style the Website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
	* This project uses JavaScript for functionality through the Website, this includes the puzzle game, onclick button functions, use of the Email API and Google Maps APIs.
* [Bootstrap](https://getbootstrap.com/)
	* The Bootstrap framework is used throughout this website for layouts and styling. 
* [Google Fonts](https://fonts.google.com/)
	* Google fonts are used throughout the project to import the *Playfair Display SC* and *Rokkitt* fonts.
* [Visual Studio Code](https://code.visualstudio.com/)
	* VS Code is the Integrated Development Environment used to develop the Website.
* [GitHub](https://github.com/)
	* GithHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [Git](https://git-scm.com/)
	* Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.
* [TinyJPG](https://tinyjpg.com/)
	* TinyJPG is used to reduce the file sizes of images before being deployed to reduce storage and bandwith.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
	* Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles.
* [balsamiq Wireframes](https://balsamiq.com/wireframes/)
	* This was used to create wireframes for 'The Skeleton Plane' stage of UX design.
* [CSS Generator](https://cssgenerator.org/rgba-and-hex-color-generator.html)
    * This was used to convert the RGBA colour for the site to Hex. 
* [Favicon](https://favicon.io/)
    * Favicon.io was used to make the site favicon 
* [Techsini](http://techsini.com/multi-mockup/index.php)
    * tecnisih.com Multi Device Website Mockup Generator was used to create the Mock up image in this README.
* [placehold.it](https://placehold.it)
    * placehold.it was used to display the colours shown in the Color Scheme section.

****
## Testing

**Bugs found and fixed during testing:**
****
## Deployment

### Project Creation
To create this project I initialised the repository by typing the following command into the bash terminal in Visual studio code:
* git init

For the initial commit I clicked on the Source Control menu on the side bar in Visual Studio code. Added the change to the staging area by clicking the '+' icon next to the file name. I then added a commit message in the text box below source control. Lastly I clicked on the Public to GitHub icon in the bottom left hand side of Visual Studio Code and I was then prompted with the following two options:
    
    * Publish to GitHub private repository
    * Public to GitHub public repository

I selected publish to GitHub public repository and my first commit was published.

The following commands were used for version control throughout the project:
* git add filename - This command was used to add fils to the staging area before commiting.
* git commit -m "commit message explaining the updates" - This command was used to to commit changes to the local repository.
* git push - This command is used to push all commited changes to the GitHub repository.

### Using Github Pages
1. Navigate to the GitHub [Repository:]()
1. Click the 'Settings' Tab.
1. Scroll Down to the Git Hub Pages Heading.
1. Select 'Master Branch' as the source.
1. Click the Save button.
1. Click on the link to go to the live deployed page.

### Run Locally
1. Navigate to the GitHub [Repository:]()
1. Click the Code drop down menu.
1. Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
1. Open your developement editor of choice and open a terminal window in a directory of your choice.
1. Use the 'git clone' command in terminal followed by the copied git URL.
1. A clone of the project will be created locally on your machine.

****
## Credits

### Code
The JavaScript hangman game was created by following a tutorial on [Udemy Course](https://www.udemy.com/course/web-projects-with-vanilla-javascript/).
### Media

### Acknowledgements
****
## Comments
