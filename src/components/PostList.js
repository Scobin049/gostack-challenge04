import React, { Component } from "react";
import "./PostList.css";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "John Doe",
          avatar:
            "http://endlesstheme.com/simplify1.0/images/profile/profile9.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "http://slimcheng.com/template/admin/ekoders/assets/images/user-3.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diego Fernandes",
          avatar:
            "http://slimcheng.com/template/admin/ekoders/assets/images/user-3.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "http://slimcheng.com/template/admin/ekoders/assets/images/user-3.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Diego Fernandes",
          avatar:
            "http://slimcheng.com/template/admin/ekoders/assets/images/user-3.jpg"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "http://slimcheng.com/template/admin/ekoders/assets/images/user-3.jpg"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "http://slimcheng.com/template/admin/ekoders/assets/images/user-3.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post">
        {this.state.posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
