import { DescriptionLabel } from "./styles";

function DescriptionText({children}){
    return (
        <DescriptionLabel>
            <h4 className="text_description">
                {children}
            </h4>
        </DescriptionLabel>
    )
}

export default DescriptionText