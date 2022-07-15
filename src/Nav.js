import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props)=> {
    console.log(props);
    const pathName = props.location.pathname;
    const { colorCount } = props;
    return (
        <nav>
            <Link to='/' className={ pathName === '/' ? 'selected' : '' }>Home</Link>
            <Link to='/colors' className={ pathName === '/colors' ? 'selected' : '' }>Colors ({ colorCount })</Link>
        </nav>  
    )
}

const mapState = (state)=> {
    return {
        colorCount: state.colors.length
    };
};
export default connect(mapState)(Nav);