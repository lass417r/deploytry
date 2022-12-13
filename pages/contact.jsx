import React from "react";
import { Input, Textarea, Dropdown, Button } from "@nextui-org/react";
import styles from "../styles/Contact.module.css";

function contact() {
  const [selected, setSelected] = React.useState(new Set(["Choose one"]));

  const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);

  const info = [
    { label: "Firtsname", placeholder: "John" },
    { label: "Lastname", placeholder: "Doe" },
    { label: "Email", placeholder: "johnDoe@example.com" },
    { label: "Message", placeholder: "Hi, my name is" },
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>CONTACT US</h1>
      <div className={styles.contactForm}>
        <Input label="Firtsname" clearable labelPlaceholder="John"></Input>
        <Input label="Lastname" clearable labelPlaceholder="Doe"></Input>
        <Input label="Email" clearable labelPlaceholder="johnDoe@example.com"></Input>
        <Dropdown label="Reason for contact">
          <Dropdown.Button color="secondary" css={{ tt: "capitalize" }} flat>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            selectedKeys={selected}
            onSelectionChange={setSelected}
            disallowEmptySelection
            aria-label="Single selection actions"
            selectionMode="single"
            label="Reason for contact"
            aria-label="Static Actions"
          >
            <Dropdown.Item key="general">General enquiries</Dropdown.Item>
            <Dropdown.Item key="ticket">Ticket enquiries</Dropdown.Item>
            <Dropdown.Item key="volunteer">Volunteer enquiries</Dropdown.Item>
            <Dropdown.Item key="press">Press enquiries</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Textarea label="Message" labelPlaceholder="Hi, lorem ipsum"></Textarea>
        <Button>SEND</Button>
      </div>
    </div>
  );
}

export default contact;
