// src/components/ScrapeContent.js
import { useState } from 'react';
import axios from 'axios';
import htmlParser from 'html-react-parser';

const ScrapeContent = ({setContent}) => {
  const [url, setUrl] = useState('');

  const handleScrape = async () => {
    try {
      const response = await axios.get(
        `https://api.scraperapi.com?api_key=YOUR_API_KEY&url=${url}`
      );
      const html = response.data;
      const mainContent = extractMainContent(html);
      setContent(mainContent);
    } catch (error) {
      console.error('Error scraping content:', error);
    }
  };

  const extractMainContent = (html) => {
    // Simple extraction logic, customize as needed
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const paragraphs = Array.from(doc.querySelectorAll('p, article'))
      .map((el) => el.textContent)
      .join('\n');
    return paragraphs;
  };

  return (
    <div>
      <input
        type='text'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter URL to scrape'
      />
      <button onClick={handleScrape}>Scrape Content</button>
    </div>
  );
};

export default ScrapeContent;
