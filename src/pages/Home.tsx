import { IonContent, IonHeader, IonGrid,IonRow,IonCol, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
    <IonHeader>
    <IonToolbar color="warning">
          <IonTitle color="light">Kolliyati</IonTitle>
      </IonToolbar>
  </IonHeader>
  <IonContent >
  <IonGrid>
        <IonRow >
              <IonCol>
                    <h1 text-uppercase no-padding no-margin>Welcome</h1>
                    <h3 no-padding no-margin>Shireen</h3>
              </IonCol>
        </IonRow>
  </IonGrid>

  </IonContent>
  </>
  );
};

export default Home;
