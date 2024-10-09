import Image from "next/image";
import picostoneIcon from "@/public/pico.jpeg";
import somiyaIcon from "@/public/somaiya.webp";
import svmkIcon from "@/public/svkm.png";
import dalmiaIcon from "@/public/dalmia.png";

type WorkExperience = {
    place: string;
    role: string;
    period: string;
    iconUrl: string;
};

const experiences: WorkExperience[] = [
    {
        place: "Picostone",
        role: "Software Developer",
        period: "2023 - 2024",
        iconUrl: picostoneIcon.src,
    },
    {
        place: "KJ Somaiya Institute of Engineering",
        role: "B.Tech AI and Data Science, CGPA: 8.5",
        period: "2020 - 2024",
        iconUrl: somiyaIcon.src,
    }, 
    {
        place: "Mithibai College",
        role: "Junior College, 88%",
        period: "2018 - 2020",
        iconUrl: svmkIcon.src,
    }, 
    {
        place: "N.L. Dalmia High School",
        role: "School, 94%",
        period: "Childhood - 2018",
        iconUrl: dalmiaIcon.src,
    }
];

export default function Life() {
    return (
        <div className="mt-4">
            <h2 className="font-medium mb-2">life so far</h2>
            <div className="space-y-2">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex items-center hover:bg-blue-400/20 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
                            <Image 
                                src={exp.iconUrl} 
                                alt={`${exp.place} icon`} 
                                width={40} 
                                height={40} 
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-grow border-b p-1 border-b-blue-400/20">
                            <h3 className="font-semibold">{exp.place}</h3>
                            <p className="text-xs text-blue-800/70">{exp.role}</p>
                        </div>
                        <div className="font-mono text-sm">{exp.period}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}