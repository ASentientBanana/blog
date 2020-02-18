import React, { useState, useEffect } from "react";
import { PostListElement } from "./PostListElement";
import "../../Styles/PostList.css";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "70%",
    height: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export const PostList = () => {
  const classes = useStyles();

  const [post_lists_state, set_post_lists_state] = useState([]);
  const fetchData = async () => {
    let post_response;
    try {
      post_response = await fetch("http://192.168.0.15:3003/getposts");
    } catch {
      post_response = await fetch("http://localhost:3003/getposts");
    }
    let post_list = await post_response.json();
    set_post_lists_state(post_list.posts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={"postList"}>
      <GridList cellHeight={180} className={"postList"}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            <h2>Posts</h2>
          </ListSubheader>
        </GridListTile>
        {post_lists_state.map((tile, index) => (
            

          <GridListTile
            
            key={index}
          >
            <NavLink to={`/post/${tile.post_id}`} key={index} >
              <div className='link-style'><img src={tile.post_thumbnail} /></div>
              <GridListTileBar
                title={tile.post_title}
                subtitle={<span>by: {"Petar"}</span>}
              />
              </NavLink>
          </GridListTile>
          

        ))}
      </GridList>
    </div>
  );
};
