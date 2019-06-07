import React, {Component} from 'react';
import PropTypes from "prop-types"

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "darkgrey",
      padding: "10px",
      borderBottom: "3px #ccc solid",
      textDecoration: this.props.todo.completed
        ? "line-through"
        : "none"
    }
  }

  render() {
    const {title, id} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <h3>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
        </h3>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "100%",
  cursor: "pointer",
  float: "right",
  fontWeight: "bold"
}

export default TodoItem;
