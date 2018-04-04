import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <button>
        {this.props.text}
      </button>
    )
  }
}

Child.defaultProps = {
  text: "Click Me"
}