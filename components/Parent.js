import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Child text="Sign-up now" />
      </div>
    )
  }
}