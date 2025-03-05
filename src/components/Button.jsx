const Button = ({ state, setState }) => {
  return (
    <div>
      <button
        className={state === true ? "button-active" : "button-desactive"}
        onClick={() => {
          setState(!state);
        }}
      >
        ON
      </button>
      <button
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
