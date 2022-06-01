import { MovieSection, Section } from '../../styles/mainStyles'
import { Card } from '../ui/card'

// Changed from h1 to h2
export const Watchlist = ({ movies }) => {
    return (
        <Section>
            <h2>watchlist:</h2>
            <MovieSection>
                {movies.map(movie => {
                    const { id, title, comment, image } = movie
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            image={image}
                            comment={comment}
                        />
                    )
                })}
            </MovieSection>
        </Section>
    )
}
