const cropImage = (url: string, width: number, height: number): string => { 
//    const target = "media/";
//   const index = url.indexOf(target) + target.length
//   const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index)
 
  return url.replace(/media\/games/, `media/crop/${width}/${height}/games`);
};

export default cropImage;
