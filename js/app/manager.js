define(['app/student', 'app/class'], function (stu,clz) {
    return{
        addNewStudent: function (name, gender) {
            clz.addToClass(stu.createStudent(name, gender));
        },
        getMyClassSize: function () {
            return clz.getClassSize();
        },
        getMyClassData: function () {
            return clz.getClassData();
        }
    }
});
