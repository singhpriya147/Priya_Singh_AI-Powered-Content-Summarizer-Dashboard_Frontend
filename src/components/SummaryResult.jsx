// src/components/SummaryResult.js


const SummaryResult = ({ content, summary }) => {
  return (
    <div>
      <h3>Original Content</h3>
      <p>{content}</p>
      <h3>Summary</h3>
      <p>{summary}</p>
    </div>
  );
};

export default SummaryResult;
