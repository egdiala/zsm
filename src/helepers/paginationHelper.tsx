import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useQueryStringHelper } from "./queryStringHelper";
import { ObjectType } from "@/types/global.types";
export const usePaginationHelper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { updateQueryParam } = useQueryStringHelper();

  const paginate = ({ pageNumber, setCurrentPage, scrollUp = true }: ObjectType) => {
    !location.search ? navigate(`${location.pathname}?page=${pageNumber}`) : !searchParams.get("page") ? navigate(`${location.pathname + location.search}&page=${pageNumber}`) : updateQueryParam("page", pageNumber.toString());
    setCurrentPage(parseInt(pageNumber));
    scrollUp && window.scrollTo(0, 0);
  };
  return {
    paginate,
  };
};
