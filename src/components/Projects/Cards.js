import projectStyle from "./ProjectStyle.module.css";

const Cards = (props) => {
  return (
    <div className={projectStyle.Cards}>
      <div>
        <a>
          <span>
            <img src={props.logo} />
            

            {/* <p>TODO</p> */}
            {/* <VscNotebook className={projectStyle.TodoIcon} /> */}
          </span>
        
        </a>
      </div>
    </div>
  );
};
export default Cards;
