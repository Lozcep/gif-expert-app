import React from "react";
import '@testing-library/jest-dom'
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe('Pruebas en <GifGridItem> ', () => {

    const title = 'Un titulo'
    const url = 'http://localhost/algo.jpg'

    test('debe mostrar el componente correctamente ', () => {
        
        let wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot()

    })
    
    
} )