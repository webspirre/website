declare module "cloudinary-react" {
  import * as React from "react";

  export type AccessibilityOption =
    | "monochrome"
    | "darkmode"
    | "brightmode"
    | "colorblind";

  export type PlaceholderTypes = "pixelate" | "vectorize";

  export interface ImageProps {
    cloudName: string;
    publicId: string;
    width?: string | number;
    crop?: string;
    quality?: string | number;
    fetchFormat?: string;
    alt?: string;
    loading: string;
    children: React.ReactNode;
    height?: string | number;
    className?: string;
    accessibility?: AccessibilityOption; // Enum for accessibility options
  }

  export class Image extends React.Component<ImageProps, any> {}

  export interface TransformationProps {
    width?: string | number;
    height?: string | number;
    crop?: string;
    quality?: string | number;
    fetchFormat?: string;
    gravity?: string;
    effect?: string;
    radius?: string | number;
    color?: string;
    background?: string;
  }

  export class Transformation extends React.Component<
    TransformationProps,
    any
  > {}

  export interface PlaceholderProps {
    type?: PlaceholderTypes;
  }

  export class Placeholder extends React.Component<PlaceholderProps, any> {}
}
