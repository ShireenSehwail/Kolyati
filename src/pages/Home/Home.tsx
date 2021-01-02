import { IonApp,IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import React from 'react';
import { Route, Redirect } from "react-router";
import Nav from '../../components/Nav/Nav';
import CaseCreation from '../CaseCreation/CaseCreation';
import MyCase from '../MyCase/MyCase';
import PageNotFound from '../PageNotFound/PageNotFound';

const Home: React.FC = () => {
return (<IonApp >
  <Nav/>
    <IonReactRouter>
    <IonRouterOutlet  id="main">
      <Route path="/caseCreation" component={CaseCreation} exact={true} />
      <Route path="/Home" component={Home} exact={true}/>
      <Route path="/myCase" component={MyCase} exact={true}/>
      <Route exact path="/" render={() => <Redirect to="/Home" />} />
      <Route component={PageNotFound} />
    </IonRouterOutlet>
  </IonReactRouter>
  </IonApp>)
}

export default Home;
