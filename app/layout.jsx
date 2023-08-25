import '@styles/global.css'
import { Suspense } from 'react'
import Loading from './loading'

const RootLayout = ({children}) => {
  return (
    <html>
      
        <body className='jost'>
            <Suspense fallback={<Loading/>}>
            {children}
            </Suspense>
        </body>
     
    </html>
  )
}

export default RootLayout