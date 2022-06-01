import { CardItem, ImgWrapper, Img, Title, P, ButtonContainer, RemoveIcon } from "./style"
import { Button } from "../../../styles/mainStyles"
import { useState } from "react"

export const Card = ({ id, title, image, comment, watchedHandler, removeHandler, removeWatchedHandler }) => {
    const [disabled, setDisabled] = useState(false)
    return (
        <CardItem key={id}>
            <ImgWrapper>
                <Img src={image} alt={title} />
            </ImgWrapper>
            <Title>{title}</Title>
            <P>{comment}</P>
            <ButtonContainer>
                <Button onClick={() => { watchedHandler(id); setDisabled(true) }} disabled={disabled}>already watched</Button>
                {removeHandler ?
                    <RemoveIcon type="button" onClick={() => removeHandler(id)}>remove</RemoveIcon> :
                    <RemoveIcon type="button" onClick={() => removeWatchedHandler(id)}>remove</RemoveIcon>}
            </ButtonContainer>
        </CardItem >
    )
}
