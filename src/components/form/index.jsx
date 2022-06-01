import { useState } from "react";
import { FormSection, Label } from './style'
import { Button } from "../../styles/mainStyles";

// A basic form where we pass the state of the values via the onSubmit-function
export const Form = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [image, setImage] = useState('')

    // Clear the form when submitted
    // we can't set this at once, since we have to pass the values
    // to the onSubmit function
    const clearForm = () => {
        setTimeout(() => {
            setTitle('')
            setComment('')
            setImage('')
        }, 300) // time can be set to very low if you wish, but I think this was nice
    }

    // we set the max character input for comments to 75
    return (
        <FormSection onSubmit={e => { e.preventDefault(); onSubmit(title, comment, image) }}>
            <Label>
                title:
                <input value={title} onChange={e => setTitle(e.target.value)} />
            </Label>
            <Label>
                comment:
                <input maxLength={75} value={comment} onChange={e => setComment(e.target.value)} />
            </Label>
            <Label>
                image url:
                <input value={image} onChange={e => setImage(e.target.value)} />
            </Label>

            <Button className="form" type="submit" onClick={clearForm}>Submit</Button>
        </FormSection >
    )
}