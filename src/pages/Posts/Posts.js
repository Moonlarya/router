import React, { Component } from "react";
import Post from "../../components/Post/Post";

const ME_IMAGE =
  "https://moonlarya.github.io/router/static/media/me.7ce63541.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

class Posts extends Component {
  render() {
    return (
      <div>
        <Post
          author={{
            name: "Marina Humeniuk",
            photo: ME_IMAGE,
            nickname: "@moonlaria",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
        <Post
          author={{
            name: "Marina Humeniuk",
            photo: ME_IMAGE,
            nickname: "@moonlaria",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
        <Post
          author={{
            name: "Marina Humeniuk",
            photo: ME_IMAGE,
            nickname: "@moonlaria",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
      </div>
    );
  }
}

export default Posts;
