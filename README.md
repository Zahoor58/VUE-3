# Perent-child communication
 ## Parent Communicate to child component
 #### chils component
 ``
 props:{
    assignments:Array
 }
 ``

 #### Perent component
 ``
 <AssignmentCreate :assignments="assignments"></AssignmentCreate>
 ``


  ### Child Communicate to parent component
 #### chils component
 ``
 this.$emit("add", this.newAssignment);
 ``

 #### Perent component
 ``
<AssignmentCreate @add="addAssignment"></AssignmentCreate>
addAssignment(e) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: e,
        complete: false,
      });
    },
 ``

 # Note:
 ## Perent communicate through prop
 ## child communicate by emit

