

export const mockSummarize = (text, length) => {
  const summaries = {
    short: "This is a short summary.",
    medium: "This is a medium summary, providing a bit more detail.",
    long: "This is a long summary, offering a comprehensive overview of the content.",
  };

  return summaries[length];
};
