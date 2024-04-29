const subredditPayload = (
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
  console.log(payload);
  return payload;
};

export default subredditPayload;
