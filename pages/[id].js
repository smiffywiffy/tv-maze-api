import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Container from "../components/Container";
import ShowTitle from "../components/ShowTitle";
import ShowDetail from "../components/ShowDetail";
import ShowImage from "../components/ShowImage";

import ShowDetailButton from "../components/ShowDetailButton";
import styled from "styled-components";

const defaultEndpoint = `https://api.tvmaze.com/episodes/`;

export async function getServerSideProps({ query }) {
  const { id } = query;

  const res = await fetch(`${defaultEndpoint}${id}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

const Episode = ({ data }) => {
  const { name, summary, image } = data;
  return (
    <>
      <Head>
        <title>The Powerpuff Girls - Episode List | TVmaze</title>
        <meta
          name="description"
          content="Episode Guide for The Powerpuff Girls."
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.webp"
          sizes="16x16"
        ></link>
      </Head>
      <Container>
        <ShowTitle>{name}</ShowTitle>

        <ShowDetail>
          <ShowImage>
            <Image
              width="250"
              height="140"
              layout="fixed"
              src={image?.medium || "/no-image.png"}
              alt="Powerpuff Girls episode image"
            />
          </ShowImage>
          <div
            dangerouslySetInnerHTML={{
              __html: summary || "No description available"
            }}
          />
        </ShowDetail>

        <Link href="/" passHref>
          <ShowDetailButton as="a">
            Back to all Powerpuff Girls episodes
          </ShowDetailButton>
        </Link>
      </Container>
    </>
  );
};
export default Episode;
