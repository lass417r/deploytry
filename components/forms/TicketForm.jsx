import TicketButton from "../TicketButton";
import { Checkbox } from "@nextui-org/react";
import { useRef, useState } from "react";

function TicketForm(props) {
  const theForm = useRef(null);

  const addItem = (cartItem) => {
    let cartCopy = [...props.cart];
    const i = props.cart.findIndex((f) => f.id == cartItem.id);
    if (i > -1) {
      cartCopy[i].amount = cartItem.amount;
      props.setCart(cartCopy);
    } else {
      props.setCart((prevState) => prevState.concat(cartItem));
    }
  };

  return (
    <form ref={theForm}>
      <TicketButton value="regular" type="ticket" name="Regular Ticket" price="799" id={1} addItem={addItem} />
      <TicketButton value="vip" type="ticket" name="VIP Ticket" price="1299" id={2} addItem={addItem} />
      <TicketButton value="tent2" type="service" name="2 person tent (incl. the tent)" price="299" id={3} addItem={addItem} />
      <TicketButton value="tent3" type="service" name="3 person tent (incl. the tent)" price="399" id={4} addItem={addItem} />

      {/* <Checkbox.Group size="sm" defaultValue={["green"]} aria-label="green camping">
        <Checkbox value="green" name="green">
          Green camping
        </Checkbox>
      </Checkbox.Group> */}
    </form>
  );
}

export default TicketForm;
