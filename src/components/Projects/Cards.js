import projectStyle from "./ProjectStyle.module.css";


const Cards = (props) => {
  return (
    <div className={projectStyle.Cards}>
      <div>
        <a href={props.link}>
          <span>
            {props.logo}
          </span>
        </a>
        <h2>
          {props.appTitle}
        </h2>

      </div>
    </div>
  );
};
export default Cards;
