import React from 'react'
import { shallow } from 'enzyme'
import { ItemsList } from '../index'

const defaultProps = {
  items: [],
  toggleTodo: f=>f,
  filter: []
}

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />)
  })

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />)
    expect(renderedItem.find('#items-missing')).toHaveLength(1)
  })

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }]
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />)
    expect(renderedItem.find('#items-missing')).toHaveLength(0)
  })

  it('should render items as list items', () => {
    const filter = null;
    const items = [{ id: 1, content: 'Test 1', completed: false}, { id: 2, content: 'Test 2', completed: false}]
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} filter={filter}/>)
    expect(renderedItem.find('li')).toHaveLength(2)
  })
  
  it('should render a filtered list if present', () => {
    const items = [{ id: 1, content: 'Test 1', completed: false}, { id: 2, content: 'Test 2', completed: false}, {id: 3, content: 'Test 3', completed: true}]
    let filter = items.filter(x=> x.completed === true)
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} filter={filter}/>)
    expect(renderedItem.find('li')).toHaveLength(1)
  })
})
