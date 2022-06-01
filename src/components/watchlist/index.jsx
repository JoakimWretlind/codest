import { MovieSection, Section } from '../../styles/mainStyles'

// Changed from h1 to h2
export const Watchlist = ({ movies }) => {
    return (
        <Section>
            <h2>watchlist:</h2>
            <MovieSection>
                {movies.map(movie => {
                    const { id, title } = movie
                    return (
                        <div key={id}>
                            <h5>{title}</h5>
                        </div>
                    )
                })}
            </MovieSection>
        </Section>
    )
}
