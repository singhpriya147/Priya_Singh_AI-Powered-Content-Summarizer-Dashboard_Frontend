# AI powered summary dashboard frontend

**AI powered summary** This  assignment is a project  of  React-based dashboard that allows users to type long form text or paste text or input URLs for scraping content from web pages and receive AI-generated summaries. Users can also export summaries as text or PDF files and view their history of summarized content.
**This assignment used the predefined summaries based on the user selection lenght (short,medium,long)**
## Features

- **Authentication**: Integratea mocked user authentication via local storage.
- **Scrapping Tool**: Integration with a mock AI summarization API with predefine text and delyed for 2sec to mimic the api fetching operation
- **History**: Dashborad contain the history section which shows the "original content" and "AI summarized content" with timestamp for individual user.Since history will be stored in local storage.
- **Export**: You can export the summarized content in pdf format and text format.
- **Option for summaries lenght**: You can choose the type of summary length.
- **Scraping option**: You can choose to scrape the whole page or only main tag.
  
## Technologies and Packages Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Styling the application.
- **JsPdf**:For exporting the summaries.
- **React-router-dom**:For navigation and routing purposes.

## How to use the Project

- **Login** : Login by simply putting your name .
- **Dashboard** : After login you'll be directed to dashboard page.
      -**Long text summarizing**
      -**Step1** :Paste the text or write the text in text filed .
  
      -**Step2** :choose the type of summary lenght you want from dropdown menu.
  
      -**Step3** :Now click on summarize button and **wait for 2sec**.
  
      -**Step4** :Voila ! you'll get the summarized text (**Predefined**).
  
      -**Step5** :Now head to the history section to see your previous summary along with original text.
  
      -**Step6** :Now if you want to download the summaries then click on "Export as pdf" or "Export as text" button .
  
     -**web scrapping  feature**
      -**Step 1** :Paste the url or write the url in text filed .
      -**Step 2** :Click on "Scrape Content" button to start scrapping.
      -**Step 3** :Now go see in you text field on left side , it will get all the scrapped content and modify it according to your need .
      -**Step 4** :choose the type of summary lenght you want from dropdown menu.
      -**Step 5** :Now click on summarize button and **wait for 2sec**.
      -**Step 6** :Voila ! you'll get the summarized text (**Predefined**).
      -**Step 7** :Now head to the history section to see your previous summary along with original text.
      -**Step 8** :Now if you want to download the summaries then click on "Export as pdf" or "Export as text" button .
  
## ScreenShot

## Running the project
### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/singhpriya147/canvas_craft.git
 
    ```

2. **Install Dependencies:**
    ```bash
    npm install

### Quick Start
Follow these steps to quickly start the project:
1. **Run the Application:**
    ```bash
    npm start
    ```

2. **Access the Application:**
   Open your web browser and go to `http://localhost:3000` to access the Canvas Craft web app.
