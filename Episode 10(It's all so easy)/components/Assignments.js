import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completed" title="Complete"></AssignmentList>
    <AssignmentCreate @add="addAssignment"></AssignmentCreate>
  </section>
  
  `,
  data() {
    return {
      assignments: [
        { id: 1, name: "Assignment 1", complete: false, tag: "math" },
        { id: 2, name: "Assignment 2", complete: false, tag: "math" },
        { id: 3, name: "Assignment 3", complete: false, tag: "scenics" },
        { id: 4, name: "Assignment 4", complete: false, tag: "scenics" },
        { id: 5, name: "Assignment 5", complete: false, tag: "reading" },
      ],
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
        name: e,
        complete: false,
      });
    },
  },
};
