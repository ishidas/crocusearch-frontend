'use strict';
import React from 'react';


export class InputField extends React.Component {
  static defaultProps = {data: 'type something in'}

  constructor(props){
    super(props);
    this.state = {userInput: this.props.data}
  }

  userDataInput(e){
    // e.preventDefault();
    console.log('submit data', this.refs.input.value);
    // this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <form noValidate
        onSubmit=""
      >
        <div class="large-3 columns"></div>
        <div class="large-6 columns">
          <input
            type="text"
            ref="input"
            // value={this.state.value}
            placeholder={this.state.userInput}
            onChange={this.userDataInput.bind(this)}
          />
        </div>
        <div class="large-3 columns"></div>
        <button
          class="success button"
          type="button"
          name="Search"
          // onSubmit={this.submit.bind(this)}
          >Search</button>
      </form>
    );
  }
}
