import { CardItem, ImgWrapper, Img, Title, P, ButtonContainer, RemoveIcon } from "./style"
import { Button } from "../../../styles/mainStyles"

export const Card = ({ id, title, image, comment }) => {
    return (
        <CardItem key={id}>
            <ImgWrapper >
                <Img src={image} alt={title} />
            </ImgWrapper>
            <Title>{title}</Title>
            <P>{comment}</P>
            <ButtonContainer>
                <Button>already watched</Button>
                <RemoveIcon />
            </ButtonContainer>
        </CardItem>
    )
}
