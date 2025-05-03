document.getElementById('start').addEventListener('click', () => {
    const inputText = document.getElementById('inputList').value.trim();
    const lines = inputText.split('\n').map(s => s.trim()).filter(Boolean);
  
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: automateSearchAndDownload,
        args: [lines]
      });
    });
  });
  
  function automateSearchAndDownload(queries) {
    let index = 0;
  
    function processNext() {
      if (index >= queries.length) {
        console.log("All queries processed.");
        return;
      }
  
      const query = queries[index++];
      console.log("Processing:", query);

      // STEP 1: Set search type to "Exact Bid Search"
      const dropdown = document.querySelector('#search_concept');
      if (dropdown && dropdown.textContent.trim() !== "Exact Bid Search") {
        const bidOption = Array.from(document.querySelectorAll('.serchItem a')).find(a => a.textContent.includes("Exact Bid Search"));
        if (bidOption) bidOption.click();
      }
  
      // STEP 2: Fill search box
      const searchInput = document.querySelector('#searchBid');
      if (!searchInput) {
        alert("Search input not found!");
        return;
      }
      searchInput.value = query;
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));

      // STEP 3: Click search button
      const searchButton = document.querySelector('#searchBidRA');
      if (!searchButton) {
        alert("Search button not found!");
        return;
      }
      searchButton.click();
  
      // STEP 4: Wait and get download link
      setTimeout(() => {
        const resultLink = document.querySelector('a.bid_no_hover');
        if (resultLink) {
          const href = resultLink.href;
          console.log("Opening:", href);
          window.open(href, '_blank');
        } else {
          console.warn("No result found for query:", query);
        }

        // Wait before processing next query
        setTimeout(processNext, 2000);
      }, 2000); // Adjust based on page load speed
    }

    processNext();
  }
  