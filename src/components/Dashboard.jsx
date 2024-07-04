// src/components/Dashboard.js
import  { useState,useEffect } from 'react';
import axios from 'axios';
import { mockSummarize } from '../mockApi';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium'); // Default summary length
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
  // const handleSummarize = async () => {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     // Mock API call
  //     // setLoading(true);
  //     setTimeout(() => {
  //      const mockSummary = mockSummarize(content, summaryLength);
       
  //          setSummary(mockSummary);
  //           const newHistory = [
  //             ...history,
  //             { content, summary: mockSummary, timestamp: new Date() },
  //           ];
  //           setHistory(newHistory);
  //           saveUserHistory(newHistory);
  //     }, 10000);
  
     
      
  //   } catch (err) {
  //     setError('Error summarizing the content.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
  }, 10000); // 2 seconds delay to simulate API call
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


  
// const handleScrape = async () => {
//   setLoading(true);
//   setError('');
//   try {
//     const response = await axios.get(url);
//     const html = response.data;
//     const mainContent = extractMainContent(html);
//     setContent(mainContent);
//   } catch (err) {
//     setError('Error scraping the content.');
//   } finally {
//     setLoading(false);
//   }
// };

// const extractMainContent = (html) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const paragraphs = Array.from(doc.querySelectorAll('p, article'))
//     .map((el) => el.textContent)
//     .join('\n');
//   return paragraphs;
// };

const handleScrape = async () => {
  setLoading(true);
  setError('');
  try {
    const response = await axios.get(url);
    const html = response.data;
    const mainContent = extractMainContent(html, scrapeOption);
    setContent(mainContent);
  } catch (err) {
    setError('Error scraping the content. Please check the URL and try again.');
  } finally {
    setLoading(false);
  }
};

const extractMainContent = (html, option) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Remove unnecessary elements
  ['script', 'style', 'nav', 'footer', 'header', 'aside','img'].forEach((tag) => {
    const elements = doc.querySelectorAll(tag);
    elements.forEach((el) => el.remove());
  });

  let content = '';
  if (option === 'main') {
    const mainContent = doc.querySelector('main, article, section');
    content = mainContent ? mainContent.textContent : doc.body.textContent;
  } else {
    content = doc.body.textContent;
  }

  return content.trim();
};
 

  return (
    <div>
      <h2>AI Summary Dashboard</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Type or paste content here'
      />
      <input
        type='text'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter URL to scrape'
      />
      <button onClick={handleScrape}>Scrape Content</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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

      {/* Summary length options */}
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

      {/* <button onClick={handleSummarize} disabled={loading || !content}>
        Summarize
      </button> */}

      <button onClick={handleSummarize} disabled={summarizing}>
        Summarize
      </button>
      {/* {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>} */}

      {summarizing && <p>Summarizing...</p>}
      {/* <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder='Summary will appear here'
      /> */}

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
      <div>
        <button onClick={exportAsText}>Export as Text</button>
        <button onClick={exportAsPDF}>Export as PDF</button>
      </div>
      <h3>History</h3>
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
  );
};

export default Dashboard;
