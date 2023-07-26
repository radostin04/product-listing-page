import { createContext, useContext, useState } from "react";

type Notification = {
  timeout: number,
  text: string,
}

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (key: number) => void;
}

export const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const NotificationsContextProvider = (props: {children: React.ReactNode}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    setNotifications((prevState) => {
      const newState = [...prevState, notification];
      return newState;
    });
  };

  const removeNotification = (key: number) => {
    setNotifications((prevState) => {
      const newState = [...prevState];
      delete newState[key];
      return newState;
    });
  };

  return (
    <NotificationsContext.Provider value={{
      notifications,
      addNotification,
      removeNotification,
    }}>
      {props.children}
    </NotificationsContext.Provider>)
}

const useNotificationContext = () => {
  const checkContext = useContext(NotificationsContext);
  if (!checkContext) {
    throw new Error("no NotificationsContext.Provider found when calling useNotificationContext");
  }
  return NotificationsContext as React.Context<NotificationsContextType>;
};

export default useNotificationContext;
