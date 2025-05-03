# GeM Helper - Product Bids (Chrome Extension)

**GeM Helper** is a custom Chrome extension designed to automate the process of searching for multiple bids on the [GeM Bidplus Portal](https://bidplus.gem.gov.in/seller-bids), retrieving their bid documents, and downloading them to a user-defined folder within the Downloads directory.

---

## 🚀 Features

- Paste a list of bid numbers or keywords
- Automatically:
  - Inserts each query into the GeM search box
  - Executes the search
  - Opens the first matching result
  - Downloads the linked bid document
- Specify a subfolder for organized downloads
- Works seamlessly with logged-in sessions

---

## 🖥️ Installation

1. Clone or download this repository:

   ```bash
   git clone https://github.com/<your-username>/gem-helper-extension.git
   ```

2. Open Chrome and go to: `chrome://extensions/`

3. Enable **Developer mode** (top-right toggle)

4. Click **Load unpacked**

5. Select the folder where you cloned this repo

---

## 📋 Usage

1. Open the [GeM Bidplus search page](https://bidplus.gem.gov.in/seller-bids) and log in.

2. Click the **GeM Helper** extension icon in the toolbar.

3. In the popup:
   - Paste a list of bid numbers or search strings (one per line)
   - Enter a subfolder name (e.g., `gem_files`)
   - Click **Start**

4. The extension will:
   - Search each query
   - Open the result in a new tab
   - Download the bid document into the specified folder

---

## 📁 Download Location

Downloaded files will be saved in:

```
~/Downloads/[your-folder-name]/
```

Filenames are sanitized versions of the search queries.

---

## ⚙️ Requirements

- Google Chrome (v100 or later)
- Logged-in GeM session on the active tab

---

## 🔧 Planned Features

- Auto-close result tabs after download
- Automatic PDF merging and parsing
- Excel generation from parsed bid documents
- Background batch operation

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## ⚠️ Disclaimer

This tool is intended for internal and productivity use only. Ensure usage complies with [GeM platform policies](https://gem.gov.in).
