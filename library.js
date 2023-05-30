// Event listener for branch selection
const branchSelect = document.getElementById('branch');
branchSelect.addEventListener('change', function() {
  const selectedBranch = branchSelect.value;
  filterBooksByBranch(selectedBranch);
});

// Function to filter books by branch
function filterBooksByBranch(branch) {
  const bookList = document.getElementById('bookList');
  const books = bookList.getElementsByTagName('div');

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookBranch = book.dataset.branch;

    if (branch === '' || branch === bookBranch) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  }
}

// Initial filter
filterBooksByBranch('');
