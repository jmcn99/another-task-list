import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onClick, showAddTask }) => {
    



  return (
    <header className="header">
        <h1 >{title}</h1>
        <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick = {onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}


export default Header