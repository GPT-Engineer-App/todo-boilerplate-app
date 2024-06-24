export const addTask = (tasks, task) => {
  if (task.trim() !== "") {
    return [...tasks, { text: task, completed: false }];
  }
  return tasks;
};

export const deleteTask = (tasks, index) => {
  return tasks.filter((_, i) => i !== index);
};

export const toggleTaskCompletion = (tasks, index) => {
  return tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
};