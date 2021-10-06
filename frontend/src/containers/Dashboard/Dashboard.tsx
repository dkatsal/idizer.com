import { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import styles from './dashboard.module.scss';
import filter from '../../img/filter_icon.png';
import Filter from 'components/Filter';
import Preload from 'components/Preload';
import DashboardMessages from 'components/DashboardMessages';

const Dashboard: FC = observer(() => {
  const [visiblePopUp, setvisiblePopUp] = useState(false);
  const [value, setValue] = useState('inbox');

  const selectFolder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const showFilter = () => {
    setvisiblePopUp(!visiblePopUp);
  };
  return (
    <main>
      <Preload />
      <div className={styles.wrapper}>
        <Link to={`/mailblank`} className={styles.sendMessage}>
          +
        </Link>
        <div className={styles.accountData}>
          <Link className={styles.profilePhoto} to='/profile'>
            DA
          </Link>
          {/* {messagesStore.map()} */}
          <div className={styles.inboxBox}>
            {/* <div className={styles.inboxCircle}>1</div> */}

            <select className={styles.inbox} name='select' onChange={selectFolder}>
              <option className={styles.inboxOption} value='inbox'>
                Inbox
              </option>
              <option className={styles.inboxOption} value='sent'>
                Sent
              </option>
            </select>
          </div>
          <div className={styles.filterBtn}>
            <button className={styles.filterBtn} onClick={showFilter} type='button'>
              <img className={styles.filterLogo} src={filter} alt='filter' />
            </button>

            {visiblePopUp && <Filter />}
          </div>
        </div>
        {/* <Link to={`/mailblank`} className={styles.sendMessage}>
            +
          </Link> */}
        {/* </div> */}
        <div className={styles.allMessages}>
          <DashboardMessages folder={value} />
        </div>
      </div>
    </main>
  );
});
export default Dashboard;
