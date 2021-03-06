## JS/React app cleanup

Jenny is a newbie developer that has decided to learn Javascript and React. She wrote this simple application to keep track of which movies she wants to see, and which ones she has seen.

She knows it is not great, and she has now asked you to take a look at it, to give feedback and pointers. She also wants to see how she could have done it in a better way.

### Your task:

1. **Create a git repo using this code.**
2. **Add one commit with in-code comments, pointing out any bad patterns or strange choices made.**
3. **Add any number of commits to make the application maintainable and better looking.**
4. **Add any relevant instructions to run the app in the README.**
5. **Push code to any git hosting providers like github or gitlab. Share the repo with us.**

Do not spend more than two hours on this assignment. Keep it simple!

---
### First Commit:

1. Updating react and adding styled-components.
2. Renamimg files to .jsx for additional possibilities. (Not really needed here. More that I'm used to writing in jsx.).
3. Splitting code in a components folder.
4. Re-writing the index-file.
5. Basic styling and so far no errors or warnings - also no functions

### Second Commit:
1. Rewriting, but still keeping the functions to get items from localStorage. Both for the movielist and watched movies. Might have to be changed.
2. Rewriting the Form.
3. Checking so that the movies gets displayed in watchlist when page is loaded.

### Third Commit:
1. Created a card-component to display the movies.
2. Made the function to add movies from form working. Used the previous add-function as base.
3. Added a clear-form function (got annoyed with old input hanging around when testing).

### Fourth Commit:
1. Added function to add movies to already watched.
2. Reusing the same card used in watchlist.

### Fifth Commit:
1. Functions to remove movies

### Sixth Commit:
1. Made buttons in watchlist to disabled when clicked to avoid same movies as watched multiple times.
2. Corrected a misstake in the remove function for already watched movies.

### Seventh Commit:
1. Crated a footer just for the fun of it
2. Realized I have made a misstake which is too late to correct.

### Eighth Commit:
1. Styled the readme a bit.
2. Added how to run the application.
</br>
## To run:
$ yarn start