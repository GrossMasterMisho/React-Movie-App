import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/ServerApi";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

const MainPage = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  console.log(movies);
  const getMovies = async () => {
    let moviesByQuery = await fetchMovies();
    setMovies(moviesByQuery);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {movies.map((movie: Movie) => (
          <ImageListItem key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <ImageListItemBar
              title={movie.Title}
              subtitle={<span>Release date: {movie.Year}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default MainPage;
