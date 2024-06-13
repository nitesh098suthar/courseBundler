import TestimonialsCard from './TestimonialsCard';

const TestimonialsMain = () => {
  return (
    <>
      <div className="min-h-[740px] bg-darkColor">
        <h1 className="text-center text-5xl text-white py-16 font-bold xs:text-4xl">
          Testimonials
        </h1>
        <div className="testimonialsWrapper">
          <TestimonialsCard />
        </div>
      </div>
    </>
  );
}

export default TestimonialsMain
