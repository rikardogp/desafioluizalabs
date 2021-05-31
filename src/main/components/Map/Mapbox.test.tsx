import { shallow } from 'enzyme'
import React from 'react'
import Mapbox from './Mapbox'

beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f())
    const mockSuccessResponse = {}
    const mockJsonPromise = Promise.resolve(mockSuccessResponse)
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
})

describe('<Mapbox />', () => {
    it('MainPage starts', () => {
        const address = 'Rua Teste'
        const app = shallow(<Mapbox address={address} />)
        expect(app.find('div').at(0).text()).toEqual('Mapa ')
    })

    it('MainPage starts with address is undefined', () => {
        const address = 'undefined undefined'
        const app = shallow(<Mapbox address={address} />)

        expect(app.find('div').at(0).text()).toEqual('Mapa ')
    })
})
