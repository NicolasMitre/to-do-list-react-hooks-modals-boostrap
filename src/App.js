import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { getTodos } from "./services/todos";
import ListsContainer from "./components/ListContainer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    name: "",
    description: ""
  };
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState(initialFormState);

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, description } = form;
    if (form.id) {
      const newTasks = tasks.map(task => (task.id === form.id ? form : task));
      setTasks(newTasks);
      setForm(initialFormState);
    } else if (name && description) {
      const task = {
        name,
        description
      };
      task.id = tasks[tasks.length - 1].id + 1;
      setTasks([...tasks, task]);
      setForm(initialFormState);
    }
    handleClose();
  };
  useEffect(() => {
    getTodos().then(data => setTasks(data));
  }, []);

  const changeTaskStatus = task => {
    const taskUpdated = tasks.map(taskEl => {
      if (taskEl.id === task.id) taskEl.done = !taskEl.done;
      return taskEl;
    });
    setTasks(taskUpdated);
  };
  const editTask = task => {
    setForm(task);
    handleShow();
  };

  return (
    <div className="App">
      <Button variant="primary" onClick={handleShow}>
        Nueva Tarea
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Configura tu tarea </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col mb-3">
            <Form onSubmit={handleSubmit} onChange={handleChange} form={form} />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="row mt-4">
          <ListsContainer
            tasks={tasks}
            editTask={editTask}
            changeTaskStatus={changeTaskStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
