export default {
  template: `
  <form @submit.prevent="addAssignment">
    <div class="border border-gray-600 text-black">
      <input type="text" v-model="newAssignment" placeholder="New Assignment........" class="p-2">
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
  </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    addAssignment(e) {
      this.$emit("add", this.newAssignment);
      //   this.assignments.push({
      //     id: this.assignments.length + 1,
      //     name: this.newAssignment,
      //     complete: false,
      //   });
      this.newAssignment = "";
    },
  },
};
