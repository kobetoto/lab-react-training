function DriverCard(props) {
  let star = [];

  let num = Math.round(props.rating);

  for (let i = 0; i < num; i++) {
    star.push('⭐️');
  }

  return (
    <div className="driverCard">
      <img src={props.img} alt="profil" />
      <p>{props.name}</p>
      <p>rating:{star}</p>
      <p>
        {props.car.model} {props.car.licensePlate}
      </p>
    </div>
  );
}
export default DriverCard;
