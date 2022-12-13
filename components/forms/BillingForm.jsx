import { Input } from "@nextui-org/react";

const info = [
  { label: "Firtsname", placeholder: "John" },
  { label: "Lastname", placeholder: "Doe" },
  { label: "Email", placeholder: "john@example.com" },
  { label: "Mobile", placeholder: "12345678" },
  { label: "Address 1", placeholder: "Street and number" },
  { label: "Address 2 (optional)", placeholder: "Apartment, building, floor" },
  { label: "City", placeholder: "City name" },
  { label: "Zip", placeholder: "1234" },
];

function InfoForm(props) {
  const contactInfo = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <div className="grid">
      {info.map((info, i) => {
        return <Input width="100%" clearable label={info.label} placeholder={info.placeholder} key={i} />;
      })}
    </div>
  );
}

export default InfoForm;
