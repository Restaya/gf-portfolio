import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

export const ContactSection = () => {
    return ( <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className ="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-24 text-center">Contact <span className="text-primary">Information</span></h2>
                <div className="flex space-y-8 justify-center">
                    <div className="grid items-start grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-12 bg-card/20 rounded-lg p-6 ">

                        {/* Email */}
                        <div className="flex">
                            <div className="p-3 rounded-full bg-primary/10 mx-3">
                                    <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:gabor.feher.25@gmail.com" className="hover:text-primary transition-colors">
                                    gabor.feher.25@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex">
                            <div className="p-3 rounded-full bg-primary/10 mx-3">
                                    <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone Number</h4>
                                <h2> +36 30 195 0640</h2>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex">
                            <div className="p-3 rounded-full bg-primary/10 mx-3">
                                    <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <h2>
                                    Budapest, Hungary
                                </h2>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-primary/10 mx-3">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <a 
                                href="https://www.linkedin.com/in/gaborfeher25/" 
                                target="_blank"
                                className="font-medium hover:text-primary transition-colors">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}