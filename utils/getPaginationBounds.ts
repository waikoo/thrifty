export const getPaginationBounds = (pageNumber: number, itemsPerPage: number) => {
  let lowerBound = (pageNumber - 1) * itemsPerPage;
  let upperBound = pageNumber * itemsPerPage - 1;

  return {
    lowerBound,
    upperBound,
  };
};
