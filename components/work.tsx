import Image from "next/image";
import picostoneIcon from "@/public/pico.jpeg";

type WorkExperience = {
    company: string;
    role: string;
    period: string;
    iconUrl: string;
};

const experiences: WorkExperience[] = [
    {
        company: "Picostone",
        role: "Software Developer",
        period: "2023 - 2024",
        iconUrl: picostoneIcon.src,
    }
];

export default function Work() {
    return (
        <div>
            <h2 className="font-medium mb-4">work</h2>
            <div className="space-y-2">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex items-center hover:bg-blue-400/20 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
                            <Image 
                                src={exp.iconUrl} 
                                alt={`${exp.company} icon`} 
                                width={40} 
                                height={40} 
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow border-b p-1 border-b-blue-400/20">
                            <h3 className="font-semibold">{exp.company}</h3>
                            <p className="text-sm text-blue-800/70">{exp.role}</p>
                        </div>
                        <div className="font-mono text-sm">{exp.period}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}