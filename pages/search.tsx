import React from "react";
import Head from "next/head";

import { Sample } from "../utils/sample";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import { SearchResults } from "../components/SearchResults";
import { IGoogleResponse } from "../utils/interfaces";

import type { GetServerSideProps, NextPage } from "next";
interface Props {
  results: IGoogleResponse;
}

const Search: NextPage<Props> = ({ results }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/GoogleIcon.png" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_KEY = process.env.API_KEY;
  const useDummyData = false;
  const startIdx = context.query.start || 0;

  const data = useDummyData
    ? Sample
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=f966333d1ed07b3ee&q=${context.query.term}&start=${startIdx}`
      ).then((res) => res.json());
  return {
    props: { results: data }, // will be passed to the page component as props
  };
};

export default Search;
