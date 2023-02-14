import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { storageService, dbService } from "../fbase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const TweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const onSubmit = async event => {
    event.preventDefault();
    if (tweet === "") {
      window.alert("트윗을 작성해 주세요");
    } else if (attachment !== "") {
      try {
        const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
        const response = await uploadString(
          attachmentRef,
          attachment,
          "data_url",
        );
        const attachmentURL = await getDownloadURL(response.ref);
        await addDoc(collection(dbService, "tweets"), {
          text: tweet,
          createdAt: Date.now(),
          createdDate: `${new Date().getMonth()}월${new Date().getDate()}일`,
          creatorId: userObj.uid,
          creatorName: userObj.displayName,
          creatorEmail: userObj.email,
          attachmentURL,
        });
        console.log(userObj);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setTweet("");
      onClearPreview();
    } else {
      try {
        await addDoc(collection(dbService, "tweets"), {
          text: tweet,
          createdAt: Date.now(),
          createdDate: `${new Date().getMonth()}월${new Date().getDate()}일`,
          creatorId: userObj.uid,
          creatorName: userObj.displayName,
          creatorEmail: userObj.email,
          attachmentURL: "",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setTweet("");
      onClearPreview();
    }
    textarea.current.style.height = "auto";
  };
  const textarea = useRef();
  const onTyping = event => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  // 이미지 미리보기
  const [attachment, setAttachment] = useState("");
  const onFileChange = event => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = function (event) {
      setAttachment(event.target.result);
    };
  };
  const fileInput = useRef();
  const onClearPreview = () => {
    setAttachment("");
    fileInput.current.value = null;
  };

  return (
    <div className="tweetFactory">
      <Link to="/profile">
        <img src="img/profile.jpg" alt="" />
      </Link>
      <form onSubmit={onSubmit}>
        <div className="inputArea">
          <textarea
            ref={textarea}
            onChange={onTyping}
            value={tweet}
            type="text"
            placeholder="무슨 일이 일어나고 있나요?"
            rows={1}
          ></textarea>
          {attachment && (
            <div className="toolImg">
              <img src={attachment} alt="" />
              <button onClick={onClearPreview}>X</button>
            </div>
          )}
        </div>
        <input
          style={{ display: "none" }}
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInput}
        />
        <div className="toolBar">
          <div>
            <label htmlFor="fileUpload">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="24px"
                fill="rgb(29, 155, 240)"
              >
                <g>
                  <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </g>
              </svg>
            </label>
            {/* <button>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="24px"
                fill="rgb(29, 155, 240)"
              >
                <g>
                  <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                </g>
              </svg>
            </button> */}
          </div>
          <input type="submit" value="트윗하기" />
        </div>
      </form>
    </div>
  );
};

export default TweetFactory;
