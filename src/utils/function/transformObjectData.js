export const transformObjectData = objData =>
  objData
    ? Object.entries(objData).map(el => ({
        type: el[0],
        total: Object.values(el[1])[0],
      }))
    : [];
