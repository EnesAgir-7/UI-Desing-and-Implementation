import { createStore } from "vuex";
import { localHost } from "@/urls";
export default createStore({
  state: {
    completedTasks: [],
    inCompleteTasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.completedTasks = tasks.filter((task) => task.completed);
      state.inCompleteTasks = tasks.filter((task) => !task.completed);
    },
  },
  actions: {
    async fetchTasks(state) {
      const tasks = await fetchTasks();
      state.commit("setTasks", tasks);
    },
  },
});

const fetchTasks = async () => {
  const res = await fetch(
    `${localHost}/tasks?createdBy=${window.atob(
      sessionStorage.getItem("username")
    )}`
  );
  const data = await res.json();
  return data;
};
