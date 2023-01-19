<template>
  <div>
    <div class="judul">
      <h1>TodoList-App</h1>
    </div>
    <p>Susun kegiatan harianmu</p>

    <div class="masukan">
      <div>
        <input
          type="text"
          v-model="newTask"
          placeholder="Add a new task"
          @keypress.enter="addTask"
        />
        <button @click="addTask" style="background-color: #233d4d">ADD</button>
      </div>
    </div>
    <div class="todo-container">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </div>
</template>

<style>
* {
  border: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
body {
  background-color: #fcca46;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
.judul {
  text-align: center;
  font-size: 38px;
  color: #233d4d;
}
p {
  text-align: center;
  font-size: 20px;
  margin-top: -30px;
  margin-bottom: 50px;
  color: white;
}
.masukan button {
  width: 15%;
  font-size: 25px;
  display: inline-block;
  justify-content: center;
  border-radius: 10px;
  color: white;
}
.masukan input {
  width: 75%;
  font-size: 25px;
  display: inline-block;
  justify-content: center;
  border-radius: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_task", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
