import React from 'react'
import './component/style/Alert.css'

function Alert(props) {
      const [show, setShow] = React.useState(true)

      React.useEffect(() => {
        const timer = setTimeout(() => {
          setShow(false)
        }, "10000");

        return () => {
          clearTimeout(timer)
        };
      },[])

  return (
    <div>
      {show && (
        <div className={`alert alert-${props.type} alert-dismissible fade show mt-3`} id='alert' role="alert">
            <strong>{props.alert} </strong> {props.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => setShow(false)} aria-label="Close"></button>
        </div>
      )}
    </div>
  )
}

export default Alert