import React from "react";

const AlertContent = ({ password = " " }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1)
      return "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdhNGZjYWFyMW5iZWJkYnNzcDZvZHNqOXl6OG1lOHQ2dGI0ZzBtNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OSuaE6AknuRc7syZXp/200.webp";
    else if (passwordLength <= 4)
      return "https://media4.giphy.com/media/aaPUKNp0pj52GovPyW/200.webp?cid=790b76116zvray47ck2xw57vtcaxc8ya65zuxvyejsod4pqj&ep=v1_gifs_search&rid=200.webp&ct=g";
    else if (passwordLength <= 8)
      return "https://media.tenor.com/IMbKoo-6nGYAAAAM/star-trek-star-trek-tos.gif";
    else if (passwordLength <= 12)
      return "https://media3.giphy.com/media/l0HlGg4dnCCY8Riww/200.webp?cid=790b7611qp570peu2uev8vedxzx8vz55n6xuq5fwd1xq1gbo&ep=v1_gifs_search&rid=200.webp&ct=g";
    else if (passwordLength <= 16)
      return "https://media4.giphy.com/media/3oKIPjzfv0sI2p7fDW/giphy.webp?cid=790b76115smqnzni4d2lafm6kzutwvmnct1a5y8ce6cfrrrh&ep=v1_gifs_search&rid=giphy.webp&ct=g";
    else
      return "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhtYmZqZWgxbGRmcnFyeHV3aHJvZndpODl2dnlha2szamhkZGc1MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10uEX5kfeodYgo/200.webp";
  };

  const strengthGif = getPasswordStrength();

  return <img src={strengthGif} alt="gif.." />;
};

export default AlertContent;
