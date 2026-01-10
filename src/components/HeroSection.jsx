import { ArrowDown } from "lucide-react";

export const HeroSection = () =>{
    return (
        <section id="hero" 
        className ="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-width-4xl mx-auto text-center z-10">
                <div className ="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className=""> Hi, I'm </span>
                        <span className="text-primary"> 
                            {" "}
                            Gábor
                        </span>
                        <span className="text-primary ml-2 "> 
                        {" "}
                        Fehér 
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto">
                        I'm a junior software developer, with an interest in all things tech
                    </p>
                    <div>
                        <a href="#projects" className="custom-button">
                            Checkout my projects
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-small mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
}