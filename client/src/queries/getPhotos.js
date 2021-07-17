import { gql } from "@apollo/client";

const GET_PHOTOS = gql`
     query getPhotos($page: Int, $query: String) {
          getPhotos(page: $page, query: $query) {
               page
               photos {
                    id
                    likes
                    picture
                    picture_description
                    user_portfolio
                    user_profile
                    username
               }
          }
     }
`;

export default GET_PHOTOS;
