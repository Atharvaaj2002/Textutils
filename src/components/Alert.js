import React from 'react'

function Alert(props) {
  return (
 ///   props.alert && <div className={`alert alert-${props.alert.type} warning alert-dismissible fade show`} role="alert">
 ///  <strong>{props.alert.type}</strong>:{props.alert.msg}
 // <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    //</div>
    <div style={{height:'50px'}}>
    {props.alert &&   <div class={`alert alert-danger alert-${props.alert.type}`} role="alert">
 <strong>{props.alert.type}</strong>:{props.alert.msg}
</div>}
</div>
  )
}

export default Alert
