import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Dogs } from "./pages/Dogs/Dogs";
import { Home } from "./pages/Home/Home";
import { mainReducer } from "./common/main.reducer";
import appconfig from "./common/appConfig";

const store = appconfig.debug ? createStore(mainReducer, applyMiddleware(thunk, logger)) : createStore(mainReducer, applyMiddleware(thunk));

export const App = () => <Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/dogs">
                <Dogs />
            </Route>
        </Switch>
    </Router>
</Provider>;