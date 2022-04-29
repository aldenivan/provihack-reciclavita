import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import {Switch,Route} from "react-router-dom"

const Routes = () => {
    return(
        <Switch>
             <Route exact path='/'><HomePage/></Route>
             <Route exact path='/Dashboard'><DashboardPage/></Route>
        </Switch>
    )
}
export default Routes