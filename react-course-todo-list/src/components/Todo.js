import { useState } from "react"
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// name of the function shouldn start with a capital letter
function Todo(props) { // by convention it's called props
    const [showModal, setModalIsOpen ] = useState(false);
    
    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return ( // every html tag in react is a react component
        <div className='card'>
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
          { showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
          { showModal && <Backdrop onClick={closeModalHandler}/>} 
        </div>
        // backdrop component don't have an inbuilt onClick. we have to define it
    );
  }
  
  export default Todo;