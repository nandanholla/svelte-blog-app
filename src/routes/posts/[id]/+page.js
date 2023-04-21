import posts from '../data.json';

export const load = ({ params }) => {
    const post = posts[params.id];

    console.log(post)
    return {
        post
    }
}