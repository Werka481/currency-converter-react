import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        Za tę kwotę otrzymasz: <strong>
            {result}
        </strong>
    </StyledResult>
);

export default Result;