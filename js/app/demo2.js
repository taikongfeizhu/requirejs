//符合AMD规范的写在前面
define(['domReady','jquery','underscore',"extAll",'bootstrap',"jqueryAlpha","jqueryBeta"],function(doc,$,_,Ext){
    $("#go").alpha().beta();
    _.each([3,4,5],function(v,i){
        console.log(v);
    });
    Ext.onReady(function(){
        console.log("Ext ok");
    });
    alert($("#ok").text());
});