module.exports = {
  name: "Plannr.dev",
  shortDesc:
    "A blog dedicted to planning for software projects.",
  url: "https://plannr.netlify.app/",
  authorEmail: "maurizio@plannr.dev",
  authorHandle: "@mauriziopz",
  authorName: "Maurizio",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "#eee",
      text: "#111",
      highlight: "#666",
    },
    secondary: {
      background: "#111",
      text: "#eee",
      highlight: "#666",
    },
  },

  keystone: {
    comments: false,
    bookmarks: false,
    claps: false,
    login: false,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
