import FullReadContainer from "./FullReadContainer";


const Description = () => {
  return (
    <div className="space-y-8">
      <h4 className="text-lg text-slate-700 font-black">Product Description</h4>

      <FullReadContainer isOpen={false} onToggle={() => {}}>
        <div className="text-sm text-justify text-slate-700 font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus fugiat dignissimos?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, rerum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis similique quam aspernatur, officiis ullam recusandae.
        </div>
      </FullReadContainer>
    </div>
  );
};

export default Description;