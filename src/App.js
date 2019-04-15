import React, { Component } from 'react';
import './App.css';

const Form = ({ handleChange, handleSubmit, title, value }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-title">{title}</label>
      <input
        type="text"
        id="input-title"
        onChange={handleChange}
        value={value}
      />
      <input type="submit" />
    </form>
  );
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Title",
      globalTitle: "Global Title"
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ title: value })
  }

  handleSubmit = (event) => {
    const title = this.state.title

    if (/\S/.test(title)) {
      this.setState({ globalTitle: `Mon formulaire - ${title}` })
    } else {
      alert("Input field can't be empty")
    }
    event.preventDefault()
  }

  componentDidMount() {
    console.log("Formulaire rendu");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.globalTitle !== this.state.globalTitle) {
      console.log('Titre changé')
    }
  }

  render() {
    return (
      <div className="App">
        <header className="">
          <h4>{this.state.globalTitle}</h4>
          <Form
            title={this.state.title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.title}
          />
        </header>
      </div>
    );
  }
}

export default App;
