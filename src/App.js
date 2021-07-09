import './App.css';
import Header from './components/Header/Header'
import Bar from './components/Bar/Bar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import Friends from './components/Friends/Friends'
import UsersConteiner from './components/Users/UsersConteiner'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

const App = (props) => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className='appWrap'>
        <Header />
        <Bar />
        <div className='cont'>
          <Route path='/profile' component={() => (<Profile />)} />
          <Route path='/messages' component={() => (<Messages />)} />
          <Route path='/friends' component={() => (<Friends />)} />
          <Route path='/users' component={() => (<UsersConteiner />)} />
        </div>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
