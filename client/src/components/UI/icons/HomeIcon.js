import React from "react";
import PropTypes from "prop-types";
import { SvgIcon  } from "@material-ui/core";

let HomeIcon = ({width , height}) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3951 11.133L13.2321 2.97201C12.887 2.62784 12.4194 2.43457 11.9321 2.43457C11.4447 2.43457 10.9772 2.62784 10.6321 2.97201L2.47506 11.127L2.46706 11.133C2.21492 11.386 2.04181 11.7068 1.9688 12.0564C1.8958 12.406 1.92606 12.7693 2.0559 13.102C2.18574 13.4347 2.40955 13.7225 2.70006 13.9302C2.99058 14.1379 3.33524 14.2567 3.69206 14.272H3.74906H4.07406V20.272C4.07353 20.5557 4.12897 20.8367 4.2372 21.0989C4.34542 21.3611 4.50431 21.5994 4.70477 21.8002C4.90522 22.0009 5.1433 22.1601 5.40538 22.2687C5.66745 22.3773 5.94838 22.4331 6.23206 22.433H9.42106C9.57648 22.433 9.72553 22.3713 9.83542 22.2614C9.94532 22.1515 10.0071 22.0024 10.0071 21.847V17.141C10.0073 16.8804 10.111 16.6305 10.2953 16.4462C10.4796 16.2619 10.7294 16.1583 10.9901 16.158H12.8731C13.1337 16.1583 13.3836 16.2619 13.5679 16.4462C13.7521 16.6305 13.8558 16.8804 13.8561 17.141V21.849C13.8561 22.0044 13.9178 22.1535 14.0277 22.2634C14.1376 22.3733 14.2866 22.435 14.4421 22.435H17.6321C18.2034 22.4345 18.7513 22.2073 19.1553 21.8032C19.5593 21.3992 19.7865 20.8514 19.7871 20.28V14.28H20.0871C20.4509 14.2792 20.8063 14.1707 21.1085 13.9682C21.4107 13.7657 21.6462 13.4782 21.7852 13.142C21.9243 12.8059 21.9607 12.4361 21.8898 12.0792C21.8189 11.7224 21.644 11.3945 21.3871 11.137L21.3951 11.133Z"
        stroke="#3041D0"
      />
    </SvgIcon>
  );
};

export default HomeIcon;

HomeIcon.defaultProps = {
  className: "",
  color: "#333333",
  width: 24,
  height: 24,
};

HomeIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
