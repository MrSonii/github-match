export default function SearchBar({ onValueChange, onSearchClick, split }) {
  return (
    <div className={`body ${split}`}>
      <label htmlFor="search-bar">Github-Username: </label>
      <input
        type="text"
        id="search-bar"
        className="search-bar"
        placeholder="typeUserName"
        onChange={onValueChange}
      ></input>
      <button className="search-button" onClick={onSearchClick}>
        &#128269;
      </button>
    </div>
  );
}
