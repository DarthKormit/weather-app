

function createSearchBar() {
  let searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  let searchBar = document.createElement("div");
  searchBar.className = "search-bar";
  let searchForm = document.createElement("form");
  searchForm.action = "/action_page.php";
  let searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchInput.name = "search";
  let searchButton = document.createElement("button")
  searchButton.type = "submit";
  searchButton.innerHTML = "&#128269;";
}

export {createSearchBar};