import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Salut, Je suis{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Aina Finaritra
        </span>{" "}
        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Compétent dans un large éventail de domaines informatiques, je possède une expertise
solide en développement, graphisme, gestion de réseaux, maintenance matérielle
et logicielle, ainsi qu'en administration de systèmes d'exploitation. Mon adaptabilité
et ma capacité à relever des défis diversifiés font de moi un atout précieux pour
toute mission confiée.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
