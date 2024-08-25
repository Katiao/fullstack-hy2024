import "./styles.css";

export const SearchField = () => {
  return (
    <div className="search-container">
      <div>find countries</div>
      <input className="search-box" type="text" placeholder="Search..." />
    </div>
  );
};
