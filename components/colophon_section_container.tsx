import { Children } from "react"

export default function ColophonSectionContainer(props: any) {
    return (

        <section className="grid px-4 border-t  pt-6 gap-4">

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