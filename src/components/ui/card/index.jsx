import { CardItem, ImgWrapper, Img, Title, P, ButtonContainer, RemoveIcon } from "./style"
import { Button } from "../../../styles/mainStyles"

export const Card = ({ id, title, image, comment, watchedHandler, removeHandler, removeWatchedHandler }) => {
    return (
        <CardItem key={id}>
            <ImgWrapper>
                <Img src={image} alt={title} />
            </ImgWrapper>
            <Title>{title}</Title>
            <P>{comment}</P>
            <ButtonContainer>
                <Button onClick={() => watchedHandler(id)}>already watched</Button>
                {removeHandler ?
                    <RemoveIcon type="button" onClick={() => removeHandler(id)} /> :
                    <RemoveIcon type="button" onClick={() => removeWatchedHandler(id)} />
                }
            </ButtonContainer>
        </CardItem >
    )
}
