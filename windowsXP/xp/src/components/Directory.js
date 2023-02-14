import styled from "styled-components";

const StyledDirectory = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: 3px solid #005aeb;
  border-top: none;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-color: #fff;

  .title {
    height: 32px;
    background-image: url(img/window_title.png);

    .titText {
      color: #fff;
      padding-left: 32px;
      line-height: 32px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 6px;
        top: 6px;
        width: 20px;
        height: 20px;
        background: url("img/splite_ico.png") no-repeat;
        background-position: 0 0;
        background-size: 500%;
      }
    }
  }
  .menu {
    background-color: #f2f4f2;

    .controls {
      height: 42px;
      border-bottom: 2px solid #f1eee6;
      display: flex;

      button {
        position: relative;
        width: 40px;
        height: 40px;
        vertical-align: top;

        span {
          display: block;
          text-indent: 35px;
        }

        &.withText {
          width: 80px;
        }

        &::after {
          content: "";
          display: block;
          width: 25px;
          height: 25px;
          background: url("img/splite.png") no-repeat;
          background-position: 0 0;
          background-size: 500%;
          position: absolute;
          left: 8px;
          top: 8px;
        }

        &:nth-child(1)::after {
          background-position: 0 -25px;
        }

        &:nth-child(2)::after {
          background-position: -25px -25px;
        }
      }
    }
    .addressBar {
      height: 24px;
      border-bottom: 2px solid #f1eee6;
      display: flex;

      span {
        display: inline-block;
        color: #aaa;
        padding: 0 5px;
        line-height: 22px;
      }

      input {
        position: relative;
        width: calc(100% - 131px);
        height: 22px;
        border: 1px solid #84a2bd;
        border-radius: 1px;
        padding-left: 24px;
        background: url("img/splite_ico.png") no-repeat;
        background-position: 0 0;
        background-size: 500%;
        background-size: 9%;
        background-position: 2px 0;
      }

      button {
        position: relative;
        width: 70px;
        line-height: 22px;
        text-indent: 16px;

        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 5px;
          top: 1px;
          width: 20px;
          height: 20px;
          background: url("img/splite.png") no-repeat;
          background-position: 0 0;
          background-size: 500%;
          background-position: -40px -20px;
        }
      }
    }
  }

  #content {
    position: relative;
    width: 100%;
    height: calc(100% - 128px);
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
      width: 20px;

      &-track {
        background-color: #fbfbf8;
      }
      &-thumb {
        border-radius: 4px;
        border-top: 2px solid #e0e7ef;
        border-bottom: 2px solid #e0e7ef;
        background-image: url(img/thumb.png);
        background-size: 20px 1px;
      }
      &-button {
        background: url("img/splite.png") no-repeat;
        background-position: 0 0;
        background-size: 500%;

        &:start:decrement {
          display: block;
          height: 20px;
          background-position: -80px 0;
        }
        &:end:increment {
          display: block;
          height: 20px;
          background-position: -80px -20px;
        }
      }
    }

    .menuDetail {
      width: 220px;
      height: 100%;
      background: linear-gradient(to bottom, #7ba2e7, #6376d6);
    }

    .fileList {
      position: relative;
      overflow: hidden;
      width: 100%;

      table {
        position: relative;
        width: 100%;

        th,
        td {
          text-align: left;
          line-height: 20px;
          border-right: 10px solid transparent;

          &:last-child {
            border-right: none;
          }
        }

        th {
          background-image: url(img/th_bar.png);
          padding-left: 5px;
          padding-bottom: 2px;

          &:nth-child(2) {
            text-align: right;
          }
        }

        td {
          line-height: 22px;
          padding-bottom: 0;
          position: relative;

          &:nth-child(1) {
            padding-left: 22px;
            background-color: #f7f7f7;

            &::after {
              content: "";
              display: block;
              width: 16px;
              height: 16px;
              position: absolute;
              left: 2px;
              top: 2px;
              background: url("img/splite_ico.png") no-repeat;
              background-position: 0 0;
              background-size: 500%;
              background-position: 0 -16px;
            }
          }

          &:nth-child(2) {
            text-align: right;
          }
        }
      }
    }
  }

  .windowBar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 29px;
    background-image: url(img/window_bar.png);
  }
  .btns {
    position: absolute;
    right: 3px;
    top: 3px;
    display: flex;
    gap: 3px;

    button {
      display: block;
      width: 26px;
      height: 26px;
      background: url("img/splite.png") no-repeat;
      background-position: 0 0;
      background-size: 500%;
      background-position: 0 -16px;

      &:nth-child(1) {
        background-position: 0 0;
      }
      &:nth-child(2) {
        background-position: -26px 0;
      }
      &:nth-child(3) {
        background-position: -78px 0;
      }
    }
  }
`;

const Directory = ({ fileObj }) => {
  return (
    <StyledDirectory>
      <div className="title">
        <p className="titText">{fileObj[0].type}</p>
        <div className="btns">
          <button>
            <span className="hidden">최소화</span>
          </button>
          <button>
            <span className="hidden">최대화</span>
          </button>
          <button>
            <span className="hidden">닫기</span>
          </button>
        </div>
      </div>
      <div className="menu">
        <div className="controls">
          <button className="withText">
            <span>뒤로</span>
          </button>
          <button>
            <span className="hidden">앞으로</span>
          </button>
          <button>
            <span className="hidden">상위폴더</span>
          </button>
          <button className="withText">
            <span>검색</span>
          </button>
          <button className="withText">
            <span>폴더</span>
          </button>
        </div>
        <div className="addressBar">
          <span>주소(D)</span>
          <input type="text" placeholder="바탕화면&#8361;JavaScript" />
          <button>이동</button>
        </div>
      </div>
      <div id="content">
        <div className="menuDetail"></div>
        <div className="fileList">
          <table>
            <caption>폴더 내부 파일 목록</caption>
            <colgroup>
              {/* <col style="width: 60%;" />
              <col style="width: 10%;" />
              <col style="width: 15%;" />
              <col style="width: 15%;" /> */}
            </colgroup>
            <thead>
              <tr>
                <th>이름</th>
                <th>크기</th>
                <th>종류</th>
                <th>수정한 날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fileObj[0].title}</td>
                <td>123KB</td>
                <td>TXT 파일</td>
                <td>{fileObj.createdDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="windowBar"></div>
    </StyledDirectory>
  );
};

export default Directory;
