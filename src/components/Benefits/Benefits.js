// @flow

import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faCheck from "@fortawesome/free-solid-svg-icons/faCheck";

import "./Benefits.css";

type Props = {
  benefits: Array<String>,
};

const Benefits = ({ benefits }: Props) =>
  benefits.map((b) => (
    <div className={s.benefit} key={b}>
      <FontAwesomeIcon icon={faCheck} />
      {b}
    </div>
  ));

export default withStyles(s)(Benefits);
