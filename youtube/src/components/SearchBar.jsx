const SearchBar = ({ videos, onSearchVideo }) => {
  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          name="search"
          onInput={(e) =>
            SerchVideoByName(e.currentTarget.value, videos, onSearchVideo)
          }
        />
      </label>
    </form>
  );
};

const SerchVideoByName = (name, videos, onSearchVideo) => {
  let foundVideos = [];

  videos.forEach((video) => {
    name = name.toLocaleLowerCase();
    video.title = video.title.toLocaleLowerCase();

    if (video.title.includes(name)) {
      foundVideos.push(video);
    }
  });

  onSearchVideo(foundVideos);
};

export default SearchBar;
