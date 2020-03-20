import React from "react";
import { HeartBroken } from "@styled-icons/fa-solid/HeartBroken";
import styled from "styled-components";
import Layout from "../components/layout";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 25px;
  h1 {
    font-size: 96px;
    line-height: 70px;
    font-weight: bold;
    margin: 20px 0;
  }
  a:hover {
    text-decoration: underline;
  }
`;
const NotFoundPage = () => (
  <Layout>
    <Container>
      <HeartBroken />
      <div>
        <h1>NOT FOUND</h1>
        <p>
          You just hit a route that doesn&#39;t exist... the sadness... the
          void... the emptiness.
        </p>
        <p>
          Better <a href="/">return home</a> if you want to find yourself.
        </p>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
