export function storeVideo(video){
  return({
      type: "STORE_VID",
      payload: {video: video}
    });
}
