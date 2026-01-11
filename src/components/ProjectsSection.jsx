import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Shadow detection and removal",
        description:"Implemented three shadow detection and removal algorithms, that only uses the image to work. It includes a GUI for easier use and displays how accurate the algorithm was.",
        image: "public/projects/project1.png",
        tags: ["Python", "Image Processing", "OpenCV", "NumPy"],
        githubUrl: "https://github.com/Restaya/shadow-detection-and-removal"
    },
    {
        id: 2,
        title: "Star Invaders",
        description:"A Star Wars themed Space Invaders game made in Pygame, complete with UnitTesting and code formating checks.",
        image: "public/projects/project2.png",
        tags: ["Python", "Pygame", "UnitTest"],
        githubUrl: "https://github.com/Restaya/Python-Star-Invaders"
    },
    {
        id: 3,
        title: "Sobics",
        description:"A flash game made in jQuery, take a block and throw it to a matching colored one to score!",
        image: "public/projects/project3.png",
        tags: ["Javascript", "jQuery", "HTML/CSS"],
        githubUrl: "https://github.com/Restaya/Sobics-JavaScript"
    },

]

export const ProjectSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
                Here are the projects I have created.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale=110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/40 text-secondary-foreground ">
                                        {tag}
                                    </span>
                                ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title} </h3>
                        <p className="text-sm mb-4">{project.description}</p>
                        <div className ="flex justify-center">
                            <div className="flex space-x-3">
                                <a href={project.githubUrl} target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duartion-300">
                                    <Github size={20}/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Restaya"
                   target="_blank" 
                   className="custom-button w-fit flex items-center mx-auto gap-2">
                    My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
    );
}