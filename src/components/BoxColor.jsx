function BoxColor(props) {
  return (
    <>
      <p
        style={{
          border: 'solid 1px black',
          backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        }}
      >
        rgb{`(`}
        {props.r},{props.g},{props.b}
        {`)`}
      </p>
      <p>#....</p>
    </>
  );
}

export default BoxColor;
