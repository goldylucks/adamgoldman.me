// @flow

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import handPointsLeft from "@fortawesome/free-regular-svg-icons/faHandPointLeft";
import handPointsRight from "@fortawesome/free-regular-svg-icons/faHandPointRight";

type Props = {
  children: any,
  isRtl?: boolean,
};

const Answer = ({ children, isRtl }: Props) => (
  <div className={`tool-answer ${!isRtl ? "" : "rtl"}`}>
    {isRtl ? (
      <FontAwesomeIcon icon={handPointsLeft} style={{ marginLeft: 10 }} />
    ) : (
      <FontAwesomeIcon icon={handPointsRight} style={{ marginRight: 10 }} />
    )}
    {children}
  </div>
);

Answer.defaultProps = {
  isRtl: false,
};

export default Answer;
