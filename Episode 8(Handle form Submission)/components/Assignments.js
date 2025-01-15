import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completed" title="Complete"></AssignmentList>
  </section>

  <form @submit.prevent="addAssignment">
    <div class="border border-gray-600 text-black">
      <input type="text" v-model="newAssignment" placeholder="New Assignment........" class="p-2">
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
  </form>
  
    `,
  data() {
    return {
      assignments: [
        { id: 1, name: "Assignment 1", complete: false },
        { id: 2, name: "Assignment 2", complete: false },
        { id: 3, name: "Assignment 3", complete: false },
        { id: 4, name: "Assignment 4", complete: false },
        { id: 5, name: "Assignment 5", complete: false },
      ],
      newAssignment: "",
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  methods: {
    addAssignment(e) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: this.newAssignment,
        complete: false,
      });

      this.newAssignment = "";
    },
  },
};
