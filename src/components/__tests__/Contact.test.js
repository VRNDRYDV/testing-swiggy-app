import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("test contact us page",()=>{
    test("Should load contact us component",()=>{

        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
        
        })
        
        
        
        
        test("Should load button from contact component",()=>{
        
            render(<Contact/>)
            // const button = screen.getByRole("button")
            const button = screen.getByText("Submit")
            expect(button).toBeInTheDocument();
            
            })
        
            test("Should load  input inside contact us component",()=>{
        
                render(<Contact/>)
                const inputName= screen.getByPlaceholderText("Name")
                expect(inputName).toBeInTheDocument();
                
                })
        
        
            test("Should load  2 inputboxes inside contact us component",()=>{
        
                    render(<Contact/>)
                    const inputBoxes= screen.getAllByRole("textbox")
                    //console.log(inputBoxes[0])
                   expect(inputBoxes.length).toBe(2);
                    
               })
})