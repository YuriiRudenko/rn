import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const STEP = 10;

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_red":
        return (state.red + action.payload > 255 || state.red + action.payload < 0) ?
          state :
          { ...state, red: state.red + action.payload };
      case "change_green":
        return (state.green + action.payload > 255 || state.green + action.payload < 0) ?
          state :
          { ...state, green: state.green + action.payload };
      case "change_blue":
        return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ?
          state :
          { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return <View>
    <ColorCounter
      onIncrease={() => dispatch({ type: "change_red", payload: STEP })}
      onDecrease={() => dispatch({ type: "change_red", payload: -STEP })}
      title="Red"
    />
    <ColorCounter
      onIncrease={() => dispatch({ type: "change_green", payload: STEP })}
      onDecrease={() => dispatch({ type: "change_green", payload: -STEP })}
      title="Green"
    />
    <ColorCounter
      onIncrease={() => dispatch({ type: "change_blue", payload: STEP })}
      onDecrease={() => dispatch({ type: "change_blue", payload: -STEP })}
      title="Blue"
    />
    <View style={ { height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` } }></View>
  </View>;
}

export default SquareScreen;