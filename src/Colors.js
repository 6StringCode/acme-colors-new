import React from "react";
import { connect } from 'react-redux';
import ColorForm from './ColorForm';

const Colors = ({ colors })=> {
    return (
        <main>
            <ul id='colors'>
                {
                    colors.map( color => {
                        const style = {
                            color: color.name
                        }
                        return (
                            <li key={ color.id } style={ style }>
                                { color.name }
                            </li>
                        )
                    })
                }
            </ul>
            <ColorForm />
        </main>
    );
};

const mapState = ({ colors })=> {
    return {
        colors
    };
};

export default connect(mapState)(Colors)