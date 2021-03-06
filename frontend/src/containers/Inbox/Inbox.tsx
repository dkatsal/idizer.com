import { FC } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../../components/Footer';
import React from 'react';
import styles from './Inbox.module.scss';
// import logo from '../../img/idizer.logo.jpg';
import { useParams } from 'react-router-dom';
import { useStore } from 'hooks/useRootStore';
import moment from 'moment';

interface IParam {
  msgId: string;
}

const Inbox: FC = () => {
  const params: IParam = useParams();
  const { messagesStore } = useStore();

  const message = messagesStore.getMessageById(params?.msgId)[0];

  return (
    <main className={styles.wrapper}>
      <Link className={styles.goBack} to='/dashboard'>
        &#8592;
      </Link>
      <h1 className={styles.topic}>{message.subject}</h1>
      <div className={styles.messageBox}>
        <div className={styles.message}>
          <div className={styles.userLogo}>{message.from?.value[0].name.slice(0, 2)}</div>
          <div className={styles.messageData}>
            <div className={styles.titleTime}>
              <h2 className={styles.title}>{message.from?.value[0].name}</h2>
              <p className={styles.time}>{moment(message.date).locale('ru').utc(false).format('D MMMM, HH:mm')}</p>
            </div>
            <div className={styles.toAddressed}>to: {message.to?.value[0].address}</div>
          </div>
        </div>
        {/* <div className={styles.textAreaBox}> */}
        <p className={styles.text}>{message.text?.split('\n\n')[0]}</p>
        <br />
        {/* <p className={styles.text}>{message.text?.split('\n\n')[1]}</p> */}

        {/* </div> */}
      </div>

      <div className={styles.boxBtn}>
        <Link className={styles.submitBtn} to={`/reply/${params.msgId}`}>
          Reply
        </Link>
      </div>
    </main>
  );
};

export default Inbox;
