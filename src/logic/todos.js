export const ADD_ITEM = 'karhoo/assessment/ADD_ITEM'
export const MARK_DONE = 'karhoo/assessment/MARK_DONE'
export const FILTER_DONE = 'karhoo/assessment/FILTER_DONE'
export const FILTER_NONE = 'karhoo/assessment/FILTER_NONE'
export const FILTER_NOT_DONE = 'karhoo/assessment/FILTER_NOT_DONE'

export const addItem = content => {
  return { type: ADD_ITEM, content }
}
export const markTodoCompleted = content => {
  return { type: MARK_DONE, content }
}
export const showCompleted = () => {
  return { type: FILTER_DONE }
}
export const showNotCompleted = () => {
  return { type: FILTER_NOT_DONE }
}
export const showAll = () => {
  return { type: FILTER_NONE}
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false},
    { id: 2, content: 'Buy cat food', completed: false},
    { id: 3, content: 'Water the plants', completed: false },
  ],
}

const nextId = items => items.reduce((id, item) => Math.max(item.id, id), 0) + 1

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nextId(state.items),
            content: action.content.content,
            completed: action.content.completed
          },
        ]
      }
    case MARK_DONE:
      return {
        ...state,
        items: state.items.map((x)=> x.id === action.content.id ? {completed: !x.completed, id: x.id, content: x.content} : x)
      }
    case FILTER_DONE:
      return {...state, items: [...state.items], filter: state.items.filter(x=> x.completed === true)}
    case FILTER_NOT_DONE:
      return {...state, items: [...state.items], filter: state.items.filter(x=> x.completed === false)}
    case FILTER_NONE:
      return {...state, items: [...state.items], filter: null}
    default:
      return state
  }
}

export default reducer
