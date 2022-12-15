import React from "react";
import ImportForm from "./importForm";
class ERC721 extends React.Component
{
    
    render()
    {
        const headingStyle = 
        {
            color : 'red',
        }
        return (
            <React.Fragment>
                <h1 style={headingStyle}> ERC721 Token </h1>
                <ImportForm></ImportForm>
            </React.Fragment>
        
        );
    }
}

export default ERC721