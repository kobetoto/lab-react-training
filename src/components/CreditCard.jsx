function CreditCard(props) {
  console.log('credit card', props);

  let numString = props.number.toString(); //=> int en string

  let num2 = numString.substring(0, 11); //=> prendre que la 1er partie

  let hidde = num2.replace(/./g, '*'); //=>la crypter

  let visible = numString.substring(11, 15); //=> prendre les 4derniers int

  let cryptCb = hidde + visible; //=> rassembler les num crypté(1ere part) et rajouter les 4dernier int

  return (
    <div
      style={{
        border: 'solid 2px black',
        backgroundColor: `${props.bgColor}`,
        borderRadius: '20px',
      }}
    >
      <p>{props.type}</p>
      <p>{cryptCb}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
