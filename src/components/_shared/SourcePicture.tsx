type SourcePictureProps = Readonly<{
  path: string;
  alt: string;
  loading?: "lazy" | "eager";
}>;

export const SourcePicture = ({
  path,
  alt,
  loading = "eager",
}: SourcePictureProps) => {
  return (
    <picture>
      <source
        width="100%"
        height="100%"
        media="(max-width:600px)"
        srcSet={`/assets/mob-${path}`}
      />
      <source
        width="100%"
        height="100%"
        media="(min-width:601px)"
        srcSet={`/assets/${path}`}
      />
      <img
        width="100%"
        height="100%"
        src={`/assets/${path}.jpg`}
        alt={alt}
        loading={loading}
      />
    </picture>
  );
};
