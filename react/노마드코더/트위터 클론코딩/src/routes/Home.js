import { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import Tweet from "../components/Tweet";
import TweetFactory from "../components/TweetFactory";
import styled from "styled-components";

const StyledHome = styled.section`
  .tweetFactory {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    border-bottom: 1px solid #ddd;

    > a {
      display: block;
      overflow: hidden;
      min-width: 48px;
      width: 48px;
      height: 48px;
      border-radius: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    form {
      flex: auto;

      .inputArea {
        border-bottom: 1px solid #ddd;
        textarea {
          font-size: 20px;
          width: 100%;
          padding: 10px 0 20px;
          line-height: 26px;
          resize: none;
          overflow: hidden;

          &:focus {
            outline: none;
          }
        }
        svg {
          width: 24px;
        }

        .toolImg {
          position: relative;
          padding-bottom: 20px;
          img {
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 500px;
          }
          button {
            position: absolute;
            left: 4px;
            top: 4px;
            width: 30px;
            height: 30px;
            background-color: rgba(15, 20, 25, 0.75);
            border-radius: 15px;

            &::before,
            &::after {
              content: "";
              position: absolute;
              left: calc(50% - 7.5px);
              top: calc(50% - 1px);
              display: block;
              width: 15px;
              height: 2px;
              background-color: #fff;
              border-radius: 1px;
            }
            &::before {
              transform: rotate(45deg);
            }
            &::after {
              transform: rotate(-45deg);
            }
          }
        }
      }

      .toolBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;

        & > div {
          display: flex;
          * {
            margin: 0 2px;
          }
        }

        label {
          cursor: pointer;
        }
        input {
          width: initial;
          padding: 10px 15px;
          background-color: #1d9bf0;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          border-radius: 17px;
        }
      }
    }
  }

  .tweets {
    padding: 20px 0;

    .tweet {
      display: flex;
      gap: 10px;
      justify-content: flex-start;
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 20px;

      &Img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }

      &Content {
        width: 100%;
        font-size: 15px;

        &Info {
          display: flex;
          justify-content: space-between;
          position: relative;
          height: 24px;
          align-items: center;
          margin-bottom: 10px;

          > div {
            .creatorName {
              font-weight: 600;
            }
            span {
              margin-right: 5px;
            }
          }
          > button {
            width: 24px;
          }

          .menu {
            position: absolute;
            right: 24px;
            top: 0;
            border-radius: 10px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            padding: 8px 0;
            button {
              padding: 4px 16px;
              font-weight: 600;
              line-height: 20px;
              svg {
                display: inline;
                vertical-align: top;
                margin-right: 5px;
              }
            }
          }
        }

        p {
          white-space: pre-line;
          line-height: 18px;
          margin-bottom: 10px;
        }
        img {
          display: block;
          margin: 0 auto;
          width: 100%;
          max-width: 500px;
          border-radius: 20px;
        }
      }
    }
  }
`;

const Home = ({ userObj }) => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, "tweets"),
      orderBy("createdAt", "desc"),
    );
    onSnapshot(q, snapshot => {
      const tweetArr = snapshot.docs.map(document => ({
        id: document.id,
        ...document.data(),
      }));
      setTweets(tweetArr);
    });
  }, []);
  // 트윗 작성
  return (
    <StyledHome>
      <TweetFactory userObj={userObj} />
      <div className="tweets">
        {tweets.map(tweet => (
          <Tweet
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </StyledHome>
  );
};

export default Home;
