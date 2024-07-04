// src/mockApi.js

// export const mockSummarize = (text) => {
//   const shortSummary = 'This is a short summary.';
//   const mediumSummary =
//     'This is a medium summary, providing a bit more detail.';
//   const longSummary =
//     'This is a long summary, offering a comprehensive overview of the content.';

//   const wordCount = text.split(' ').length;

//   if (wordCount < 50) {
//     return shortSummary;
//   } else if (wordCount < 100) {
//     return mediumSummary;
//   } else {
//     return longSummary;
//   }
// };


// src/mockApi.js

export const mockSummarize = (text, length) => {
  const summaries = {
    short: "This is a short summary.",
    medium: "This is a medium summary, providing a bit more detail.",
    long: "This is a long summary, offering a comprehensive overview of the content.",
  };

  return summaries[length];
};
