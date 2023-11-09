import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WorkingWith`.
 */
export type WorkingWithProps = SliceComponentProps<Content.WorkingWithSlice>;

/**
 * Component for "WorkingWith" Slices.
 */
const WorkingWith = ({ slice }: WorkingWithProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for working_with (variation: {slice.variation})
      Slices
    </section>
  );
};

export default WorkingWith;
