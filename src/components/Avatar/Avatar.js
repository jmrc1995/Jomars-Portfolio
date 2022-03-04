import avatarStyle from "./Avatar.module.css";
import avatarPic from "../../assets/JomarApple.png";

const Avatar = () => {
  return (
    <div className={avatarStyle.Avatar} >

        <img src={avatarPic} />

    </div>
  );
};

export default Avatar;
