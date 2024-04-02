const payloadForSubreddit = (
  id,
  title,
  author,
  text,
  created,
  permalink,
  ups,
  downs,
  numComments,
  url
) => {
  const payload = {
    id,
    title,
    author,
    text,
    created,
    permalink,
    ups,
    downs,
    numComments,
    url,
  };
  return payload;
};

export default payloadForSubreddit;
