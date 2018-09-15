/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//got hints from https://github.com/awillem/project-2-list-pagination/blob/master/js/script.js
//and https://github.com/VincentElliott/List-Pagination-and-Filtering/blob/master/js/script.js

const studentList = document.getElementsByClassName('student-item cf'); //HTML collection of all student list items
const listLength = studentList.length; //save the length of the collection in its own const
let page = 1 ; //set the initial page here. it will change
const itemsPerPage = 10; //ten items per page
const totalPages = Math.ceil(listLength/itemsPerPage) ; //calcualte how many pages there are. Round up.
const pageDiv = document.querySelector('.page'); //const for the .page div so we can add an element later.

//function to show student list of ten or fewer for any given page

const showPageItems = (page,items) => {
    let start = (page * 10) -10;              //set first student item in the collection to display based on the page #
    let stop = (start + 9);                   //set last student item in the collection to display  based on the page #
    for (let x=0; x < items.length; x++ ) {   //loop over entire collection
          items[x].style.display = 'block';   // set style.display to 'block'
      } else {
          items[x].style.display = 'none';    //otherwise, set it to 'none'.
      } //end if/else
    } //end for loop
} //end showPageItems function

showPageItems(page,studentList);              //call the function

//function to build the pagination links and an event listener to listen for clicks.

 const pagination = (pageCount) => {
    const paginationDiv = document.createElement('div');  //const to create a new div, set class to pagination as instructed
    paginationDiv.className = 'pagination';
    const paginationUl = document.createElement('ul');    //create an unordered list within pagination div

    for (y = 1; y <= pageCount; y++) {                    //loop through page count to build appropriate number of links
      const paginationLi = document.createElement('li');    //create list item
      const paginationA = document.createElement('a');      //create anchor tag
      if (y === page){
          paginationA.className = "active";               //set the class to active for the page we're on. Always begins at 1
      } //end if
      paginationA.href = "#";                             //set url to # to take us to page top.
      paginationA.textContent = y;                        //set the display value (page number) using loop counter value.
      paginationLi.appendChild(paginationA);              // append the anchor to the Li
      paginationUl.appendChild(paginationLi);             //append the Li to the UL

      // event listener on the anchor tag waiting for a click
      paginationA.addEventListener("click", (e) => {
        let prevActive = document.querySelector('.active');   //reset the active page value by searching for '.active'
        prevActive.classList.remove('active');                //and removing it from the 1st thing we find it attached to.
        page = paginationA.textContent;                       //set page var to the text value of the Li. Tried using "y" but didn't work.
        e.target.className = "active";                        //set the new clicked on page to active.
        showPageItems(page,studentList);                      //call page builder function to run with the new page.
    }); //end listener

    paginationDiv.appendChild(paginationUl);              //append the UL we created to the Div we created in this function
    pageDiv.appendChild(paginationDiv);                   //append the div we created in the function to the main div
  } //end for loop
} //end pagination function

pagination(totalPages);                                 //call the pagination function passing it the number of page links to build
