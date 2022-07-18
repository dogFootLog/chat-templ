import { useLocation } from 'react-router-dom';

import styles from './CHAT002.module.css';

const CHAT002 = () => {
  const location = useLocation();
  console.log('chat2 location: ', location.state);
  return (
    <div>
      <div className={styles['input-wrap']}>
        <input id="message" type="text" value="" onChange={() => {}} />
        <button type="button" onClick={() => {}}>
          enter
        </button>
      </div>
    </div>
  );
};

export default CHAT002;
