import React,{useState} from 'react';
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
import CaseCreation from '../pages/CaseCreation';
import LogIn from '../pages/logIn';
import SignUp from '../pages/signUp';
import Nav from '../components/Nav/Nav';

const App: React.FC = () =>{    
  const [isAuth,setIsAuth]=useState<boolean>(true);
  const handleSignIn=()=>{
    setIsAuth(true);
  }
  const handleSignOut=()=>{
    setIsAuth(false);
  }
  return(<IonApp>
    <Nav 
    isAuth={isAuth}
    onSignInClick={handleSignIn}
    onSignOutClick={handleSignOut}

    />
  <IonReactRouter>
      <IonRouterOutlet  id="main">
        <Route path="/caseCreation" component={CaseCreation} exact={true} />
        <Route path="/logIn" component={LogIn} exact={true} />
        <Route path="/signUp" component={SignUp} exact={true}/>
        <Route exact path="/" render={() => <Redirect to="/caseCreation" />} />
      </IonRouterOutlet>
    </IonReactRouter>
    </IonApp>
    );

  };
export default App;
