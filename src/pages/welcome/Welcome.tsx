import PageHeader from '../../components/PageHeader'
import PageBody from '../../components/PageBody'
import Loader from '../../components/Loader'

const Welcome = () => {
   return (
      <PageBody>
         <PageHeader name="welcome" />
         <i>Here's the loading spinner you see around</i>
         <Loader/>
      </PageBody>
   )
}

export default Welcome;