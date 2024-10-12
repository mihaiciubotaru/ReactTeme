import React from "react";
import styles from "./profile.module.css";

const Profile = () => {
    return (
        <>
            <div class="profile" className={styles.profile_main}>
                <div class="description">
                    <img width={"80px"} className={styles.profile_img}
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                    class="avatar"
                    />
                </div>
                <div>
                    <p class="name" className={styles.profile_name}>Petra Marica</p>
                </div>
                <div>
                    <p class="tag" className={styles.profile_details}>@pmarica</p>
                </div>
                <div>
                    <p class="location" className={styles.profile_details}>Salvador, Brasil</p>
                </div>
                <div>
                    <ul class="stats" className={styles.profile_ul}>
                        <li className={styles.profile_li}>
                            <p><span class="label">Followers</span></p>
                            <p><b><span class="quantity">1000</span></b></p>
                        </li>
                        <li className={styles.profile_li}>
                            <p><span class="label">Views</span></p>
                            <p><b><span class="quantity">2000</span></b></p>
                        </li>
                        <li className={styles.profile_li}>
                            <p><span class="label">Likes</span></p>
                            <p><b><span class="quantity">3000</span></b></p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Profile;

// date props:
// username — numele utilizatorului
// tag — tag-ul rețelei sociale fără @
// location — orașul și țara
// avatar — link-ul imaginii
// stats — obiect cu informații despre activitatea sa