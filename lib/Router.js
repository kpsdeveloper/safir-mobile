Router.configure({
    layoutTemplate: 'mainLayout',
    loadingTemplate: 'loading',
    onAfterAction: function(){
        
    }
    
});

Router.route('/',{
    name:'home'
});

Router.route('/detail',{
    name:'detail'
});

Router.route('/bestselling',{
    name:'bestselling'
});

Router.route('/lift',{
    name:'lift'
});

Router.route('/login',{
	name:'login'
});

Router.route('/register',{
	name:'register'
})

Router.route('/look',{
	name:'look'
});

Router.route('/profile',{
	name:'profile'
});

Router.route('/profile1',{
	name:'profile1'
});

Router.route('/reword',{
	name:'reword'
});

Router.route('/tuto',{
	name:'tuto'
});

Router.route('/tuto1',{
	name:'tuto1'
});

Router.route('/slider',{
	name:'slider'
});