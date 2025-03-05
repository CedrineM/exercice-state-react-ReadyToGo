const Button = ({ state, setState }) => {
  return (
    <div>
      <button
        disabled={state === true ? true : false}
        className={state === true ? "button-active" : "button-desactive"}
        onClick={() => {
          setState(!state);
        }}
      >
        ON
      </button>
      <button
        disabled={state === true ? false : true}
        className={state === true ? "button-desactive" : "button-active"}
        onClick={() => {
          setState(!state);
        }}
      >
        OFF
      </button>
    </div>
  );
};
export default Button;
