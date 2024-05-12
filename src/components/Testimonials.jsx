const Testimonials = () => {
    return ( 
        <div className="bg-gradient-to-b from-[#F9F0FF] to-[#E2F1FF] -skew-y-6 mb-12 md:mb-28">
            <div className="container py-14 md:py-28 skew-y-6">
                <div className="w-full md:w-6/12 m-auto px-4 text-center">
                    <p className="font-medium text-primary-200 text-lg">
                        "What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"
                    </p>
                    <img src="/img/guilermo.svg" alt="Guilermo" className="mx-auto mt-6 mb-2"/>
                    <p className="text-primary-200 font-bold">
                        Guilemmor Cabane <br />
                        CTO @ BigSpring
                    </p>
                </div>

                <div className="w-full md:w-10/12 mx-auto mt-16 px-4">
                    <div className="h-[1px] w-full bg-[#DEC9FA]" />

                    <div className="flex flex-wrap lg:flex-nowrap justify-evenly md:justify-between items-center py-10 px-4">
                        <img src="/img/tonkean.svg" alt="Tonkean" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src="/img/bigspring.svg" alt="BigSpring" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src="/img/clearbit.svg" alt="Clearbit" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src="/img/mine.svg" alt="Mine" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src="/img/shake.svg" alt="Shake" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;