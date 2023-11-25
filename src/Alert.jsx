import React from 'react'
import './component/style/Alert.css'

function Alert(props) {
  const handleAlert = () => {
    const alert = document.getElementById('alert')
    alert.style.display = 'none'
  }
      React.useEffect(() => {
        setTimeout(() => {
          handleAlert()
        }, "5000")
      },[])
  return (
    <div>
        <div className={`alert alert-${props.type} alert-dismissible fade show mt-3`} id='alert' role="alert">
            <strong>{props.alert} </strong> {props.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert