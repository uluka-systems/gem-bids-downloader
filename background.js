chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.downloadLink && message.filename) {
      chrome.downloads.download({
        url: message.downloadLink,
        filename: message.filename,
        conflictAction: "uniquify"
      }, downloadId => {
        console.log("Started download:", downloadId);
      });
    }
  });
  