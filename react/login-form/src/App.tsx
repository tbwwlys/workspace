
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import { LoginContainer } from './pages/login/LoginContainer.tsx'
import { PageB } from './pages/pageb/PageB.tsx'

function App() {
  // react 一切皆组件
  
  return (
    <>
     <HashRouter>
      <Switch>

        <Route exact={true} path="/" component={LoginContainer}></Route>
        <Route path="/pageB" component={PageB}></Route>
      </Switch>
     </HashRouter>
    </>
  )
}

export default App
