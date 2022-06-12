import React from "react";

interface Props {
  id: number;
}

function People({ id }: Props): JSX.Element {
  return <div>People {id}</div>;
}

export default People;
