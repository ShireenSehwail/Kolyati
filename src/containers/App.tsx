import React ,{useState}from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp,  IonRouterOutlet,  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import CaseCreation from '../pages/CaseCreation/CaseCreation';

import Nav from '../components/Nav/Nav';
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import MyCase from '../pages/MyCase/MyCase';
import Main from '../components/Main/Main';
import Welcome from '../components/Welcome/Welcome';

export const LOCAL_STORAGE_KEY_CASE="koliyati.case";
export const LOCAL_STORAGE_KEY_CASE_CREATED="koliyati.case.created";

const App: React.FC = () =>{    
  const [firstTime,setFirstTime]=useState<boolean>(true);
  let page=null;
  if(firstTime)
  {
  page=<Welcome/>
  }
  else
  {
    page= <Main/>
  }
  return(
 page
    );

  };
export default App;
