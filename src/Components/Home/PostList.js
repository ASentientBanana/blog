import React from "react";
import { PostListElement } from "./PostListElement";
import "../../Styles/PostList.css";
import {Social} from '../Social'
const POSTS = {
  posts: [
    {
      title: "post 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
      thumbnail:
        "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
    },
    {
      title: "post 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
      thumbnail:
        "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
    },
    {
      title: "post 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
      thumbnail:
        "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
    },
    {
      title: "post 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
      thumbnail:
        "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
    },
    {
      title: "post 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
      thumbnail:
        "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
    },{
        title: "post 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
        thumbnail:
          "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
      },{
        title: "post 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
        thumbnail:
          "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
      },{
        title: "post 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae libero excepturi ipsam id deserunt nisi corporis harum. Inventore voluptate voluptatum, quae beatae rerum rem modi voluptatibus eligendi ex provident odit vitae? Itaque sapiente minima laborum voluptatum cupiditate eligendi. ",
        thumbnail:
          "https://1.bp.blogspot.com/-ZlXZugSrJfs/WTtBCKeq9dI/AAAAAAAACPY/hSrw0WB57C0TeUNJPFXfeVAo10yhz7p5ACLcB/s1600/Sigma-Blog-Magazine-Blogger-Template.jpg"
      },
  ]
};

export const PostList = () => {
  return (
    <div>
    <div className="postList">
      {POSTS['posts'].map((post,index)=>(
          <PostListElement title={index} content={post.content} thumbnail={post.thumbnail} key={index} />
      ))}
    </div>
    <Social />
    </div>
  );
};
