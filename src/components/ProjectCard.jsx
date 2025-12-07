import { MoveRight } from 'lucide-react'

const ProjectCard = ({ data }) => {
  return (
    <section className="relative w-full max-w-[420px] h-[480px] md:h-[500px] rounded-[18px] overflow-hidden">
    <iframe
  src={data.video}
  className="absolute top-0 left-0 w-[200%] h-full -translate-x-1/4 object-cover"
  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
  
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex flex-col justify-between text-center">
        <h1 className="text-xl md:text-2xl font-semibold text-white p-6">
          {data.projectName}
        </h1>

        {/* Footer Content */}
        <div className="bg-black/20 backdrop-blur-md rounded-md p-4 mt-auto flex flex-col gap-4">

          <p className="text-white text-start text-sm md:text-base line-clamp-4 px-2">
            {data.projectDetails}
          </p>

          <div className="flex justify-end w-full">
            <button className="flex items-center text-white justify-center hover:text-pink-500 hover:cursor-pointer transition mb-3">
              <MoveRight size={28} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectCard;
