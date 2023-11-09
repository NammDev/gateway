import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KeyServices`.
 */
export type KeyServicesProps = SliceComponentProps<Content.KeyServicesSlice>;

/**
 * Component for "KeyServices" Slices.
 */
const KeyServices = ({ slice }: KeyServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for key_services (variation: {slice.variation})
      Slices
    </section>
  );
};

export default KeyServices;
