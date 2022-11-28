import { StyledResult } from "./styled";

const Result = ({ result, ratesData }) => (
    <StyledResult>
        {ratesData.status === "success"
            ?
            <>
                Za tę kwotę otrzymasz:
                <strong>
                    {result.resultFinal} {result.currency}
                </strong>
            </>
            : null
        }
    </StyledResult>
);

export default Result;