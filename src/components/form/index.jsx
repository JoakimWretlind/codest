import { useState } from "react";
import { FormSection, Label } from "./style";

// I switched the order between comment and url, becaus I feel this to be more logic
// rewrite the functions to arrow-functions
// set input characters to max 75 for the comments
// change input type="button" to a real button
export const Form = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [image, setImage] = useState('')

    // clear the form after submit
    const clearForm = () => {
        setTimeout(() => {
            setTitle('')
            setComment('')
            setImage('')
        }, 300)
    }
    return (
        <FormSection onSubmit={e => { e.preventDefault(); onSubmit(title, comment, image) }}>
            <h1>Add movie!</h1>
            <Label>
                title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </Label>
            <Label>
                comment:
                <input type="text" maxLength={75} value={comment} onChange={e => setComment(e.target.value)} />
            </Label>
            <Label>
                image url:
                <input type="text" value={image} onChange={e => setImage(e.target.value)} />
            </Label>

            <button className="form" type="submit" onClick={clearForm}>Submit</button>
        </FormSection>
    )
}