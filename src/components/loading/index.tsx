import LoaderDot from './dot'
import LoaderBar from './bar'
import LoaderCircle from './circle'

export type { LoaderDotProps } from './dot'
export type { LoaderBarProps } from './bar'
export type { LoaderCircleProps } from './circle'

const Loading = {
  Bar: LoaderBar,
  Dot: LoaderDot,
  Circle: LoaderCircle,
}

export default Loading