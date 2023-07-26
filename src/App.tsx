import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTile from './components/productTile/productTile';
import useNotificationContext, { NotificationsContextProvider } from './store/notifications-context';
import NotificationDisplay from './components/notifications/NotificationDisplay';

function App() {
  const notificationsCtx = useContext(useNotificationContext());

  const buttonHandler = () => {
    notificationsCtx.addNotification({timeout: 10, text: "Product added to cart!"})
  }
  return (
    <div>
      <NotificationDisplay portalElementID="portal"></NotificationDisplay>
      <ProductTile
      name="test"
      description="description"
      price={19.99}
      discount={20}
      rating={4.6}
      image="https://dev.bg/wp-content/uploads/2021/09/s4-v1-black-46x40.png"
      onClickButton={buttonHandler}></ProductTile>
    </div>
  );
}

export default App;
