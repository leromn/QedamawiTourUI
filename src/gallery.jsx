import Gallery from "react-photo-gallery";

export default function GalleryComp() {
  const photos = [
    {
      src:
        "https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_1280.jpg",
      width: 4,
      height: 3
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2023/07/04/10/20/river-8105970_1280.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
      width: 1,
      height: 1
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_1280.jpg",
      width: 1,
      height: 1
    }
  ];
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Gallery photos={photos} />;
    </div>
  );
}
