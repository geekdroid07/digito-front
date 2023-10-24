import NextImage, { ImageProps } from 'next/image';

type Props = {
  height?: string;
  width?: string;
  layout?: string;
  objectFit?: string;
};

export const Image = ({
  layout = 'fill',
  height,
  width,
  objectFit = 'cover',
  ...props
}: Props & ImageProps) => {
  return (
    <div style={{ position: 'relative', width: width || '100%', height }}>
      <NextImage layout={layout} objectFit={objectFit} {...props} />
    </div>
  );
};
