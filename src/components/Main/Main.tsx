import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route, Redirect } from "react-router";
import CaseCreation from "../../pages/CaseCreation/CaseCreation";
import Home from "../../pages/Home/Home";
import MyCase from "../../pages/CaseDisplay/CaseDisplay";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Search from "../../pages/Search/SearchCase";
import SharePage from "../../pages/Share/Share";
import Nav from "../Nav/Nav";

const Main:
React.FC=(props)=>(
    <IonApp >
    <IonReactRouter>
    <Nav/>
    <IonRouterOutlet  id="main">
      <Route path="/caseCreation" component={CaseCreation} exact={true} />
      <Route path="/Home" component={Home} exact={true}/>
      <Route path="/Case/:id" component={MyCase} exact={true}/>
      <Route path="/Share" component={SharePage} exact={true}/>
      <Route path="/Search" component={Search} exact={true}/>

      
      <Route exact path="/" render={() => <Redirect to="/Home" />} />
      <Route component={PageNotFound} />
    </IonRouterOutlet>
  </IonReactRouter>
  </IonApp>
)
export default Main;