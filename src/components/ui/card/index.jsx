import { CardItem, ImgWrapper, Img, Title, P, ButtonContainer } from "./style"
import { Button } from "../../../styles/mainStyles"

export const Card = ({ id, title, image, comment, watchedHandler }) => {
    return (
        <CardItem key={id}>
            <ImgWrapper>
                <Img src={image} alt={title} />
            </ImgWrapper>
            <Title>{title}</Title>
            <P>{comment}</P>
            <ButtonContainer>
                <Button onClick={() => watchedHandler(id)}>already watched</Button>

            </ButtonContainer>
        </CardItem >
    )
}
