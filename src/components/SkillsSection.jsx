
const skills = [
    {name: "Python",  description:"Made a program that uses 3 algorithms to detect and remove shadows from images, also created a space invaders like game"},
    {name: "MySQL/MSSQL", description:"Learned how to write queries and stored procedures during my internship"},

    {name: "Javascript",  description:"Made a simple game in jQuery (Sobics project)"},
    {name: "React", description:"Currently learning, created this portfolio with it"},
    {name: "Java", description:"Basic language knowledge, working on a game project"},
    {name: "C++",  description:"Basic language knowledge"},

    {name: "Git/GitHub", description:"Basic knowledge how to use version control"},
    {name: "Docker", description:"Know the basics, currently learning more of it"},
    {name: "RestAPI", description:"Basic knowledge on how to extract data from an API"},
    {name: "Data Analyst", description:"Know how to clean, visualize, transform and analyze data"},

];
export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className ="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="mb-4">
                                <h3 className="font-semibold text-lg text-primary">
                                    {skill.name}
                                </h3>  
                            </div>
                            <div className="text-left">
                                <p>
                                    {skill.description}
                                </p>
                            </div>                        
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}