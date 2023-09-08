import Header from '@components/header'


const Blog = () => {

  const showHeaderText = false; // Set this to true or false based on your requirements
  const showHeaderImage = false;

  return (
    <div>
      <Header showtext={showHeaderText} showimage={showHeaderImage} navhead="navhead2"/>
      <div className='h-screen w-full bg-yellow-200'></div>
      <div className='h-screen w-full'></div>
    </div>
  )
}

export default Blog