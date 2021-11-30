import './ColumnOne.css';

export function ColumnOne() {
    return (
        <div className="container">
            <div className="column left">
                <h1 className="header"> WORK EXPERIENCE </h1>
                    <h3 className="timeline"> JANUARY 2020 - PRESENT </h3>
                    <h3 className="employer"> Platform24 Healthcare AB </h3>
                    <h2 className="title"> Product Manager </h2>
                    <p className="description"> Product Manager for the Triage24 product which triages patients based on their symptoms and recommends appropriate level of care based on business operating rules. </p>

                    <h3 className="timeline"> JANUARY 2017  - JANUARY 2020</h3>
                    <h3 className="employer"> BearingPoint AB </h3>
                    <h2 className="title"> Business Consultant </h2>
                    <p className="description"> Business consultant within the Technology team. Main focus of health care with digital transformation, implementation and change management.</p>

                    <h3 className="timeline"> AUGUST 2016 - DECEMBER 2016 </h3>
                    <h3 className="employer"> CellaVision AB </h3>
                    <h2 className="title"> Master Thesis </h2>
                    <p className="description"> Developing next generation user-centered design interface for digital microscopy in hematology. Working with concept phase, elaboration phase and detail phase with the end user in mind. </p>

                    <h3 className="timeline"> APRIL 2015 – AUGUST 2016</h3>
                    <h3 className="employer"> Region Skåne, Lund University Hospital </h3>
                    <h2 className="title"> Medical technician </h2>
                    <p className="description"> Technician for equipment and configurations. Developed my organizing skills, insight within procurements and purchases as well as implementing processes. </p>

                    <h3 className="timeline"> NOVEMBER 2010 – OCTOBER 2011 </h3>
                    <h3 className="employer"> Swedish Armed Forces </h3>
                    <h2 className="title"> Militery service</h2>
                    <p className="description"> Commandor of action unit and basic military service. Improved my physical and mental ability to work under pressure and group leadership. </p>
                <h1 className="header">EDUCATION </h1>
                    <div className="educationdiv">
                        <p className="number"> 2011 - 2016</p>
                        <p className="educationTitle"> Master of Science</p>
                    </div>

                    <h3 className="educationFocus"> BIO-MECHANICS AND REHABILITATION</h3>
                    <h3 classname="faculty">Faculty of Engineering, Lund University</h3>

        </div>
            <div className="column right">
                <p>
                    då
                </p>
            </div>    
        </div>
    )
}