
import  { useState,useEffect } from 'react';
import axios from 'axios';
import { mockSummarize } from '../mockApi';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';

import '../styles/Dashboard.css'
const Dashboard = () => {
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
 
  const [error, setError] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium'); 
const [history,setHistory]=useState([]);
const [summarizing, setSummarizing] = useState(false);

const [scrapeOption, setScrapeOption] = useState('main');

const navigate = useNavigate();


 useEffect(() => {
   const savedUser = localStorage.getItem('user');
   if (!savedUser) {
     navigate('/auth');
   } else {
     loadUserHistory(savedUser);
   }
 }, [navigate]);



  const loadUserHistory = (user) => {
    const userHistory =
      JSON.parse(localStorage.getItem(`history_${user}`)) || [];
    setHistory(userHistory);
  };

  const saveUserHistory = (newHistory) => {
    const user = localStorage.getItem('user');
    if (user) {
      localStorage.setItem(`history_${user}`, JSON.stringify(newHistory));
    }
  };
  
const handleSummarize = () => {
  setSummarizing(true);
  setTimeout(() => {
         const mockSummary = mockSummarize(content, summaryLength);

             setSummary(mockSummary);
    const newHistory = [
      ...history,
      { content, summary: mockSummary, timestamp: new Date() },
    ];
    setHistory(newHistory);
    saveUserHistory(newHistory);
    setSummarizing(false);
  }, 2000); 
};

  const exportAsText = () => {
    const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'summary.txt');
  };

  const exportAsPDF = () => {
    const doc = new jsPDF();
    doc.text(summary, 10, 10);
    doc.save('summary.pdf');
  };



const handleScrape = async () => {
 
  setError('');
  try {
    const response = await axios.get(url);
    const html = response.data;
    const mainContent = extractMainContent(html, scrapeOption);
    setContent(mainContent);
  } catch (err) {
    setError('Error scraping the content. Please check the URL and try again.');
  } 
};

const extractMainContent = (html, option) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
console.log(doc);
 
  ['script', 'style', 'nav', 'footer', 'header', 'aside','img'].forEach((tag) => {
    const elements = doc.querySelectorAll(tag);
    console.log(elements);
    elements.forEach((el) => el.remove());
  });

  let content = '';
  if (option === 'main') {
    const mainContent = doc.querySelector('main, article, section');
    content = mainContent ? mainContent.textContent : doc.body.textContent;
     content.trim();
  } else {
    content = doc.body.textContent;
     content.trim();
  }

  return content;
};
 

  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <h2>AI Summary Dashboard</h2>
        <div className='text-area'>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Type or paste content here'
          />
          <div className='scrapping'>
            <input
              type='text'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Enter URL to scrape'
            />
            <button onClick={handleScrape}>Scrape Content</button>
          </div>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='scrapping-option'>
          <h2>How do you want to scape your website </h2>
          <div>
            <label>
              <input
                type='radio'
                value='main'
                checked={scrapeOption === 'main'}
                onChange={() => setScrapeOption('main')}
              />
              Main Content
            </label>
            <label>
              <input
                type='radio'
                value='full'
                checked={scrapeOption === 'full'}
                onChange={() => setScrapeOption('full')}
              />
              Full Page
            </label>
          </div>
        </div>

     
        <div className='summary-length'>
          <h2>choose the type of summary length you want</h2>
          <div>
            <label>Summary Length:</label>
            <select
              value={summaryLength}
              onChange={(e) => setSummaryLength(e.target.value)}
            >
              <option value='short'>Short</option>
              <option value='medium'>Medium</option>
              <option value='long'>Long</option>
            </select>
          </div>
        </div>

        <div className='summary-section'>
          <button onClick={handleSummarize} disabled={summarizing}>
            Summarize
          </button>

          {summarizing && <p>Summarizing...</p>}

          {summary && (
            <div>
              <h3>Summary</h3>
              <p>{summary}</p>
            </div>
          )}
          {content && (
            <div>
              <h3>Original Content</h3>
              <p>{content}</p>
            </div>
          )}

          <div className='export-btn'>
            <button onClick={exportAsText}>Export as Text</button>
            <button onClick={exportAsPDF}>Export as PDF</button>
          </div>
          <div>
            {history && history.length > 0 ? (
              <div>
                <h2>History</h2>
                <ul>
                  {history.map((item, index) => (
                    <li key={index}>
                      <p>
                        <strong>Timestamp:</strong> {item.timestamp.toString()}
                      </p>
                      <p>
                        <strong>Content:</strong> {item.content}
                      </p>
                      <p>
                        <strong>Summary:</strong> {item.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <h2>No history avilable right now</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
