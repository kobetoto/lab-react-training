function Random(props) {
  let random = () => Math.floor(Math.random() * props.max) + props.min;

  return (
    <>
      Random value between {props.min} and {props.max} {`=>`} {random()}
    </>
  );
}

export default Random;
