import avatarStyle from "./Avatar.module.css";
import avatarPic from "../../assets/JomarApple.png";

const Avatar = () => {
  return (
    <div className={avatarStyle.Avatar} >

        <img src={avatarPic} alt='apple-avatar'/>

    </div>
  );
};

export default Avatar;
