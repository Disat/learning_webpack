const marked = require("marked");

module.exports = (sources) => {
  //   console.log(marked);
  const html = marked.parse(sources);
  //   return `module.exports = ${JSON.stringify(html)}`;
  return html;
};
