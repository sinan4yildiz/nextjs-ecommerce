import {SEO} from '@components/common'
import Navigation from '@components/ui/sections/Navigation'

const Home = () => {
    return (
        <>
            <Navigation/>
            <h1>Home</h1>
            <SEO title="Home page" description="Meta description for home page"/>
        </>
    )
}

export default Home