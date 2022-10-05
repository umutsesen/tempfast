import React, { useRef, useEffect } from 'react';


const Popover = ({ children, className, top, left, right, bottom, isOpen, setIsOpen, content }) => {
  const wrapperRef = useRef(null);
  console.log(setIsOpen);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log(event.target);

      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <span  ref={wrapperRef}>
      {children}
      {isOpen && (
        <div
        className={`${className}`}
          style={{
            position: 'absolute',
            top: `${top}rem`,
            left: `${left}rem`,
            right: `${right}rem`,
            bottom: `${bottom}rem`
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
};

export default Popover;
