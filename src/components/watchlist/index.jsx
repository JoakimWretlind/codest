import { MovieSection, Section } from '../../styles/mainStyles'
import { Card } from '../ui/card'

// Changed from h1 to h2
export const Watchlist = ({ movies, watchedHandler, removeHandler }) => {
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
                            watchedHandler={() => watchedHandler(id)}
                            removeHandler={() => removeHandler(id)} // this line differs from the watched
                        />
                    )
                })}
            </MovieSection>
        </Section>
    )
}