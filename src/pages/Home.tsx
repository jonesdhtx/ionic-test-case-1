import React, { useRef } from 'react';
import {
  IonButtons, IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, useIonModal, IonPopover,
} from '@ionic/react';

const ModalExample = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLIonInputElement>(null);

  function onPopoverItemClickFromModal (ev: React.MouseEvent) {
    console.log('onPopoverItemClick From Modal!!')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="click-trigger-2">Trigger Popover</IonButton>
        <IonPopover dismissOnSelect trigger="click-trigger-2" triggerAction="click">
          <IonContent class="ion-padding">
            Hello World!
            <IonButton expand="block" onClick={onPopoverItemClickFromModal}>I'm clickable</IonButton>
          </IonContent>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

function Example() {
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  function onPopoverItemClickFromPage(ev: React.MouseEvent) {
    console.log('onPopoverItemClick From Page!!')
  }

  function openModal() {
    present();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popover within a Controller Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => openModal()}>
          Open Modal
        </IonButton>
        <IonButton id="click-trigger-1">Trigger Popover</IonButton>
        <IonPopover dismissOnSelect trigger="click-trigger-1" triggerAction="click">
          <IonContent class="ion-padding">
            Hello World!
            <IonButton expand="block" onClick={onPopoverItemClickFromPage}>I'm clickable</IonButton>
          </IonContent>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
}

export default Example;