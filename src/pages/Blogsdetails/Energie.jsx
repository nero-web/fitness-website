/** @format */

import React, { useEffect } from "react";
import NavContact from "../../components/NavContact";
import Img1 from "../../assets/EnergieArtImgs/Img1.jpg";
import Img2 from "../../assets/EnergieArtImgs/Img2.png";
import Img3 from "../../assets/EnergieArtImgs/Img3.png";
import Img4 from "../../assets/EnergieArtImgs/Img4.png";

const Energie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-full h-auto flex justify-center'>
      <NavContact />
      <div className='container min-w-[375px] h-auto md:px-3 xsm:px-0 flex flex-col mt-28 pt-5 pb-10 items-center'>
        <div className='lg:w-[60%] md:w-[80%] sm:w-[85%] xsm:w-[90%] flex justify-center flex-col items-center'>
          <h1 className='text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-10 text-center'>
            The Energie
          </h1>
          <div className='h-auto w-full flex justify-center'>
            <img src={Img1} alt='' className='w-full' />
          </div>
          <div className='w-full text-red-600 my-5 text-xl'>
            <p>#Nutrition #Information</p>
          </div>
          <div>
            <p className='text-gray-500 text-lg'>
              The human body is like a machine, similar to an industrial machine
              that requires either gasoline or electricity to function properly.
              Similarly, the human body obtains or inputs its energy from the
              daily meals consumed throughout the day to fuel its activities,
              maintain the function of vital organs, and contribute to their
              growth and strengthening. Therefore, the food one consumes can be
              compared to the value of gasoline or a specific currency, as it
              provides the necessary energy for various bodily functions. Energy
              is like the key or currency (such as the dirham, for example) that
              enables us as humans and living beings to engage in our
              activities, whether they be educational, occupational, physical,
              or even movements during periods of rest. Any activity we
              undertake, or in other words, any effort we exert, requires a
              return—in the form of energy. The human body has various ways to
              acquire this energy and supply it to the body's cells to perform
              our daily movements, either through food intake or from the stored
              energy reserves (derived from food).
            </p>
          </div>
          <div className='px-3 w-full text-gray-400 mt-3'>
            <li>What are the energy sources for the human body?</li>
            <li>What are the storage methods?</li>
            <li>
              What are the ways through which the body provides energy during
              physical activity?
            </li>
          </div>
          <div className='w-full mt-3'>
            <h1 className='text-2xl font-primary font-bold'>Energy Sources:</h1>
            <p className='text-gray-500 text-lg mt-3'>
              As we explained initially, energy is the currency, and it is
              obtained from three elements in food: carbohydrates (sugars and
              starches) that serve as the primary source of energy, constituting
              around 30% to 60% of our daily energy needs. For athletes, this
              can reach up to 70%. Complex carbohydrates and small amounts of
              simple sugars are recommended, especially during exercises, as
              they are readily absorbed and used by our bodies. Their primary
              role is to provide energy to the body and supply ribose sugar,
              which contains five carbon atoms in its structure for nucleic
              acids. The second source is fats, comprising 20% to 40% of energy
              needs. Athletes may require 25% to 30% of their energy from fats,
              with a preference for plant-based fats like olive oil and nuts
              such as walnuts and almonds. Fats from marine sources like fish
              and seafood are rich in omega-3, omega-6, or omega-9 fatty acids.
              Apart from their energy role, fats play a role in hormone
              production, such as testosterone and cholesterol, known as steroid
              hormones. Stored fats in the body, i.e., adipose tissue, stabilize
              internal organs, absorb shocks, and provide insulation. Finally,
              proteins, serving as the last energy provider, primarily supply
              amino acids to the cells for rebuilding and represent 15% to 20%
              of daily energy needs for an average person and 20% to 40% for an
              athlete. Animal-based proteins are preferable due to their
              high-quality protein content, unlike plant-based sources, which
              may have a lower biological value, lacking essential amino acids.
              The essential amino acids include lysine, tryptophan,
              phenylalanine, isoleucine, valine, threonine, histidine,
              methionine, and leucine. Plant proteins may not provide these
              essential amino acids in sufficient amounts (all nine of them),
              making animal proteins a better choice. However, it's advisable to
              combine both animal and plant protein sources. While considering
              these sources, it's essential not only to focus on quantity but
              also on the quality of fats. The recommended ratio is 3:1
              saturated, 3:1 monounsaturated, and 3:1 polyunsaturated fats.
              Carbohydrates should primarily come from complex sugars and
              starches rather than simple and quick sugars. For more in-depth
              information on these energy sources, refer to Saber's article.
            </p>
          </div>
          <div className='mt-4'>
            <h1 className='text-2xl font-primary font-bold'>Storage:</h1>
            <p className='text-gray-500 text-lg mt-3'>
              As for sugars, after the digestion and breakdown process, they
              transform into simple sugars like glucose and fructose. The body
              stores them in the form of "glycogen" as a primary source for
              storage. Glycogen is a long chain of glucose molecules, stored in
              the liver and muscles for quick use. An average person typically
              has around 400 to 500 grams of glycogen.
            </p>
          </div>
          <div className='h-auto w-full mt-8'>
            <img src={Img2} alt='' className='w-full' />
          </div>
          <div className='w-full mt-3'>
            <p className='text-gray-500 text-lg mt-3'>
              Regarding the remaining glucose, in the case of excess, the body
              either converts it into fats, storing them in fat cells, or
              eliminates it.
            </p>
          </div>
          <div className='h-auto w-full mt-8'>
            <img src={Img3} alt='' className='w-full' />
          </div>
          <div className='mt-4'>
            <p className='text-gray-500 text-lg'>
              As for fats, after their breakdown and digestion in the small
              intestine, they convert into simple fats, namely fatty acids.
              These are stored in fat cells in the form of triglycerides. In the
              body, these fats contribute to body composition, constituting
              around 20-30% in women and between 10-20% in men. Unlike fats,
              proteins are not stored in the body; instead, they are utilized
              for various purposes such as muscle building, enzyme production,
              surface proteins on our cells, intermediate proteins forming the
              cell wall, and providing amino acids for the synthesis of nucleic
              acids. Hence, proteins do not have a primary storage form. In the
              case of excess, the body can convert them into glucose.
            </p>
          </div>
          <div className='w-full mt-3'>
            <h1 className='text-2xl font-primary font-bold'>
              Energy Provision During Physical Activity:
            </h1>
            <p className='text-gray-500 text-lg mt-3'>
              Here, we discuss how our bodies use various sources to produce
              energy during physical activity, and there are three systems:
            </p>
          </div>
          <div className='h-auto w-full mt-8'>
            <img src={Img4} alt='' className='w-full' />
          </div>
          <div className='w-full mt-3'>
            <h1 className='text-2xl font-primary font-bold'>
              Phosphagen System:
            </h1>
            <p className='text-gray-500 text-lg mt-3'>
              The ATP-CP system is an energy source stored in the muscles. Its
              usage begins with the onset of physical activity. Unfortunately,
              the quantity of ATP stored in the body is minimal, providing
              explosive energy for only about six to seven seconds. The body can
              regenerate ATP through the breakdown of adenosine diphosphate
              (ADP).
            </p>
          </div>
          <div className='w-full mt-3'>
            <h1 className='text-2xl font-primary font-bold'>
              Lactic Acid System:
            </h1>
            <p className='text-gray-500 text-lg mt-3'>
              After the phosphagen sources are depleted, the body turns to
              glycogen, producing energy through the breakdown of glycogen,
              known as glycolysis. This process results in the production of
              lactic acid in the absence of oxygen, and the quantity of lactic
              acid increases in the body, causing severe fatigue and muscle
              pain. This system is typically active during short and intense
              activities, such as a 100m sprint or weightlifting. It's
              recommended to consume foods and drinks that reduce lactic acid in
              the blood after such sessions, often having an alkaline nature
              (opposite of acidic), like milk and its derivatives, in the first
              few hours after training, or drinking bicarbonates to neutralize
              acidity.
            </p>
          </div>
          <div className='w-full mt-3'>
            <h1 className='text-2xl font-primary font-bold'>Aerobic System:</h1>
            <p className='text-gray-500 text-lg mt-3'>
              This system is engaged during long or moderate-duration resistance
              exercises, providing massive energy from stored sources. It yields
              approximately 36 ATP when using glucose and 147 ATP when using
              fatty acids. Additionally, carbon dioxide is generated through the
              process of exhalation, and hydrogen dioxide is released as sweat,
              which does not have a negative impact on the body. Therefore, it's
              advisable to train in well-ventilated sports facilities to
              encourage the body to follow this system.
            </p>
          </div>
          <div className='w-full mt-3'>
            <h1 className='text-2xl font-primary font-bold'>Conclusion:</h1>
            <p className='text-gray-500 text-lg mt-3'>
              To ensure optimal performance and energy efficiency, it is crucial
              to provide the body with the right nutrients. Balancing nutrition
              is essential to meet the body's demands without causing
              unnecessary stress. Nutrition directly affects athletic
              performance, and a well-balanced and regulated diet can enhance
              our overall performance. Therefore, it is essential to prioritize
              and tailor our nutrition to the specific needs and capabilities of
              our bodies, aiming for both optimal performance and avoiding
              potential issues that could negatively impact our training and
              overall well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energie;
