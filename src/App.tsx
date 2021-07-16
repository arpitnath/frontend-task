import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Routes } from './constants/routes'
import { Navbar } from './containers/'
import { SearchPage } from './pages'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={Routes.BASE} component={SearchPage} exact />
      </Switch>
    </Router>
  )
}

export default App
