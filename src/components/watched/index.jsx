import { MovieSection, Section } from '../../styles/mainStyles'
import { Card } from '../ui/card'

export const WatchedMovies = ({ watched, removeWatchedHandler }) => {
    // No need to display anything if list is empty
    if (watched !== null) {
        return (
            <Section>
                <h2>already watched:</h2>
                <MovieSection>
                    {watched.map(movie => {
                        const { id, title, comment, image } = movie
                        return (
                            <Card
                                key={id}
                                id={id}
                                title={title}
                                image={image}
                                comment={comment}
                                watchedHandler={() => null} // set this to null since it is already watched
                                removeWatchedHandler={() => removeWatchedHandler(id)}
                            />
                        )
                    })
                    }
                </MovieSection>
            </Section>
        )
    }
}
