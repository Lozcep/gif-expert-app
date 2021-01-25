import React from "react";
import '@testing-library/jest-dom'
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe('Pruebas en <GifGridItem> ', () => {

    test('debe mostrar el componente correctamente ', () => {
        
        let wrapper = shallow(<GifGridItem />)
        expect(wrapper).toMatchSnapshot()

    })
    
    
} )