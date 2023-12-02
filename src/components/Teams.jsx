import data from "../assets/teams.json"

export default function Teams() {

    return (
        <div className="w-full bg-primary text-white relative py-12 px-6">
            <div className="">
                <div className="!leading-normal font-extrabold py-32 ">
                    <span className="text-7xl lg:text-9xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                        Our POR
                    </span>
                    <p className="text-xl">
                        <span className="text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">P</span>osition
                        <span className="text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text" > O</span>f
                        <span className="text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text"> R</span>esponsibility
                    </p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold py-4">Tech Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 place-items-center gap-8">

                        {data.map((person, index) => (
                            <div
                                className="bg-indigo-600 h-55 w-48 rounded-md relative" key={index}>
                                <img className="rounded-md" src={person.photoUrl} alt={person.name} />
                                <div className="flex flex-col gap-1">
                                    <h2 className="font-bold" >{person.name}</h2>
                                    <div className="absolute bg-emerald-500 top-1 rounded-md p-[0.1rem] opacity-70 font-bold ">{person.postion}</div>
                                    <div className="flex justify-around ">
                                        <a className="w-8" href={person.linkedinUrl}><img src="https://cdn-icons-png.flaticon.com/512/3991/3991775.png" alt="" /></a>
                                        <a className="w-8" href={`mailto:${person.email}`}><img src="https://cdn-icons-png.flaticon.com/512/3059/3059989.png" alt="" /></a>

                                        {person.instagramUrl ? <a className="w-8" href={person.instagramUrl}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" /></a> : <></>}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="py-10">
                    <h2 className="text-4xl font-bold py-4">Content Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 place-items-center gap-8">
                        {data.map((person, index) => (
                            <div
                                className="bg-indigo-600 h-55 w-48 rounded-md relative " key={index}>
                                <img className="rounded-md" src={person.photoUrl} alt={person.name} />
                                <div className="flex flex-col gap-1">
                                    <h2 className="font-bold" >{person.name}</h2>
                                    <div className="absolute bg-emerald-500 top-1 rounded-md p-[0.1rem] opacity-70 font-bold ">{person.postion}</div>
                                    <div className="flex justify-around ">
                                        <a className="w-8" href={person.linkedinUrl}><img src="https://cdn-icons-png.flaticon.com/512/3991/3991775.png" alt="" /></a>
                                        <a className="w-8" href={`mailto:${person.email}`}><img src="https://cdn-icons-png.flaticon.com/512/3059/3059989.png" alt="" /></a>

                                        {person.instagramUrl ? <a className="w-8" href={person.instagramUrl}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" /></a> : <></>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}