const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allTopsYaml(sort: { fields: date, order: DESC }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tops = result.data.allTopsYaml.edges;
  const topsPerPage = 4;
  const numPages = Math.ceil(tops.length / topsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/topListing.js"),
      context: {
        limit: topsPerPage,
        skip: i * topsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
