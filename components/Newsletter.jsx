import styles from "../styles/Newsletter.module.css";
import { Radio, Input, Button } from "@nextui-org/react";

function Newsletter() {
  return (
    <div className={styles.main}>
      <h6>SIGN UP TO OUR NEWSLETTER</h6>
      <form className={styles.form}>
        <div className={styles.email_name}>
          <Input className={styles.input} fullWidth underlined required clearable label="First Name" Placeholder="FIRST NAME" initialValue="" />
          <Input className={styles.input} fullWidth underlined required clearable label="Email" Placeholder="EMAIL" initialValue="" />
        </div>
        <div className={styles.radiolist}>
          <Radio.Group required label="" defaultValue="">
            <Radio size="sm" value="essential">
              Just the essential stuff, please
            </Radio>
            <Radio size="sm" value="environmental">
              I’m mostly interested in your environmental stuff
            </Radio>
            <Radio size="sm" value="all">
              Gimme everything! I want to know it all
            </Radio>
          </Radio.Group>
        </div>
        <Button>SUBSCRIBE</Button>
      </form>
    </div>
  );
}

export default Newsletter;
