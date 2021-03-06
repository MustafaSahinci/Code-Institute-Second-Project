# Spongebob Memory Game
## 1. Purpose of the project
This site is made for kids who want to relax and play a Spongebob game. Because the children are already familiar with the characters, remembering is a bit easier. So I also made more difficult levels and a countdown timer to make it more challenging. They can also listen to the Spongebob theme song while they are playing.  

Users of this website will be able to read how to play and then choose a difficulty. while the user is playing the user can see how many flips they made and how much time is over. The user can also click on play at the top of the game to listen to the Spongebob theme song or click pause if they don't want to listen. The users can reset the game if they want and start over, they also can quit the game and choose another difficulty. When the user found all the matches they gonna get a congratulations message where they can see how many moves they made and how much time is left.

![i am responsive](docs/responsive.png)
for the live site click
[here](https://mustafasahinci.github.io/Code-Institute-Second-Project/)

# 2. User stories
- As a game player, I would like to read first how to play the game.
- As a game player, I would like to choose the difficulty.
- As a game player, I would like to choose if I want to listen to the song or not.
- As a game player, I would like to flip the cards and find the matches.
- As a game player, I would like to see how many flips I am making and see how much time is left.
- As a game player, I would like to see a message after I win the game where I can see how many moves I did and how much time is left.
- As a game player, I would like to switch between the difficulty levels and reset the game and start over.

# 3. Features
## Home page
![home page](docs/home-page.png)
## Header
Featured at the top of the page, the Spongebob memory game logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game. The header is the same on all the pages.
![header](docs/header.png)
## buttons and modals
when the user clicks on the buttons they can see a modal. If they press the how to play button they can read how to play. If they press the play button they can choose a level to go to the game, The user can choose out of 3 levels easy,medium and hard. They can close the modal by pressing the cross or clicking anywhere outside the modal.
![how to play modal](docs/how-to-play.png)
![play modal](docs/play.png)
## The game and levels
The user can play the game here, When the user clicks on the first card the countdown starts. The user must find all the matches to win the game. The countdown for easy mode is 60 seconds, for medium mode it is 90 seconds and for hard mode it is 120 seconds.
![easy](docs/easy.png)
![medium](docs/medium.png)
![hard](docs/hard.png)

## flip, timer and play, pause buttons
The user can see here how many flips he made, how much time is left and can click on the play button to start the song or the pause button to pause it.
![flip,timer and play pause buttons](docs/flips-timer-song.png)

## reset and quit button
The user can reset the game here and start over, and the user can click quit to go to the home page and choose another difficulty.
<br>
![reset and quit button](docs/reset-quit.png)

## modal after win and times up
When the user wins the game a modal is gonna pop up with congratulations message, the user can see how many flips he made and how much time is left
![win modal](docs/win-modal.png)
if the user doesn't find all the matches in time, the user gets a modal message to try again
![times up modal](docs/times-up.png)

# 4. Future features
- a high score section
- a price every week for the best high score
- Sound when the cards are clicked
- style the modal different with a picture of Spongebob
- a modal for when the user clicks on reset or quit that says "are you sure" ?

# 5. Typography and color scheme
I used the Spongebob font which I found on https://www.fontspace.com/,
And for the colors and theme I choose a Spongebob background with blue colors to represent the sea. The images for the characters are without background so it looks better in the cards. 

# 6. Technology
These are the Technology I used for this project.

- HTML5 for markup
- CSS3 for style
- Javascript for the logic
- https://www.fontspace.com/
- TinyPng
- Font Awesome
- Git for version control, using the terminal to commit - to Git and Push to GitHub
- Gitpod
- Github to store the projects code after being pushed from Git
- Chrome Developer tool to edit my css in real time
# 7. testing 
The game is tested on Google Chrome, Windows Edge, and firefox.
The site is responsive on all devices, tested with Chrome Developer tool.
## lighthouse desktop
![lighthouse desktop](docs/lighthouse-destkop.png)
## lighthouse mobile
![lighthouse mobile](docs/lighthouse-mobile.png)
## html and css validator
![html validator](docs/html-validator.png)
![css validator](docs/css-validator.png)
## jshint 
![jshint](docs/jshint.png)
## bugs
There is one know bug in the game, it didn't work on iphone's safari. As the SO solution link mentioned and the tutor on Code Institute : adding the vendor prefixed style should take care of the issue on safari. I added all vendor prefixed style's, But it is still not working. Unfortunately I couldn't test and verify the solution because I am not an apple user.
The issue is mainly caused by browser discrepancy and compatibility with the CSS transform.
# 8. Deployment
This website was deployed to GitHub pages :

## gitpod
1. In gitpod workspaces
2. I choose the right workspace/repo
3. Now i can write my code and readme
4. To open my site I type : python3 -m http.server , in the terminal
5. To save my code i Type in the terminal : git add .
6. I type git commit -m "comment"
7. I type git push to push it to github

## github
1. In the GitHub repo I click on settings tab
2. then choose pages in the side bar 
3. Once I chose the main Branch the page provided the link to the completed website.

# 9. credits
- My mentor Rohit Sharma
- Code institute slack community
- Stackoverflow
- w3schools
- The youtube tutorial from Marina Ferreira https://www.youtube.com/watch?v=ZniVgo8U7ek

# 10. media
Images from google