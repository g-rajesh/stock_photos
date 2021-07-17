import styles from "../PhotoList.module.css";

const SinglePhoto = ({
     picture,
     picture_description,
     likes,
     username,
     user_portfolio,
     user_profile,
}) => {
     return (
          <div className={styles.photo}>
               <img src={picture} alt={picture_description} />
               <div className={styles.details}>
                    <img src={user_profile} alt={username} />
                    <div className={styles.profile}>
                         <h3>{username}</h3>
                         <p>
                              <span>{likes}</span>{" "}
                              {likes === 1 ? "like" : "likes"}
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default SinglePhoto;
