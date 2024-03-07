import { Children } from "react"

export default function ColophonSectionContainer(props: any) {
    return (

        <section className="grid md:grid-cols-[1fr,1.5fr] px-4 md:gap-0 border-t  pt-6 gap-4">

            <div>
                <div>
                    <div className="flex items-center text-gray-400 ">
                        <div className="mr-1">
                            {props.icon}
                        </div>
                        <p>
                            {props.title}
                        </p>
                    </div>

                </div>

            </div>

            {props.children}

        </section>

    );
}