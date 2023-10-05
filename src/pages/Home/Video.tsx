const youTubeVideo =
  "https://www.youtube.com/embed/_awRHFcAS2k?si=Ywk8rQa15Dle3Z9Z";
const Video = () => {
  return (
    <div className="m-auto my-10 block max-w-4xl px-10">
      <div
        className="relative h-0 overflow-hidden rounded-xl pb-[56.25%]"
        style={{
          boxShadow:
            "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #6360FF, 0 0 25px #6360FF, 0 0 30px #6360FF, 0 0 35px #6360FF, 0 0 40px #6360FF"
        }}
      >
        <iframe
          src={`${youTubeVideo}&autoplay=1&mute=1&cc_load_policy=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          className="absolute left-0 top-0 h-full w-full "
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
