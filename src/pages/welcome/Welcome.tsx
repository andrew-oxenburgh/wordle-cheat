import PageBody from '../../components/PageBody'
import Loader from '../../components/Loader'

const Welcome = () => {
   return (
      <PageBody name="welcome">
         <i>Here's the loading spinner you see around</i>
         <Loader />
      </PageBody>
   )
}

export default Welcome;