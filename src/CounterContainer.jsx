import { connect } from "react-redux";

const CounterComponent = ({ count, dispatch }) => {
	return (
		<div className="container">
			<button
				onClick={() => dispatch({ type: "INCREMENT10" })}
				id="button-increment10"
			>
				+10
			</button>
			<button
				onClick={() => dispatch({ type: "INCREMENT" })}
				id="button-increment"
			>
				+1
			</button>
			<span id="counter-render"> {count} </span>
			<button
				onClick={() => dispatch({ type: "DECREMENT" })}
				id="button-decrement"
			>
				-1
			</button>
			<button
				onClick={() => dispatch({ type: "DECREMENT10" })}
				id="button-decrement10"
			>
				-10
			</button>
			<button onClick={() => dispatch({ type: "RESET" })} id="button-reset">
				reset
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	count: state,
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
