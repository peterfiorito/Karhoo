import React from 'react'
import { shallow, mount } from 'enzyme'
import { ItemFilter } from '../index'

const defaultProps = {
    showOnlyCompleted: f => f,
    showAllTodo: f => f
}

describe('ItemCreator', () => {
  it('renders without crashing', () => {
    shallow(<ItemFilter {...defaultProps} />)
  })

  it('should call the filter for completed', () => {
    const showOnlyCompletedMock = jest.fn()
    const showAllTodoMock = jest.fn()
    const renderedItem = mount(<ItemFilter {...defaultProps} showOnlyCompleted={showOnlyCompletedMock} showAllTodo={showAllTodoMock} />)
    renderedItem.find('.show-completed').simulate('click')
    expect(showOnlyCompletedMock.mock.calls.length).toBe(1)
  })
  it('should remove the filter', () => {
    const showOnlyCompletedMock = jest.fn()
    const showAllTodoMock = jest.fn()
    const renderedItem = mount(<ItemFilter {...defaultProps} showOnlyCompleted={showOnlyCompletedMock} showAllTodo={showAllTodoMock} />)
    renderedItem.find('.show-all').simulate('click')
    expect(showAllTodoMock.mock.calls.length).toBe(1)
  })
})