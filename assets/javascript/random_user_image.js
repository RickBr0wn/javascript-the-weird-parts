const randomUserImg = () => {
  //there are only 98 male images as of writing
  const num = Math.round(Math.random() * 98);
  const MaleUser = `https://randomuser.me/api/portraits/men/${num}.jpg`;
  const femaleUser = `https://randomuser.me/api/portraits/women/${num}.jpg`;
  return Math.round(Math.random()) ? MaleUser : femaleUser;
}