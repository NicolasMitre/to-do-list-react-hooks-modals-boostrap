export const getTodos = async () => {
  const tasks= [
    { id: 1, name: "uno", description: "desc uno", done: true },
    { id: 2, name: "dos", description: "desc dos", done: false },
    { id: 3, name: "tres", description: "desc tres", done: false },
    { id: 4, name: "cuatro", description: "desc cuatro", done: false }
  ]
  return tasks
}

export const saveTask = async () => {
  return "tarea guardada"
}