import { shallow } from 'enzyme'
import React from 'react'
import Search from './Search'

const onChangeCep = jest.fn()
const handleSubmit = jest.fn()
const cep = '65907-150'

describe('<Search />', () => {
    it('MainPage starts', () => {
        const app = shallow(
            <Search
                onChangeCep={onChangeCep}
                onSubmit={handleSubmit}
                cep={cep}
            />
        )
        expect(onChangeCep).not.toBeCalled()
    })

    it('MainPage input onChange', () => {
        const app = shallow(
            <Search
                onChangeCep={onChangeCep}
                onSubmit={handleSubmit}
                cep={cep}
            />
        )
        const event = {
            preventDefault() {
                return true
            },
            target: { value: '65907-150' },
        }

        app.find('InputMask').simulate('change', event)
        expect(onChangeCep).toBeCalled()
    })

    it('MainPage form submit', () => {
        const app = shallow(
            <Search
                onChangeCep={onChangeCep}
                onSubmit={handleSubmit}
                cep={cep}
            />
        )
        const event = {
            preventDefault() {
                return true
            },
            target: { value: '65907-150' },
        }

        app.find('InputMask').simulate('change', event)
        app.find('form').simulate('submit', event)
        expect(handleSubmit).toBeCalled()
    })
})
