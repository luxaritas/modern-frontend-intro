(function(){
    var source   = document.getElementById('posts-template').innerHTML;
    var template = Handlebars.compile(source);
    
    document.getElementById('posts').innerHTML = template({
        posts: getPosts().map(post => ({
            title: post.title,
            body: post.body,
            date: (new Date(post.posted)).toDateString()
        }))
    });
})();
