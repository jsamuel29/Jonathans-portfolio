function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{ id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
{ id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
{ id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
{ id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
{ id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
{ id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
{ id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
{ id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
{ id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",










    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);window.focus();}componentWillMount() {document.removeEventListener('keydown', this.handleKeyDown);}

  render() {
    return (
      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick },
      React.createElement("h1", null, this.props.letter),
      React.createElement("audio", { ref: ref => this.audio = ref, className: "clip", src: this.props.src, id: this.props.letter })));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",






    display => this.setState({ display }));this.state = { display: "Drums Away !!!" };}

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "display" }, this.state.display),
      React.createElement("div", { id: "drum-pads" },
      data.map((d) =>
      React.createElement(DrumPad, {
        id: d.id,
        letter: d.letter,
        src: d.src,
        ref: this.setPadRef,
        handleDisplay: this.handleDisplay })))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));