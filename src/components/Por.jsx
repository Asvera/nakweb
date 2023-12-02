import { useRef } from "react";

import homehead from "../assets/homehead.json"

export default function Por() {



    function Section({ children }) {
        const ref = useRef(null);
        return (
            <div ref={ref} className="bg-indigo-600 h-48 w-48 rounded-md ">{children}</div>
        );
    }

    return (
        <div className="w-full bg-primary text-white relative" id='team'>
            <div className="">
                <div className="text-[8vw] font-semibold">Our Heads</div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 place-items-center gap-8">
                        {homehead.map((person, index) => (
                            <Section className="bg-indigo-600 h-70 w-70 rounded-md relative" key={index} >
                                <div>
                                    <img className="rounded-t-md" src={person.photoUrl} alt={person.name} />
                                    <div className="flex flex-col gap-1">
                                        <h2 className="font-bold" >{person.name}</h2>
                                        <div className="bg-blue-600 top-1 rounded-md p-[0.1rem] opacity-70 font-bold ">{person.postion}</div>
                                    </div>
                                </div>
                            </Section>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}