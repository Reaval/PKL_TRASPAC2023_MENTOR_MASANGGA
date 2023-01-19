export const state = () => ({
  tasks: [],
});

export const mutations = {
  ADD_task(state, task) {
    state.tasks.push({ content: task, done: false });
  },
  REMOVE_task(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_task(state, task) {
    task.done = !task.done;
  },
};
