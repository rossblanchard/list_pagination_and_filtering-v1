# list_pagination_and_filtering-v1

This project uses unobtrusive JavaScript to add pagination to a list of student records.

The script.js file consists of two functions:

The showPageItems function creates an list of ten student records for any given page from the entire student record list HTML collection, eg: page one has records 1-10, page 2, 11-20, and so on.

The pagination function creates the page button links given the number of pages. It highlights the page you are currently on. Its button links call the showPageItems function and passes to it the page value and the student record html collection.

Tested against 44 and 64 students index.html files.
Tested that index.html works without this js file.
Tested in Chrome, Firefox and Safari. tested in mobile mode in Chrome dev tools.
