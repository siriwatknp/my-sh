import React, {
  PropTypes,
} from 'react'
import cx from 'classnames';
import { Link } from 'react-scroll';
import './ListOfScrollToElements.css';

const ScrollToList = ({
  isSticky,
  items,
}) => {
  return (
    <ul className={cx('listOfScrollToElements', isSticky && 'isSticky')}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <Link
              to={item.scrollTo}
              smooth={true}
              offset={-100}
              duration={300}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

ScrollToList.propTypes = {}
ScrollToList.defaultProps = {}

export default ScrollToList
