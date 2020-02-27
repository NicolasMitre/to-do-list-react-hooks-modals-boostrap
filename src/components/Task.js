import React from "react"

const Task = ( { task, onChangeState, onEditTask } ) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          {task.name}
        </div>
        <div className="card-body">
          <p className="card-text">{task.description}</p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <button className="btn btn-outline-success"
                onClick={() => onChangeState()} >
                { task.done ? "Reiniciar" : "Finalizar"}
              </button>
            </div>
            <div className="col-12 col-sm-6">
              <button className="btn btn-outline-primary float-right" onClick={() => onEditTask()} >Editar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task