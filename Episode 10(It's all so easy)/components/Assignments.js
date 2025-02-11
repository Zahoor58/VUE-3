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
      assignments: [],
    };
  },
  created() {
    fetch("http://localhost:4000/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
