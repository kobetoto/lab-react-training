function Greetings(props) {
  // eslint-disable-next-line default-case
  switch (props.lang) {
    case 'de':
      props.lang = 'Alo';
      break;

    case 'fr':
      props.lang = 'Bonjour';
      break;
  }

  return (
    <>
      <p>
        {props.lang}
        {props.children}
      </p>
    </>
  );
}
export default Greetings;
