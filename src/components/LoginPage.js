import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'



export const loginPage = ({ startLogin })=>(
    <div> 
        <button onClick={startLogin}>login</button>
    </div>
    
)
const mapDispatchToProps = (dispatch) =>({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(loginPage) 