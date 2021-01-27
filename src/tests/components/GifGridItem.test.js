import React from "react";
import '@testing-library/jest-dom'
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe('Pruebas en <GifGridItem> ', () => {

    const title = 'Un titulo'
    const url = 'http://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    
    test('debe mostrar el componente correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot()

    })
    
    test('debe de tener un párrafo con title', () => {

        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title )

        
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe(url)

        expect(img.prop('alt') ).toBe(title)


    })

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div')

       
        expect(div.prop('className').includes("animate__fadeIn")).toBe(true)
        
    })
    
    
    
    
} )