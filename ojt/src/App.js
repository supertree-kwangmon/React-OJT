import React, { useState } from "react";
import "./App.css";

function App() {
  let post = "삼성역 맛집";
  // document.querySelector("h4").innerHTML = post;
  let [title, setTitle] = useState(["국밥 맛집", "삼겹살 맛집", "한우 맛집"]);
  let [like, setLike] = useState(0);

  //Destructuring 문법
  let num = [1, 2];
  // let a = num[0]
  // let b = num[1]

  let [a, b] = [1, 2];

  // state는 data 변동시 자동으로 html에 반영되게 만들어준다
  // 변수로 지정하면 스스로 변동해주는 코드를 짜야함

  return (
    <div className="App">
      <div className="black-nav">
        <h4>네브임</h4>
      </div>
      {/* <h4>제목</h4> */}
      <div className="list">
        <h4 style={{ color: "red", fontSize: "16px" }}>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            ❤️
          </span>
          {like}
        </h4>
        <p>7월 27일</p>
      </div>
      <div className="list">
        <h4 style={{ color: "blue", fontSize: "16px" }}>{title[1]}</h4>
        <p>7월 27일</p>
      </div>
      <div className="list">
        <h4 style={{ color: "green", fontSize: "16px" }}>{title[2]}</h4>
        <p>7월 27일</p>
      </div>
      <Modal color={"orange"} title={title} />
      {/* <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>내용</p>
      </div> */}
    </div>
  );
}

//  1.반복적인 HTML 축약 2.큰 페이지 3.자주변경되는 것들

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

// const Modal = () => {}

//class component

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ahn",
      age: 33,
    };
  }

  render() {
    return (
      <>
        <div>
          안녕 {this.state.name}
          <button
            onClick={() => {
              this.setState({ age: 20 });
            }}
          >
            버튼
          </button>
          <div>안녕 {this.props}</div>
        </div>
      </>
    );
  }
}

export default App;
