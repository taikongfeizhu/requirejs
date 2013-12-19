define(function() {
	var allStudents=[];
	return{
		classID:"001",
		departMent:"computer",
		addToClass:function(student){
			allStudents.push(student)
		},
		getClassSize:function(){
			return allStudents.length
		},
		getClassData:function(){
			return allStudents;
		}
	}
});