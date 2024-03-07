

export default function TitleComponent(props:any) {
    return(
        <>
        <section>
        <div className="grid  gap-4">
            <div className="undefined">
            <h1 className="text-xl">{props.title}</h1>
            <p className="text-gray-400 text-justify">{props.titleDescription}</p>
            </div>
        </div>
        </section>
        </>
    );
}