import { IonButton, IonContent,  IonHeader,    IonItem,    IonList,    IonListHeader,    IonMenuButton,     IonTitle,  IonToolbar } from '@ionic/react';
import React,{useState} from 'react';
import Main from "../../components/Main/Main";
import Welcome from "../../components/Welcome/Welcome";

const Home: React.FC = () => {
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
  return (page);
};

export default Home;
