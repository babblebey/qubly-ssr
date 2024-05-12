import stack from '../img/prod-team.svg';

const ForProductTeams = () => {
    return ( 
        <div className="container my-10 md:my-24">
            <div className="w-full flex flex-col-reverse md:flex-row md:w-11/12 m-auto justify-start items-center">
                <div className="w-full md:w-6/12">
                    <img src={stack} alt="For Product Teams" className="m-auto md:m-0 w-[90%] md:w-[80%]"/>
                </div>

                <div className="w-full md:w-6/12 text-center md:text-left p-2 md:p-10">
                    <div className="pill py-2 px-4 mx-auto md:mx-0">
                        <svg className="w-5 md:w-6 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24.012" viewBox="0 0 24 24.012">
                            <g id="electronic-circuit" transform="translate(0 0.012)">
                                <g id="Group_11" data-name="Group 11">
                                <path id="Path_607" data-name="Path 607" d="M8,7.586V5.816a3,3,0,1,0-2,0V8a1,1,0,0,0,.293.707L9,11.414V23a1,1,0,0,0,2,0V11a1,1,0,0,0-.293-.707Z" fill="#722ed1"/>
                                <path id="Path_608" data-name="Path 608" d="M4,16.586v-1.77a3,3,0,1,0-2,0V17a1,1,0,0,0,.293.707L5,20.414V23a1,1,0,0,0,2,0V20a1,1,0,0,0-.293-.707Z" fill="#722ed1"/>
                                <path id="Path_609" data-name="Path 609" d="M18,8V5.816a3,3,0,1,0-2,0v1.77l-2.707,2.707A1,1,0,0,0,13,11V23a1,1,0,0,0,2,0V11.414l2.707-2.707A1,1,0,0,0,18,8Z" fill="#722ed1"/>
                                <path id="Path_610" data-name="Path 610" d="M24,12a3,3,0,1,0-4,2.816v1.77l-2.707,2.707A1,1,0,0,0,17,20v3a1,1,0,0,0,2,0V20.414l2.707-2.707A1,1,0,0,0,22,17V14.816A3,3,0,0,0,24,12Z" fill="#722ed1"/>
                                </g>
                            </g>
                        </svg>
                        <p>For Product Teams</p>
                    </div>
                    <h2 className="sec-title my-4">
                        Launch with <br />
                        the best stack
                    </h2>
                    <p className="text-primary-100 px-4 md:px-0">
                        A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default ForProductTeams;