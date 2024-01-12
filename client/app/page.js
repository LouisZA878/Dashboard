

import Main from './Main'
import Grype from './fetch/Grype'

export default async function Home() {

  const data = await Grype()




  return (
    <div className='Container'>
      <Main grype={data}/>
    </div>
  )
}
