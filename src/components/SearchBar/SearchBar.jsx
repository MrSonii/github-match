export default function SearchBar({ userName, onValueChange, onSearchClick }) {
  return (
    <div className="body">
      <label htmlFor="search-bar">Github-Username: </label>
      <input
        type="text"
        id="search-bar"
        className="search-bar"
        placeholder="typeUserName"
        value={userName}
        onChange={onValueChange}
      ></input>
      <button className="search-button" onClick={onSearchClick}>
        &#128269;
      </button>
    </div>
  );
}
