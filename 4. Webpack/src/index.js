import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Handlebars from 'handlebars/dist/handlebars.min.js';

import './style.css';
import {getPosts} from './net.js';

getPosts().then(posts => {
    let source   = document.getElementById('posts-template').innerHTML;
    let template = Handlebars.compile(source);
    document.getElementById('posts').innerHTML = template({
        posts: posts.map(post => ({
            title: post.title,
            body: post.body,
            date: (new Date(post.posted)).toDateString()
        }))
    });
});
