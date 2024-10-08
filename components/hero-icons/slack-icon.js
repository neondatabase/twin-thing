import PropTypes from 'prop-types';

const SlackIcon = ({ id, className = 'h-4 w-4' }) => {
  return (
    <svg id={id} xmlns='http://www.w3.org/2000/svg' className={className} fill='currentColor' viewBox='0 0 24 24'>
      <path
        d='m5.43,15c0,1.32-1.07,2.39-2.39,2.39s-2.39-1.07-2.39-2.39,1.07-2.39,2.39-2.39h2.39v2.39Z'
        strokeWidth='0'
      />
      <path
        d='m6.62,15c0-1.32,1.07-2.39,2.39-2.39s2.39,1.07,2.39,2.39v5.97c0,1.32-1.07,2.39-2.39,2.39s-2.39-1.07-2.39-2.39v-5.97Z'
        strokeWidth='0'
      />
      <path
        d='m9.01,5.42c-1.32,0-2.39-1.07-2.39-2.39s1.07-2.39,2.39-2.39,2.39,1.07,2.39,2.39v2.39h-2.39Z'
        strokeWidth='0'
      />
      <path
        d='m9.01,6.63c1.32,0,2.39,1.07,2.39,2.39s-1.07,2.39-2.39,2.39H3.02c-1.32,0-2.39-1.07-2.39-2.39s1.07-2.39,2.39-2.39h5.99Z'
        strokeWidth='0'
      />
      <path
        d='m18.57,9.02c0-1.32,1.07-2.39,2.39-2.39s2.39,1.07,2.39,2.39-1.07,2.39-2.39,2.39h-2.39v-2.39Z'
        strokeWidth='0'
      />
      <path
        d='m17.38,9.02c0,1.32-1.07,2.39-2.39,2.39s-2.39-1.07-2.39-2.39V3.03c0-1.32,1.07-2.39,2.39-2.39s2.39,1.07,2.39,2.39v5.99Z'
        strokeWidth='0'
      />
      <path
        d='m14.99,18.58c1.32,0,2.39,1.07,2.39,2.39s-1.07,2.39-2.39,2.39-2.39-1.07-2.39-2.39v-2.39h2.39Z'
        strokeWidth='0'
      />
      <path
        d='m14.99,17.39c-1.32,0-2.39-1.07-2.39-2.39s1.07-2.39,2.39-2.39h5.99c1.32,0,2.39,1.07,2.39,2.39s-1.07,2.39-2.39,2.39h-5.99Z'
        strokeWidth='0'
      />
    </svg>
  );
};

SlackIcon.propTypes = {
  /** The id of the svg */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default SlackIcon;
