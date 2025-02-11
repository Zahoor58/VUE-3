import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <section class="flex gap-2">
    <AssignmentList :assignments="filters.inProgress" title="In Progress">
    <AssignmentCreate @add="addAssignment"></AssignmentCreate>
    </AssignmentList>
    <div v-if="showCompleted">
      <AssignmentList 
      :assignments="filters.completed" 
      title="Complete" 
      can-toggle 
      @toggle="showCompleted=!showCompleted"
      ></AssignmentList>
    </div>
    
  </section>
  
  `,
  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },
  created() {
    fetch("http://localhost:3001/assignments")
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
