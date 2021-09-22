import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviePage from "../page/MoviePage";
import MainPage from "../page/MainPage";
import MainContainer from "../components/home/MainContainer";

const RootRouter = () => {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact component={MoviePage} path="/movies" />
        </Switch>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default RootRouter;
