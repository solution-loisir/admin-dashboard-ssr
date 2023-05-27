module.exports = {
  eleventyComputed: {
    title(data) {
      if (data.activities) {
        return data.activities[0].ProgramName;
      }
    },
    description(data) {
      if (data.activities) {
        return data.activities[0].Description;
      }
    }
  }
};