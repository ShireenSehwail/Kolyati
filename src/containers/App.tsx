import React ,{useState,useEffect}from 'react';

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

import Welcome from '../components/Welcome/Welcome';
import Main from '../components/Main/Main';

export const LOCAL_STORAGE_KEY_CASE="koliyati.case";
export const LOCAL_STORAGE_KEY_CASE_CREATED="koliyati.case.created";
export const LOCAL_STORAGE_KEY_CASE_ID="koliyati.case.id"
export const LOCAL_STORAGE_KEY_FIRST_TIME="koliyati.first.time";
const App: React.FC = () =>{    
  const [firstTime,setFirstTime]=useState<boolean>(true);

  useEffect(()=>{
    const parsedData= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FIRST_TIME)!);
    if(!parsedData)
    return;
    setFirstTime(false);  

  },[]);

  const changeFirstTimeState=()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY_FIRST_TIME,JSON.stringify({firstTime:false}));
    setFirstTime(false);
  };
  
  let page=null;
  if(firstTime)
  {
  page=<Welcome click={changeFirstTimeState}/>
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
