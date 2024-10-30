class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 50 };

    this.state.volume;
    this.handleChange = this.handleChange.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    // you may also add a filter here to skip keys, that do not have an effect for your app
    const audio = document.getElementById(event.key.toUpperCase());
    audio.volume = this.state.volume / 100;
    audio.play();

    const drumPads = document.getElementsByClassName("drum-pad");
    const displayText = document.getElementById("display");
    for (let i = 0; i < drumPads.length; i++) {
      const drumPad = drumPads[i];
      if (drumPad.textContent === event.key.toUpperCase()) {
        displayText.innerText = drumPad.id;
      }
    }



  }
  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleChange(event) {
    this.setState({
      volume: event.target.value });

  }

  playSound(event) {
    const audio = event.target.querySelector('.clip');
    audio.volume = this.state.volume / 100;
    audio.play();

    const displayText = document.getElementById("display");
    displayText.textContent = event.target.id;
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "textContainer" }, /*#__PURE__*/
      React.createElement("div", { class: "teal", id: "display" })), /*#__PURE__*/


      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/

      React.createElement("div", { id: "frame", className: "outer-box" }, /*#__PURE__*/
      React.createElement("div", { className: "drum-pad blue", id: "Heater-1", type: "button", onClick: this.playSound, innerText: "Q" }, "Q", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad orange", id: "Heater-2", type: "button", onClick: this.playSound, innerText: "W" }, "W", /*#__PURE__*/
      React.createElement("audio", { className: "clip", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad purple", id: "Heater-3", type: "button", onClick: this.playSound, innerText: "E" }, "E", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" })), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad green", id: "Heater-4", type: "button", onClick: this.playSound, innerText: "A" }, "A", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad red", id: "Heater-6", type: "button", onClick: this.playSound, innerText: "S" }, "S", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad teal", id: "Dsc_Oh", type: "button", onClick: this.playSound, innerText: "D" }, "D", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad black", id: "Kick_n_Hat", type: "button", onClick: this.playSound, innerText: "Z" }, "Z", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad coral", id: "RP4_KICK_1", type: "button", onClick: this.playSound, innerText: "X" }, "X", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad white", id: "Cev_H2", type: "button", onClick: this.playSound, innerText: "C" }, "C", /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }))), /*#__PURE__*/


      React.createElement("div", { className: "side-box" }, /*#__PURE__*/
      React.createElement("input", { type: "range", value: this.state.input, onInput: this.handleChange, min: "1", max: "100", className: "slider", id: "myRange" })))));




  }}

CHANGE = "CHANGE";
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE:
      return action.volume;
    default:
      return state;}

};

// React-Redux
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const store = Redux.createStore(messageReducer);

const Container = connect()(Presentational);

class AppWrapper extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(Container, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.getElementById("root"));
