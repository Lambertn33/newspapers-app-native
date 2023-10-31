
const generateFileName = (uri: string) => {
  const fileExtension = uri.split(".").pop();
  const randomName = `image_${Math.random()
    .toString(36)
    .substr(2, 8)}_${new Date().getTime()}.${fileExtension}`;
  return randomName;
};

const getMimeType = (fileExtension: string) => {
  switch (fileExtension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return 'application/octet-stream';
  }
};

export const generateFileObject = (result: any) => {
  const newImageUri =
    "file:///" + result.assets[0].uri.split("file:/").join("");
  const uploadedFile = {
    uri: newImageUri,
    name: generateFileName(result.assets[0].uri),
    type: getMimeType(result.assets[0].type),
  };
  return uploadedFile;
};
