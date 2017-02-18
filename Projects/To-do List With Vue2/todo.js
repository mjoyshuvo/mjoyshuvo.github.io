new Vue({
	el:"#todo",
	data: {
		newTask:"",
		taskList:[]
	},
	computed: {
	  areAllSelected: function() {
	    //Check if every checked property returns true and if there is at least one to-do item
	    return this.taskList.every(function(task) {
	      return task.checked;
	    }) && this.taskList.length > 0;
	  },
	},
	methods: {
		addTask: function() {
			let task = this.newTask.trim();
			if (task) {
				this.taskList.push({
					text:task,
					checked:false
				});
				this.newTask="";
			}
		},

		removeTask: function(task) {
			var index = this.taskList.indexOf(task);
			this.taskList.splice(index, 1);
		},

		clearList: function() {
			this.taskList = [];
		},

		selectAll: function(task) {
			//targetValue is set to the opposite of areAllSelected
			var targetValue = this.areAllSelected ? false : true;
			//we use a for loop to set the checked state of all items to the target value
			for (var i = 0; i < this.taskList.length; i++) {
				this.taskList[i].checked = targetValue;
			}
		}
	}
});