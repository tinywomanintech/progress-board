import React, { useState } from 'react';

export default class EditTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const titleText = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    const index = this.props.index;
    console.log(titleText, listNumber, index);
    if (titleText && this.props.onUpdateTitle) {
      this.props.onUpdateTitle(titleText, listNumber, index);
    }
    this.textInput.value = '';
  }

  setEditing(editing) {
    this.setState({
      editing,
    });
  }
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input className="input-task" type="text" ref={(input) => (this.textInput = input)} aria-label="edit-title" />
        <button className="update-button">Edit Title</button>
        <button className="update-button" onClick={() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}
