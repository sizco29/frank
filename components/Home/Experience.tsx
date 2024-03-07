// components
import ColophonSectionContainer from "../colophon_section";
import ExperienceDetails from "../experience_components/experience_details";
import ExperienceTime from "../experience_components/experience_time";

// icons
import { Brain } from 'lucide-react'

export default function Experience() {
    return (
        <>
            <ColophonSectionContainer title="Experience" icon={<Brain size={14} />}>

                <div className="flex flex-col space-y-4">

                    <div className="flex items-start justify-between">
                        <ExperienceDetails
                            experienceTitle="Software Developer | IOS Dev"
                            experienceCompany="Westshore Paving"
                            experienceCompanyLink="http://www.westshorepaving.com/"
                            experienceLocation="Remote, Florida" />
                        <ExperienceTime
                            experienceInitialDate="03/2024"
                            expCurrent={true} />
                    </div>

                    <div className="flex items-start justify-between">
                        <ExperienceDetails
                            experienceTitle="Shopify Developer"
                            experienceCompany="Monavie.shop"
                            experienceCompanyLink="https://monavie.shop/"
                            experienceLocation="Gainesville, Florida" />
                        <ExperienceTime
                            experienceInitialDate="01/2024"
                            expCurrent={true} />
                    </div>

                    <div className="flex items-start justify-between">
                        <ExperienceDetails
                            experienceTitle="Web Developer & PM"
                            experienceCompany="Nationwidepaving"
                            experienceCompanyLink="#"
                            experienceLocation="Ocala, Florida" />
                        <ExperienceTime
                            experienceInitialDate="09/2022"
                            expCurrent={false}
                            experienceEndDate="12/2023" />
                    </div>

                    <div className="flex items-start justify-between">
                        <ExperienceDetails
                            experienceTitle="Project Coordinator | IHUT"
                            experienceCompany="SAGO"
                            experienceCompanyLink="https://sago.com/"
                            experienceLocation="Managua, Nicaragua" />
                        <ExperienceTime
                            experienceInitialDate="09/2021"
                            expCurrent={false}
                            experienceEndDate="08/2022" />
                    </div>

                    <div className="flex items-start justify-between">
                        <ExperienceDetails
                            experienceTitle="Technical Support Manager"
                            experienceCompany="IBEX"
                            experienceCompanyLink="https://ibex.co/"
                            experienceLocation="Managua, Nicaragua" />
                        <ExperienceTime
                            experienceInitialDate="12/2019"
                            expCurrent={false}
                            experienceEndDate="08/2021" />
                    </div>
                </div>

            </ColophonSectionContainer>
        </>
    );
}