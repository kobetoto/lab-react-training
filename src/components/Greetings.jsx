function Greetings(props) {
  // eslint-disable-next-line default-case
  switch (props.lang) {
    case 'de':
      return <p> Hallo {props.children}</p>;
    case 'fr':
      return <p> Bonjour {props.children}</p>;
    case 'en':
      return <p> Hello {props.children}</p>;
    case 'es':
      return <p> Ola {props.children}</p>;
    default:
      return <p>👋 {props.children}</p>;
  }
}
export default Greetings;
