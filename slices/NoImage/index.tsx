import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NoImage`.
 */
export type NoImageProps = SliceComponentProps<Content.NoImageSlice>;

/**
 * Component for "NoImage" Slices.
 */
const NoImage = ({ slice }: NoImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for no_image (variation: {slice.variation}) Slices
    </section>
  );
};

export default NoImage;
