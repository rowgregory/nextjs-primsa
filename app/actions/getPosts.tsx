const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) console.log(res);

  const data = res.json();

  return data;
};

export default getPosts;
