const generateFileName = (uri: string) => {
  const fileExtension = uri.split(".").pop();
  const randomName = `image_${Math.random()
    .toString(36)
    .substr(2, 8)}_${new Date().getTime()}.${fileExtension}`;
  return randomName;
};

export const generateFileObject = (result: any) => {
  const uploadedFile = {
    uri: result.assets[0].uri,
    fileName: generateFileName(result.assets[0].uri),
    height: result.assets[0].height,
    width: result.assets[0].width,
  };
  return uploadedFile;
};
