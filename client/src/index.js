import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
     uri: "http://localhost:4000",
     cache: new InMemoryCache({
          typePolicies: {
               Query: {
                    fields: {
                         getPhotos: {
                              keyArgs: ["query"],
                              merge: (existing, incoming, { readField }) => {
                                   console.log(existing);
                                   if (!existing) return incoming;
                                   return {
                                        ...existing,
                                        page: incoming.page,
                                        photos: [
                                             ...existing.photos,
                                             ...incoming.photos,
                                        ],
                                   };
                              },
                         },
                    },
               },
          },
     }),
});

ReactDOM.render(
     <React.StrictMode>
          <ApolloProvider client={client}>
               <App />
          </ApolloProvider>
     </React.StrictMode>,
     document.getElementById("root")
);
