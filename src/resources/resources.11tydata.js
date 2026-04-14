export default {
  eleventyComputed: {
    // omit the collection tag for purposes of client-side filtering
    filteredTags: (data) => data.tags.filter((t) => t !== "resources"),
  },
};
