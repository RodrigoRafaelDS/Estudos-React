import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room';





function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} ></Route>
          <Route path="/rooms/new" exact={true} component={NewRoom} ></Route>
          <Route path="/rooms/:id" component={Room} ></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
