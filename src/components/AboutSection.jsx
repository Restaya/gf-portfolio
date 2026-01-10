import { Briefcase, GraduationCap, Popcorn} from "lucide-react";

export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               About <span className="text-primary"> Me</span> 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold ">
                        Junior Software Developer
                    </h3>
                    <p>
                        Interned as a Web Developer at my university, created websites and forms, reports etc.
                    </p>
                    <p>
                        I currently don't have a focus on either side of programming, however I like to work on problems that require me to 
                        learn more, such as creating a website for the university with all bells and whistles or writing a 
                        complex query that uses the result to generates a report about the weekly standups. 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="custom-button">
                            Contact me
                         </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 mt-3">
                                <GraduationCap className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Education</h4>
                                <p>
                                    Bachelor's Degree in Computer Science from the University of Szeged
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 mt-3">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Work Experience</h4>
                                <p>
                                    Web Developer Internship at the University of Szeged
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 mt-[5%]">
                                <Popcorn className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Hobbies</h4>
                                <p>
                                    I enjoy gaming, creating my own programming projects and going to the gym, while most of the time listening to music.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>;
}