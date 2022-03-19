import projectStyle from "./ProjectStyle.module.css";

const Cards = (props) => {
  return (
    <div className={projectStyle.Cards}>
      <a href={props.link}>
        <div>
          <span>{props.logo}</span>

          <h2>{props.appTitle}</h2>
        </div>
      </a>
    </div>
  );
};
export default Cards;
