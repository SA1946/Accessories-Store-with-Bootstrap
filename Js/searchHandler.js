export class searcHandler {
  constructor(All_Products) {
    this.All_Products = All_Products;
    this.searchInput = null;
    this.resultsContainer = null;
  }

  setUpSearch(searchInput, resultsContainer) {
    this.searchInput = searchInput;
    this.resultsContainer = resultsContainer;
    // Debounce function
    let searchTimeout;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      if (query.length === 0) {
        this.hideResults(resultsContainer);
        return;
      }
      if (query.length >= 2) {
        // Debounce search
        searchTimeout = setTimeout(() => {
          this.performSearch(query, resultsContainer);
        }, 500);
      }
    });

    // Handle form submit
    // const form = this.querySelector("form");
    const form = searchInput.closest("form"); // this will we find the parent
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          this.performSearch(query, resultsContainer);
        }
      });
    }

    // Hide results when clicking outside
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target)) {
        this.hideResults(resultsContainer);
      }
    });
  }

  performSearch(query, resultsContainer) {
    const results = this.searchData(query);

    this.displayResults(results, resultsContainer, query);
  }

  searchData(query) {
    const lowerQuery = query.toLowerCase();

    const results = [];

    // Search in your data array
    this.All_Products.forEach((item) => {
      // Customize this find product
      const searchableFields = [
        item.category || "",
        item.name || "",
        item.description || "",
        item.brand || "",
      ]
        .join(" ")
        .toLowerCase();

      if (searchableFields.includes(lowerQuery)) {
        results.push({
          ...item,
          relevance: this.calculateRelevance(searchableFields, lowerQuery),
        });
      }
    });

    // Sort by relevance
    return results.sort((a, b) => b.relevance - a.relevance);
  }

  calculateRelevance(text, query) {
    const matches = (text.match(new RegExp(query, "gi")) || []).length;
    const titleBoost = text.startsWith() ? 2 : 1;
    return matches * titleBoost;
  }
  //a Regular Expression (RegExp or regex) is an object that defines a search pattern for characters within strings.
  //the /gi flag combination allows a regular expression to find all occurrences of a pattern within a string, regardless of their case.

  displayResults(results, resultsContainer, query) {
    if (results.length === 0) {
      resultsContainer.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
      resultsContainer.style.display = "block";
      return;
    }

    const maxResults = 6; 
    const limitedResults = results.slice(0, maxResults);

    resultsContainer.innerHTML = `
      <div class="search-dropdown">
        ${limitedResults
          .map(
            (item) => `
          <div class="search-result-item d-flex justify-content-between   align-items-center" data-id="${
            item.id || ""
          }">
            <div>
                        <img class=" searchOutput "  src="${item.img[0].img}" />
            <strong>${this.highlightMatch(item.name || "", query)}</strong>
            </div>
            <div class=" d-flex flex-column " >
            <del class=" fw-light "  > $${item.oldPrice} </del>
            <p class=" fw-bold "  > $${item.newPrice} </p>
            </div>
          </div>
        `
          )
          .join("")}
        ${
          results.length > maxResults
            ? `<div class="text-muted small text-center">... and ${
                results.length - maxResults
              } more results</div>`
            : ""
        }
      </div>
    `;

    resultsContainer.style.display = "block";

    // Add click handlers for result items
    resultsContainer.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const itemId = e.currentTarget.getAttribute("data-id");
        this.handleResultClick(
          itemId,
          resultsContainer,
          results.find((r) => r.id == itemId)
        );
      });
    });
  }

  highlightMatch(text, query) {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
    // return text.replace(regex, `<mark>${query}</mark>`);
    //So $1 preserves the original case/formatting of the matched text while wrapping it in the <mark> tags!
  }

  handleResultClick(itemId, resultsContainer, item) {
    // Dispatch event when result is clicked
    document.dispatchEvent(
      new CustomEvent("search-result-clicked", {
        detail: { itemId, item },
      })
    );

    // Hide results
    this.hideResults(resultsContainer);    
    this.searchInput.value = "";
  }

  hideResults(resultsContainer) {
    resultsContainer.style.display = "none";
    resultsContainer.innerHTML = "";
  }
}
