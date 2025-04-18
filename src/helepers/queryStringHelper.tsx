import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useQueryStringHelper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromQuery = searchParams.get("page");

  const getPageNoFromQueryString = () => (pageFromQuery === null ? 1 : parseInt(pageFromQuery, 10));
  const getIdFromQueryString = (idTitle: string) => {
    const id = searchParams.get(idTitle);
    return id;
  };

  const getQueryStringValue = (string: string) => searchParams.get(string);

  const attachQueryStringToUrl = (queryTitle: string, value: string) => navigate(`${location.pathname}?${queryTitle}=${value}`);
  const removeAllQueryStringsFromURL = () => navigate(`${location.pathname}`);

  const updateQueryParam = (param: string, value: string) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      newParams.set(param, value);
      return newParams;
    });
  };
  const deleteQueryParam = (param: string) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      newParams.delete(param);
      return newParams;
    });
  };

  return {
    getPageNoFromQueryString,
    getIdFromQueryString,
    attachQueryStringToUrl,
    getQueryStringValue,
    removeAllQueryStringsFromURL,
    updateQueryParam,
    deleteQueryParam,
  };
};
