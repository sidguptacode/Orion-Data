export function setVideo(video){
  return({
      type: "STORE_VID",
      payload: {video: video}
    });
}
