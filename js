import styles from "./Anonymus.module.css";

const Anonymus = () => {
  return (
    <div className={styles.anonymus}>
      <div className={styles.content}>
        <div className={styles.bg} />
        <div className={styles.contentInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.learnMore}>LEARN MORE</div>
        <div className={styles.contentChild}>
          <div className={styles.frameChild} />
        </div>
        <img
          className={styles.removebgPreview1Icon}
          alt=""
          src="/20063removebgpreview-1@2x.png"
        />
        <div className={styles.contentItem} />
        <img
          className={styles.removebgPreview1Icon1}
          alt=""
          src="/20943477removebgpreview-1@2x.png"
        />
        <div className={styles.maximizeToYour}>MAXIMIZE TO YOUR POTENTIAL</div>
        <i className={styles.levelUpYour}>Level up your business</i>
        <i className={styles.about}>ABOUT</i>
        <i className={styles.about1}>ABOUT</i>
        <i className={styles.contact}>CONTACT</i>
        <i className={styles.help}>HELP</i>
        <img
          className={styles.whatsappImage20230921At2Icon}
          alt=""
          src="/whatsapp-image-20230921-at-2159-1@2x.png"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.login}>LOGIN</div>
      </div>
    </div>
  );
};

export default Anonymus;
