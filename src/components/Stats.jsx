export default function Stats(){

    return(
        <div className="w-full bg-primary text-white px-[10%] py-4" id="event">
            <div className="rounded-2xl border border-violet-500 bg-statBg bg-center flex justify-evenly py-4">
               <div>
                    <div className="text-2xl">85</div>
                    <div>Members</div>
               </div>
               <div>
                    <div className="text-2xl">85</div>
                    <div>Event</div>
               </div>
               <div>
                    <div className="text-2xl">85</div>
                    <div>Workshop</div>
               </div>
               <div>
                    <div className="text-2xl">85</div>
                    <div>Blogs</div>
               </div>
            </div>
        </div>
    )
}