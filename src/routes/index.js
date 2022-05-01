import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import AboutPage from '../pages/AboutPage'
import {Switch,Route} from "react-router-dom"

const Routes = () => {
    return(
        <Switch>
             <Route exact path='/'><HomePage/></Route>
             <Route exact path='/Dashboard'><DashboardPage/></Route>
             <Route exact path='/Information'></Route>
             <Route exact path='/AboutUs'><AboutPage/></Route>
        </Switch>
    )
}
export default Routes