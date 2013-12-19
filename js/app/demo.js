//符合AMD规范的写在前面
define(['domReady','modernizr','jquery','bootstrap','app/manager'],function(Doc,Mod,$,bootstrap,manager){
    manager.addNewStudent("wong","male");
    manager.addNewStudent("jenking","female");
    console.log(JSON.stringify(manager.getMyClassData()));
    alert(Modernizr.borderradius);
});
