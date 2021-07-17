import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import GET_PHOTOS from "./queries/getPhotos";
import Navbar from "./Components/Navbar/Navbar";
import PhotoList from "./Components/PhotoList/PhotoList";

function App() {
     const [query, setQuery] = useState("");

     const { loading, data, fetchMore } = useQuery(GET_PHOTOS, {
          variables: {
               page: 0,
               query,
          },
     });

     if (data) console.log(data.getPhotos.page);

     return (
          <div className="App">
               <Navbar setQuery={setQuery} />
               {loading ? (
                    <h2 className="loader">Loading...</h2>
               ) : (
                    <PhotoList data={data} />
               )}

               <div className="btn">
                    <button
                         onClick={() => {
                              fetchMore({
                                   variables: {
                                        page: data.getPhotos.page,
                                   },
                              });
                         }}
                    >
                         Load More
                    </button>
               </div>
          </div>
     );
}

export default App;
