import posts from '../data.json';

export const load = ({ params }) => {
    const post = posts[params.id - 1];

    console.log(post)
    return {
        post
    }
}