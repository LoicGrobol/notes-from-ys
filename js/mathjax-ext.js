window.MathJax = {
  loader: {
    load: ["[unicodeMath]/unicode-math.js"],
    paths: {
      unicodeMath:
        "https://cdn.jsdelivr.net/npm/@amermathsoc/mathjax-unicode-math@2/browser",
    },
  },
  tex: {
    packages: {
      "[+]": ["unicode-math"],
    },
  },
};
