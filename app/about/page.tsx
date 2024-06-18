import { Poppins } from "next/font/google";
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const PoppinsNormal = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    style: "normal",
    variable: "--font-poppins"
});
const PoppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
    style: "normal",
    variable: "--font-poppins"
});

export default function About() {
    return (
        <>
            <div className={`container bg-[#f8f9fa] h-[1200px]: ${PoppinsBold.className}`}>
                <div className="container px-10">
                        <p className="text-6xl text-[#343a40]">About Me</p>
                        <hr className="w-80 ml-10 h-1 -my-3 mb-11 bg-gray-900 rounded"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
                        <div className={`${PoppinsNormal.className} mt-20`}>
                            <h1 className="text-[#343a40] text-2xl">Hi, my name is Yogi Kautsar Alnandeta, 
                                <br /> 
                                I’m a Student at SMK Wikrama Vocational High School
                            </h1>
                            <p className="text-[#343a40] text-lg">
                                I have a passion for technology and love to learn new things. 
                                My interests include web development, programming, and digital design.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image 
                                src={"/images/profile.jpg"}
                                width={300}
                                height={300}
                                alt="Profile Image"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="container">
                        <p className="text-6xl text-[#343a40] text-right mt-60">Skill</p>
                        <div className="flex justify-evenly">
                            <Card>
                                <CardHeader>
                                <CardTitle>Programming Language</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-row gap-4 justify-center">
                                    <Image
                                    src={"/images/JavaScript.jpeg"}
                                    alt="JavaScript"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                    <Image
                                    src={"/images/TypeScript.jpeg"}
                                    alt="TypeScript"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                    <Image
                                    src={"/images/PHP.jpeg"}
                                    alt="JavaScript"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                </CardContent>
                            </Card>


                            <Card>
                                <CardHeader>
                                <CardTitle>Technology</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-row gap-4 justify-center">
                                    <Image
                                    src={"/images/React.jpeg"}
                                    alt="React"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                    <Image
                                    src={"/images/NextJs.jpeg"}
                                    alt="NextJs"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                    <Image
                                    src={"/images/Tailwind.jpeg"}
                                    alt="Tailwind"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                <CardTitle>Database</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-row gap-4 justify-center">
                                    <Image
                                    src={"/images/Mongodb.jpeg"}
                                    alt="Mongodb"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                    ></Image>
                                </CardContent>
                            </Card>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
