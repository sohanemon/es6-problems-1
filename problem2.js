const friendNamesThatEven = (nameList) => {
  // note: use default params to get suggestions like typescript. 😲
  const evenNamed = [];
  nameList.forEach((e) => {
    e.length % 2 === 0 && evenNamed.push(e);
  });
  return evenNamed;
};

console.log(
  friendNamesThatEven([
    "Siam",
    "Mehedi",
    "Rakibul",
    "Alamin",
    "Krisno",
    "Rafi",
    "Nadim",
    "Akash",
    "Khairul",
    "Ashish",
  ])
);
// [ 'Siam', 'Mehedi', 'Alamin', 'Krisno', 'Rafi', 'Ashish' ]
