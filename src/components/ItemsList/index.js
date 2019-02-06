import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles.css'
import { markTodoCompleted } from '../../logic/todos'

export const ItemsList = ({ items, toggleTodo, filter}) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        { !filter ?
          items.map(item => (
            <li key={item.id}>
            { item.id !== null ? <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)}/> : <span></span> } {item.content}
            </li>
          ))
         : filter.map(item =>(<li key={item.id}>{item.content}</li>))
        }
      </ul>


    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: itemId => dispatch(markTodoCompleted({id: itemId})),
})

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return { items: state.todos.items, filter: state.todos.filter }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
