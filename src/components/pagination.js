import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;
const Pages = styled.ul`
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
`;

const Page = styled.li`
  color: ${props => props.theme.accentColor};
  padding: 10px;
  border: 1px solid #333;
  border-radius: 3px;
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0 10px;
  a:hover {
    text-decoration: underline;
  }
`;

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  if (numPages < 2) {
    return null;
  }

  return (
    <Nav>
      <Pages>
        {!isFirst && (
          <Page>
            <Link to={prevPage} rel="prev">
              ←
            </Link>
          </Page>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Page key={`pagination-number${i + 1}`}>
            <Link to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
          </Page>
        ))}
        {!isLast && (
          <Page>
            <Link to={nextPage} rel="next">
              →
            </Link>
          </Page>
        )}
      </Pages>
    </Nav>
  );
};

Pagination.defaultProps = {
  currentPage: 0,
  numPages: 0,
};

export default Pagination;
