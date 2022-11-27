import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        Za tę kwotę otrzymasz: <strong>
            {result.resultFinal} {result.currency}
        </strong>
    </StyledResult>
);

export default Result;