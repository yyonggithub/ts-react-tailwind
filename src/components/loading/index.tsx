import LoaderDot from "./loading-dot";
import LoaderBar from "./loading-bar";
import LoaderCircle from "./loading-circle";

export type { LoaderDotProps } from "./loading-dot";
export type { LoaderBarProps } from "./loading-bar";
export type { LoaderCircleProps } from "./loading-circle";

const Loading = {
  Bar: LoaderBar,
  Dot: LoaderDot,
  Circle: LoaderCircle,
};

export default Loading;
