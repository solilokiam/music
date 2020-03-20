import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Top3 from "../components/top3";
import Pagination from "../components/pagination";

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;

  return (
    <Layout>
      {data.allTopsYaml.nodes.map(top => (
        <Top3 title={top.name} desc={top.desc} artists={top.fields.artists} />
      ))}
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allTopsYaml(limit: $limit, skip: $skip) {
      nodes {
        id
        desc
        name
        fields {
          artists {
            why
            artist {
              id
              name
              images {
                url
                width
              }
            }
            album {
              id
            }
          }
        }
      }
    }
  }
`;
