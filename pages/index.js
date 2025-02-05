import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/components/Post";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Lottie from "lottie-react";
import ZLogo from "../public/images/z-letter.json";
import { firestore } from "@lib/firestore";
import {
  collection,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";
import {  logEvent } from "firebase/analytics";
import { analytics } from "@hooks/useAnalytics";
import React, {useEffect} from "react";

const Home = ({ posts, visitorCount }) => {
  const { pagination } = config.settings;
  const { name, bio } = config.profile;
  const sortPostByDate = sortByDate(posts);

  useEffect(()=>{
    logEvent(analytics, 'Homepage - user landed');
  });

  return (
    <Base>
      {/* profile */}
      <div>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2 mx-2">{visitorCount} live visitors</button>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div
              className="mx-auto text-center lg:col-8"
              style={{ justifyContent: "center" }}
            >
              <Lottie
                className="mx-auto"
                animationData={ZLogo}
                loop={true}
                style={{ width: 200, height: 200 }}
              />

              {markdownify(name, "h1", "text-6xl lg:text-8xl font-semibold")}
              {markdownify(bio, "p", "mt-4 leading-9 text-xl")}
              {markdownify("An anonymous and judgment-free platform for people to share their deepest thoughts and connect with others. Join our trusted community and share your secrets without fear of judgment or exposure.", "p", "mt-4 leading-9 text-xl")}
              <button
                onClick={() => {
                  window.location.href = "/post";
                }}
                style={{ marginTop: 20 }}
                type="button"
                class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="pt-4">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {sortPostByDate.slice(0, pagination).map((post, i) => (
                  <Post
                    className="col-12 mb-6 sm:col-6"
                    key={"key-" + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Pagination
              totalPages={Math.ceil(posts.length / pagination)}
              currentPage={1}
            />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getServerSideProps = async () => {
  const getConfessions = async () => {
    const confessionsCollection = collection(firestore, "confessions");
    const confessionsQuery = query(
      confessionsCollection,
      where("approved", "==", true),
      limit(10)
    );
    const querySnapshot = await getDocs(confessionsQuery);

    const result = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });
    return result;
  };
  const posts = await getConfessions();
  const postsArray = [];

  posts.forEach((e) => {
    postsArray.push({
      body: e?.data()?.body || "",
      title: e?.data()?.title || "",
      date: e?.data()?.date.toDate().toString() || "",
      zolo: e?.data()?.zolo || "",
    });
  });
  const visitor = Math.floor(Math.random() * 5) + 2
  return {
    props: {
      posts: postsArray,
      visitorCount: visitor
    },
  };
};
