import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Container from "../components/Container";
import ShowDetail from "../components/ShowDetail";
import ShowImage from "../components/ShowImage";
import ShowTitle from "../components/ShowTitle";
import ShowEpisodesTitle from "../components/ShowEpisodesTitle";
import ShowEpisodes from "../components/ShowEpisodes";

// could not figure out Redux

// need to do in TS

// need to add jest tests

const showDetailEndPoint = `https://api.tvmaze.com/shows/6771`;
const episodesEndPoint = "https://api.tvmaze.com/shows/6771/episodes";

export async function getServerSideProps() {
  const [showDetailRes, episodesRes] = await Promise.all([
    fetch(showDetailEndPoint),
    fetch(episodesEndPoint)
  ]);
  const [showDetail, episodes] = await Promise.all([
    showDetailRes.json(),
    episodesRes.json()
  ]);
  return { props: { showDetail, episodes } };
}

const Home = (props) => {
  const episodes = props.episodes;
  const showDetail = props.showDetail;

  return (
    <>
      <Head>
        <title>The Powerpuff Girls - Episode List | TVmaze</title>
        <meta
          name="description"
          content="Show Guide for The Powerpuff Girls"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.webp"
          sizes="16x16"
        ></link>
      </Head>
      <Container>
        <ShowTitle>{showDetail.name}</ShowTitle>

        <ShowDetail>
          <ShowImage>
            <Image
              width="210"
              height="295"
              layout="fixed"
              src={showDetail?.image?.medium || "/no-image.png"}
              alt="Powerpuff Girls episode image"
            />
          </ShowImage>
          <div dangerouslySetInnerHTML={{ __html: showDetail.summary }} />
        </ShowDetail>

        <ShowEpisodes>
          <ShowEpisodesTitle>Episode List</ShowEpisodesTitle>
          <table>
            <caption className="visually-hidden">
              The Powerpuff Girls - Episode List
            </caption>
            <tbody>
              {episodes.map((episode) => (
                <tr key={episode.id}>
                  <td>
                    <Link
                      href={{
                        pathname: "/[id]",
                        query: { id: episode.id }
                      }}
                    >
                      <a>{episode.name}</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ShowEpisodes>
      </Container>
    </>
  );
};

export default Home;
