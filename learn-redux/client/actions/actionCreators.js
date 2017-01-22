// anything that can happen in our application
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment(postId, i) {
  type: 'REMOVE_COMMENT',
  i,
  postId
}
