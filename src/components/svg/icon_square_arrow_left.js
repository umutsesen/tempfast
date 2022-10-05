import React from 'react';

const IconSquareArrowLeft = ({ onClick, className }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      height="25"
      width="25"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 1.5625C2.7106 1.5625 2.31317 1.72712 2.02015 2.02015C1.72712 2.31317 1.5625 2.7106 1.5625 3.125L1.5625 21.875C1.5625 22.2894 1.72712 22.6868 2.02015 22.9799C2.31317 23.2729 2.7106 23.4375 3.125 23.4375L21.875 23.4375C22.2894 23.4375 22.6868 23.2729 22.9799 22.9799C23.2729 22.6868 23.4375 22.2894 23.4375 21.875L23.4375 3.125C23.4375 2.7106 23.2729 2.31317 22.9799 2.02015C22.6868 1.72712 22.2894 1.5625 21.875 1.5625L3.125 1.5625ZM3.125 25C2.2962 25 1.50134 24.6708 0.915291 24.0847C0.32924 23.4987 0 22.7038 0 21.875L0 3.125C0 2.2962 0.32924 1.50134 0.915291 0.915293C1.50134 0.329241 2.2962 0 3.125 0L21.875 0C22.7038 0 23.4987 0.329241 24.0847 0.915293C24.6708 1.50134 25 2.2962 25 3.125L25 21.875C25 22.7038 24.6708 23.4987 24.0847 24.0847C23.4987 24.6708 22.7038 25 21.875 25L3.125 25ZM17.9688 11.7188C18.176 11.7188 18.3747 11.8011 18.5212 11.9476C18.6677 12.0941 18.75 12.2928 18.75 12.5C18.75 12.7072 18.6677 12.9059 18.5212 13.0524C18.3747 13.1989 18.176 13.2813 17.9688 13.2813H8.91719L12.2719 16.6344C12.4186 16.7811 12.501 16.98 12.501 17.1875C12.501 17.395 12.4186 17.5939 12.2719 17.7406C12.1252 17.8873 11.9262 17.9697 11.7188 17.9697C11.5113 17.9697 11.3123 17.8873 11.1656 17.7406L6.47812 13.0531C6.40537 12.9806 6.34765 12.8943 6.30826 12.7994C6.26888 12.7045 6.2486 12.6028 6.2486 12.5C6.2486 12.3972 6.26888 12.2955 6.30826 12.2006C6.34765 12.1057 6.40537 12.0194 6.47812 11.9469L11.1656 7.25937C11.3123 7.11268 11.5113 7.03026 11.7188 7.03026C11.9262 7.03026 12.1252 7.11268 12.2719 7.25937C12.4186 7.40607 12.501 7.60504 12.501 7.8125C12.501 8.01996 12.4186 8.21893 12.2719 8.36563L8.91719 11.7188H17.9688Z"
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconSquareArrowLeft;