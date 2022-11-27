import { StyledResult } from "./styled";

const Result = ({ result, ratesData }) => (
    <StyledResult>
        {ratesData.loading === "yes"
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