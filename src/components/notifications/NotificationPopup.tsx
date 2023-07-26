import { useEffect } from "react";
import classes from "./NotificationPopup.module.css";

interface NotificationPopupProps {
  notification: { timeout: number; text: string };
  closeSelf: (key: number) => void;
  id: number;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ notification, closeSelf, id }) => {
  useEffect(() => {
    //Make the notification close itself 0.1s after it's timeout expires
    setTimeout(() => {
      closeSelf(id);
    }, notification.timeout * 1000 + 100);
  }, [notification, closeSelf, id]);


  return (
    <div className={classes.notificationPopup}>
      <div className={classes.countdownBarBar}>
        <div
          // set up timing for the timeout bar
          style={{ animationDuration: `${notification.timeout}s` }}
          className={classes.countdownBarFilled}
        ></div>
      </div>
      <p className={classes.notificationText}>{notification.text}</p>
    </div>
  );
};

export default NotificationPopup;
