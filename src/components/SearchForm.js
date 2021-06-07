import React, { useState } from "react";

export default function SearchForm(props) {
  const { handleSubmit } = props;
  const [name, setName] = useState("");
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail(e) {
    setName(e.target.value);
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => handleSubmit(e, name)}>
        <div className="form-control">
          <label htmlFor="name">search your album</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button className="btn-primary">find</button>
        </div>
      </form>
    </section>
  );
}
