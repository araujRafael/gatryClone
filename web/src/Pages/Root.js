import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

//components
import PagesPromotionSearch from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/Form/Form';

const Root = () => {
  return (
   <Router>
       <Switch>
           <Route path='/create' component={PagesPromotionForm} />
           <Route path='/edit/:id' component={PagesPromotionForm} />
           <Route path='/' component={PagesPromotionSearch} />
       </Switch>
   </Router> 
  )
}

export default Root;
