import React from "react";
import queryString from "query-string";

const User = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);

  const detail = query.details === "true";
  const text = query.texts === "true";
  const verbal = query.verbals;

  return (
    <div>
      <h2>User {match.params.name}</h2>
      {detail && "details: blahblah"}
      {text && "texts: message"}
      {verbal && `verbals: ${verbal}`}
    </div>
  );
};

export default User;
