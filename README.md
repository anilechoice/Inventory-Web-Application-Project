# Anile's Book Inventory

Welcome to Anile's Bookstore! This webpage allows for the user to:
* View the available books
* Add to the Available books with the follow required keys
    * title
    * author
    * price
    * book cover
    * availability (in stock or unavailable)
* Remove the books that they add if no longer available
* Remove the books that were already present, if the are no longer available

## How the Bookstore was Built

There were a few steps to this inventory web application project, which require a few files to work together in order for the functionalities to operate successful. Where to start can vary from person to person but, as for me, my process went as follows:
1. I began by creating my .css, .js, and .html files.
2. Once the three files existed I moved into the html file to set it up. I began with the doctype, then set up the head. Once that was complete, I began to flesh out the body.
3. When building the body, I decided it should contain the element header and the element section with the class container to hold our grid.
4. I created a two column grid, one containing the inventory and the other containing the form to submit the inventory.
5. Once the html was set up, I moved on to the js file and set up the functionality for the inventory page. This consisted of using higher order functions to add event listeners to a created form so that information of the created elements could be appended to form. I also created functionality for the buttons so that those worked not only in the form, but on the preexisting books within the inventory.
6. After the js file was up and running correctly, I moved on to the css file. This is where I styled the page to make it more appealing to the eye and also to add media queries. I decided that for a max width of 799px and a min width of 400px, the page would make the two columns into one, as well as resize the textboxes and center all the text to the page.
7. Once the css file was to my liking, I tested within the webpage to ensure all things within the project were working correctly.

### Overall,
This project had many moving parts but was a greate example for the use of DOM manipulation, higher order functions, hmtl, and css and served as greate practice for what it would be like to use these concepts in real-world coding scenarios.