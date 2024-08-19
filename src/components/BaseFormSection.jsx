const BaseFormSection = ({ sectionName, children, className }) => {
    return (

        <>
            <h3 className="font-bold mb-1 text-center">{sectionName}</h3>
            <div className={`flex flex-col gap-2 ${className}`}>
                {children}
            </div>
        </>

    )
}

export default BaseFormSection