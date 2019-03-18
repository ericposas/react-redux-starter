import React from 'react'

// REMEMBER: React Component props can store/render React components, but
// not non-string JSON or JS Object data

export default class AppEntry extends React.Component {

  /*
    Return some JSX here
    Remember, "this.props.." are mapped to Redux dispatch,
    this.state is not set here, only this.props
    State is handled at the top level by Redux, and trickles
    down from there
  */
  render(){
    return(
      <div></div>
    )
  }

}
