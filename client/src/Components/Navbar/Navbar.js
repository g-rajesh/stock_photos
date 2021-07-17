import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

import styles from "./Navbar.module.css";

const Navbar = ({ setQuery }) => {
     const [search, setSearch] = useState("");

     const submitHandler = (e) => {
          e.preventDefault();

          setQuery(search);
     };

     const changeHandler = (value) => {
          setSearch(value);
          if (value === "") {
               setQuery("");
          }
     };

     return (
          <header>
               <form className={styles.form} onSubmit={submitHandler}>
                    <button type="submit">
                         <FaSearch className={styles.searchLogo} />
                    </button>
                    <input
                         type="text"
                         name="search"
                         id="search"
                         value={search}
                         onChange={(e) => changeHandler(e.target.value)}
                    />
                    {search && (
                         <span onClick={() => setSearch("")}>
                              <FaTimes className={styles.clearLogo} />
                         </span>
                    )}
               </form>
               <h3 className={styles.logo}>
                    Unslash<span>.com</span>
               </h3>
          </header>
     );
};

export default Navbar;
