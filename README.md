# AI powered summary dashboard frontend

**AI powered summary** This  assignment is a project  of  React-based dashboard that allows users to type long form text or paste text or input URLs for scraping content from web pages and receive AI-generated summaries. Users can also export summaries as text or PDF files and view their history of summarized content.
**This assignment used the predefined summaries based on the user selection lenght (short,medium,long)**
## Features

- **Authentication**: Integrate a mocked user authentication via local storage.
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
- ### Dashboard
- **Dashboard**: After login, you'll be directed to the dashboard page.

### Long Text Summarizing Feature
- **Step 1**: Paste the text or write the text in the text field.
- **Step 2**: Choose the type of summary length you want from the dropdown menu.
- **Step 3**: Click on the summarize button and **wait for 2 seconds**.
- **Step 4**: Voila! You'll get the summarized text (**Predefined**).
- **Step 5**: Head to the history section to see your previous summary along with the original text.
- **Step 6**: To download the summaries, click on the "Export as PDF" or "Export as Text" button.

### Web Scraping Feature (Test for this url [Difference between Let,Var and const](https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/))
- **Step 1**: Paste the URL or write the URL in the text field.
- **Step 2**: Click on the "Scrape Content" button to start scraping.
- **Step 3**: The text field on the left side will display the scraped content, which you can modify according to your needs.
- **Step 4**: Choose the type of summary length you want from the dropdown menu.
- **Step 5**: Click on the summarize button and **wait for 2 seconds**.
- **Step 6**: Voila! You'll get the summarized text (**Predefined**).
- **Step 7**: Head to the history section to see your previous summary along with the original text.
- **Step 8**: To download the summaries, click on the "Export as PDF" or "Export as Text" button.
      
  
## ScreenShot
**1- Login Page**
![Screenshot (954)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/0243cca5-06f8-48c2-be7c-25acd7ab1732)

**2-Dashboard page**
![Screenshot (946)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/b43d1f08-1e67-4ada-9110-e4005070eca5)

**3- Text summarization feature**
![Screenshot (947)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/d5fdef10-e243-4eca-81a0-af7bc033678c)

**4- Text summary loading/ summarizing**
![Screenshot (948)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/3ff1cd45-86b5-47e3-bffc-349f28d78575)
**5-Text Summary(Predefined)**

![Screenshot (949)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/9b272439-2fa6-4fc3-892d-9724d8f441c4)
**6-History**
![Screenshot (950)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/c6985457-db09-497a-a5cb-bc3a7471c576)

**7-Web scraping feature**
![Screenshot (951)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/48a3aad2-2594-4199-9d1d-d77301f4ef6c)

**8-web scraping original contet(Editable before summarizing)**
![Screenshot (952)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/5ac02e9b-c008-4d64-895c-0a934fcf5109)

**9-Summary of Web scrapped content**
![Screenshot (953)](https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend/assets/72970648/de1a6e30-e42f-4c6c-8674-05ac2bbaa9f7)

## Running the project
### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/singhpriya147/Priya_Singh_AI-Powered-Content-Summarizer-Dashboard_Frontend.git
 
    ```

2. **Install Dependencies:**
    ```bash
    npm install

### Quick Start
Follow these steps to quickly start the project:
1. **Run the Application:**
    ```bash
    npm run dev
  
    ```

2. **Access the Application:**
   Open your web browser and go to `http://localhost:3000` to access the app.
