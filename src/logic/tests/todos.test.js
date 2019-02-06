import reducer, { initialState, addItem, markTodoCompleted, showCompleted, showAll, showNotCompleted } from '../todos'

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' }
    const mockAction = { type: 'mystery-meat' }
    const result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' }
    const result = reducer(undefined, mockAction)
    expect(result).toEqual(initialState)
  })

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first' , completed: false}, { id: 2, content: 'second', completed: false}],
    }
    const mockAction = addItem({content: 'third', completed: false});
    const result = reducer(state, mockAction)
    expect(result.items).toHaveLength(3)
    expect(result.items[2].id).toEqual(3)
    expect(result.items[2].content).toEqual('third')
  })
  it('should mark item as done', () => {
    const state = {
      items: [{ id: 1, content: 'first' , completed: false}, { id: 2, content: 'second', completed: false}],
    }
    const mockAction = markTodoCompleted({id: 2});
    const result = reducer(state, mockAction)
    expect(result.items[1].completed).toEqual(true)
  })
  it('should create a filtered list of done items', () => {
    const state = {
      items: [{ id: 1, content: 'first' , completed: false}, { id: 2, content: 'second', completed: true}],
      filter: null
    }
    const mockAction = showCompleted();
    const result = reducer(state, mockAction)
    expect(result.filter).toHaveLength(1)
  })
  it('should create a filtered list of not done items', () => {
    const state = {
      items: [{ id: 1, content: 'first' , completed: false}, { id: 2, content: 'second', completed: true}],
      filter: null
    }
    const mockAction = showNotCompleted();
    const result = reducer(state, mockAction)
    expect(result.filter).toHaveLength(1)
  })
  it('should reset filtered list', () => {
    const state = {
      items: [{ id: 1, content: 'first' , completed: false}, { id: 2, content: 'second', completed: true}],
      filter: [{ id: 2, content: 'second', completed: true}]
    }
    const mockAction = showAll();
    const result = reducer(state, mockAction)
    expect(result.filter).toBe(null)
  })
})
