import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";

import { observer } from 'mobx-react-lite'//импорт функционала mobx
import useStore from '../hooks/useStore';

import { Link, useNavigate } from "react-router-dom";

export default observer(Order)

 function Order(){
    let [orderStore, cartStore]  = useStore('orderStore', 'cartStore');
    let navigate = useNavigate();

    let {name, order} = orderStore.send()


    //modal
    let [showModal, setShowModal] = useState(false);
    let [confirmed, setConfirmed] = useState(false);
    let openModal = () => setShowModal(true);
    let closeModal = () => setShowModal(false);
    let sendForm = () => {
        setConfirmed(true);
        cartStore.reload();
        closeModal();
    };
    
    let onExited = () => {
        if(confirmed){
            navigate('/result')
        }
    }
    
    return <div>
        <h1>Input data</h1>
        <hr/>
        <form>
            {orderStore.form.map(field => (
                <div className="form-group" key={field.name}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className={`form-control ${field.value.length && !field.valid ? 'border border-danger' : '' }`}
                    value={field.value}
                    name={field.name}
                    onChange={(e) => orderStore.update(field.name, e.target.value.trim())}
                    
                />
                </div>
                ))}
        </form>
        <hr/>
        <Link to='/' className='btn btn-warning'>Back to cart</Link>
        <button type="button" className="btn btn-primary" onClick={()=>openModal()} disabled={!orderStore.formValid}>Move to result</button>
        <Modal show={showModal} onHide={closeModal} onExited={onExited}>
            <Modal.Header>
                <Modal.Title>Check data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="primary" onClick={sendForm}>Ok, send</Button>
            </Modal.Footer>
      </Modal>
    </div>
}