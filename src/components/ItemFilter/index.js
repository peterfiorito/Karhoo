import React from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { showCompleted, showAll, showNotCompleted } from '../../logic/todos'

export const ItemFilter = ({showOnlyCompleted, showNotDone, showAllTodo}) => {
  return (
    <div>
      <button onClick={showOnlyCompleted} className="show-completed">Show completed</button>
      <button onClick={showNotDone} className="show-not-completed">Show not done</button>
      <button onClick={showAllTodo} className="show-all">Show all</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  showOnlyCompleted: () => dispatch(showCompleted()),
  showNotDone: () => dispatch(showNotCompleted()),
  showAllTodo: () => dispatch(showAll())
})

export default connect(null, mapDispatchToProps)(ItemFilter)
