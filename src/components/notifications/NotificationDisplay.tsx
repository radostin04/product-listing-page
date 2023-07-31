import { useContext } from "react";

import useNotificationContext from "../../store/notifications-context";
import Overlay from "../UI/Overlay";
import NotificationPopup from "./NotificationPopup";

import classes from "./NotificationDisplay.module.css";

interface NotificationDisplayProps {
  portalElementID: string;
}

const NotificationDisplay: React.FC<NotificationDisplayProps> = ({ portalElementID }) => {
  const notificationCtx = useContext(useNotificationContext());

  return (
    <Overlay portalElementID={portalElementID} onClose={() => {}} isClickthrough={true}>
      <div className={classes.notificationDisplayContainer}>
        <div className={classes.notificationDisplayChildren}>
          {notificationCtx.notifications.map((el, i) => {
            if (el === undefined) return null;
            return (
              <NotificationPopup
                notification={el}
                key={i}
                id={i}
                closeSelf={notificationCtx.removeNotification}
              />
            );
          })}
        </div>
      </div>
    </Overlay>
  );
};

export default NotificationDisplay;
