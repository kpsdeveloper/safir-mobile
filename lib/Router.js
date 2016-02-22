Router.configure({
    layoutTemplate: 'mainLayout',
    loadingTemplate: 'loading',
    onAfterAction: function(){
        
    }
    
});

Router.route('/',{
    name:'home',
});
