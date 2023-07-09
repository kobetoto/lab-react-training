function Rating(props) {
  let star = [];

  let num = Math.round(props.children);

  for (let i = 0; i < num; i++) {
    star.push('⭐️');
  }

  return (
    <p>
      Rating:{num} {star}{' '}
    </p>
  );
}
export default Rating;
