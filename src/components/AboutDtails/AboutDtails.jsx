import { useLoaderData } from "react-router-dom";


const AboutDtails = () => {
  const userId = useLoaderData()
  console.log(userId)
  return (
    <div>
      <h3>this is from About Dtails</h3>
    </div>
  );
};

export default AboutDtails;