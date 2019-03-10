import postsData from './json/posts';

const localPostsKey = "app-posts";

if (localStorage.getItem(localPostsKey) === null) {
  localStorage.setItem(localPostsKey, JSON.stringify(postsData));
}

export default localPostsKey;
