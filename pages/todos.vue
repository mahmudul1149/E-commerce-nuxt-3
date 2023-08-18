<template>
  <div>
    <div
      class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
          <h1 class="text-grey-darkest">Todo List</h1>
          <div class="flex mt-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              v-model="newVal"
              @change="submitData"
            />
            <button
              class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal"
              :disabled="pending"
            >
              {{ pending ? "Submitting..." : "Submit" }}
            </button>
          </div>
        </div>
        <div>
          <div v-if="pending">loading...</div>
          <div v-else>
            <div v-if="todos.length === 0">No item here</div>
            <div
              v-else
              class="flex mb-4 items-center"
              v-for="todo in todos"
              :key="todo._id"
            >
              <p class="w-full text-grey-darkest">
                {{ todo.title }}
              </p>
              <button
                class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              >
                Edit
              </button>
              <button
                class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-black hover:bg-red"
                @click="deleteTodos(todo._id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newVal = ref("");

const {
  data: todos,
  pending,
  refresh,
} = useFetch("https://backend-todo-api-mahmudul.onrender.com/todo/", {
  transform: (todos) => todos.todos,
  server: false,
  lazy: true,
});
const submitData = async () => {
  console.log("click");
  await useFetch(`https://backend-todo-api-mahmudul.onrender.com/todo/`, {
    method: "POST",
    body: {
      title: newVal.value,
    },
  });
  newVal.value = "";
  refresh();
};
const deleteTodos = async (id) => {
  const res = await useFetch(
    `https://backend-todo-api-mahmudul.onrender.com/todo/${id}`,
    {
      method: "DELETE",
    }
  );

  todos.value.filter((todo) => todo.id !== id);
  refresh();
};
</script>

<style></style>
