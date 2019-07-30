# Avochato-Challenge

[Live Site](https://dmyasnyankin.github.io/Avochato-Challenge)


# Part 1

For Part 1 of the challenge I used the React library to create the carousel.
I decided to split up the App into 3 main components: 

### The `Carousel`: 
Would be responsible for holding all of the logic regarding the carousels functionality and display each of the pictures.

Inside of this component I included methods `previousPic()` and `nextPic()` that were responsible for checking the pictureArrays index and deciding whether to move it up or down or reset it if it went over the amount of pictures available to be displayed or set the index to the last index if it went below the 0 index

### The `PicScroller`:
Would be used to display the picture in question 

### The `Arrow`: 
Would be used to navigate from one picture to the next

##### I then placed all of the CSS logic inside of one css file `index.css` to style the site


# Part 2

For Part 2 of the challenge all of the code was put into the `vanilla.html` file. I made an ordered list with each 
list item representing one of the pictures
  
Inside of the <script> tag I built out the carousel logic.
  
It would set a counter to keep track of the index of the list item, along with and imageIndex to see the amount of items in the ordered list. 

Inside of the carousel logic there was a move function that would move the counter up or down by 1 depending on which button
was clicked. I had a conditional checking whether the direction was equal (which would show the next image) to one and the amount of images went over the amount of images in the list, in which case the counter would reset at 0, and a conditional checking whether the direction was equal to -1 (which would show the previous image) and if the amount of images on the list was less than 0 which would reset the counter at the last image in the list.

Inside of the move function the list item would remove the "current" class and add it to the new space the user wanted to go to. This class was responsible for showing the image in question.

Event listeners were added to the next and previous buttons to then use the move function.

I used the Avochato logo as the icon in the site. Creds to avochato.com
