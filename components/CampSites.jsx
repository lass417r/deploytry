function Available(props) {
  return (
    <div className="spot_list">
      {props.data.map((e, i) => {
        return (
          <div key={i}>
            <h2>{e.area}</h2>
            <p>Spots {e.spots}</p>
            <p>Available {e.available}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Available;
