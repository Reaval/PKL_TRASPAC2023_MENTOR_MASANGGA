<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="toggleDone" class="done">
        {{ task.done ? "Undo" : "Done" }}
      </button>
      <button @click="removeTask" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    toggleDone() {
      this.$store.commit("TOGGLE_task", this.task);
    },
    removeTask() {
      this.$store.commit("REMOVE_task", this.task);
    },
  },
};
</script>

<style>
.buttons .done {
  appearance: none;
  border: none;
  outline: none;
  background-color: rgb(47, 214, 111);
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
}
.buttons .delete {
  appearance: none;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
  background-color: crimson;
  color: #eee;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
}
</style>
