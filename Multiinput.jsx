import { useState } from "react";

function Nform(params) {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>multidata</h2>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="Number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <br />
          <button type="submit"> submit</button>
        </form>
      </div>
    </>
  );
}

export default Nform;
