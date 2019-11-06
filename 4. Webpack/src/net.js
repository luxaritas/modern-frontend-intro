export async function getPosts() {
    return (await (await fetch('/data/posts.json')).json());
}