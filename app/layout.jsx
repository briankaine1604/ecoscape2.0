import '@public/styles.css'
import { Suspense } from 'react'
import Loading from './loading'

const RootLayout = ({children}) => {
  return (
    <html>
      
        <body className=''>
            <Suspense fallback={<Loading/>}>
            {children}
            </Suspense>
        </body>
     
    </html>
  )
}

export default RootLayout