/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

const studentList = document.getElementsByClassName('student-item cf');
const listLength = studentList.length;
let page = 1 ;
const itemsPerPage = 10;
const totalPages = Math.ceil(listLength/itemsPerPage) ;
const pageDiv = document.querySelector('.page');

const showPageItems = (page,items) => {
    let start = (page * 10) -10;
    let stop = (start + 9);
    for (let x=0; x < items.length; x++ ) {
      if (x >= start && x <= stop)  {
          items[x].style.display = 'block';
      } else {
          items[x].style.display = 'none';
      }
    }
}
showPageItems(page,studentList);

//got hints from https://github.com/awillem/project-2-list-pagination/blob/master/js/script.js

 const pagination = (pageCount) => {
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    const paginationUl = document.createElement('ul');

    for (y = 1; y <= pageCount; y++) {
      const paginationLi = document.createElement('li');
      const paginationA = document.createElement('a');
      if (y === page){
          paginationA.className = "active";
      }
      paginationA.href = "#";
      paginationA.textContent = y;
      paginationLi.appendChild(paginationA);
      paginationUl.appendChild(paginationLi);
      // listener
      paginationA.addEventListener("click", (e) => {
        let prevActive = document.querySelector('.active');
        prevActive.classList.remove('active');
        page = paginationA.textContent;
        e.target.className = "active";
        showPageItems(page,studentList);
    });

    paginationDiv.appendChild(paginationUl);
    pageDiv.appendChild(paginationDiv);
    }
}

pagination(totalPages);
