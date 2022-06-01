import React from 'react'

import { add } from '../temp';

export const Form = () => {
    return (
        <>
            <h1>Add movie!</h1>
            <b>TITLE:<br /><input type="text" onChange={function (e) { title = e.target.value; }} /></b><br />
            <b>IMAGE URL:<br /><input type="text" onChange={function (e) { image = e.target.value; }} /></b><br />
            <b>COMMENT:<br /><input type="text" onChange={function (e) { comment = e.target.value; }} /></b><br />
            {/* <input type="button" onClick={function (e) { add(title, image, comment); }} value="ADD MOVIE" /> */}

        </>
    )
}
var title = '';
var image = '';
var comment = '';