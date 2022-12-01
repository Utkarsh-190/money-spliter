import classes from "./listItems.module.css";

function ListItem(props) {
  console.log("[items]", props);
  let arr = props.data.map((ele, index) => {
    return (
      <div key={index}>
        {ele.name} : {ele.bal}
      </div>
    );
  });
  return (
    <div>
      List items
      {arr}
    </div>
  );
}

export default ListItem;
