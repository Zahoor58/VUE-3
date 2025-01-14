import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completed" title="Complete"></AssignmentList>
  </section>
  
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
};
