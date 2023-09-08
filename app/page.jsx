
import Footer from '@components/footer';
import Header from '@components/header';
import Section1 from '@components/section';
import Section2 from '@components/section2';
import Section3 from '@components/section3';
import Section4 from '@components/section4';

const Page = () => {
 
  const showHeaderText = true; // Set this to true or false based on your requirements
  const showHeaderImage = true;

  return (
    <div className='flex flex-col'>
      <Header showtext={showHeaderText} showimage={showHeaderImage}/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
};

export default Page;
