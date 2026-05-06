const Icons = ({ icon, className, pathClass }) => {
  const iconList = {
    line: (
      <svg width="12" height="1072" viewBox="0 0 12 1072" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6" y1="-2.62268e-07" x2="6.00005" y2="1072" stroke="white" strokeWidth="12" strokeDasharray="24 24" />
      </svg>

    )
  };
  return iconList[icon] || null;
};
export default Icons;