import { NotificationManager } from 'react-notifications';

const createNotification = (type, genre, error) => {
  switch (type) {
    case 'success':
      NotificationManager.success(
        genre !== ''
          ? `Your request is approved! Books by genre: ${genre}`
          : 'Your request is approved!',
      );
      break;
    case 'info':
      NotificationManager.info('Info message');
      break;
    case 'warning':
      NotificationManager.warning(
        'Warning message',
        'Close after 3000ms',
        3000,
      );
      break;
    case 'error':
      NotificationManager.error(`${error}`, 5000);
      break;
    default:
      break;
  }
};

export default createNotification;
