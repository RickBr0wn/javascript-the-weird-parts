import Score from "./Score";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      score: this.state.score + 1 //this.state.score + 1
    });
  }

  render() {
    return (
      <div>
        <h1 id="title"> Game </h1>{" "}
        <Score score={this.state.score} increment={this.increment} />
        <Canvas /> {/*Not important here, just for the game*/}{" "}
      </div>
    );
  }
}

export default App;
