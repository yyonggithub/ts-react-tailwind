// import * as React from "react";
// import classnames from "classnames";
// import Icon from "../icon";
// import LoaderDot from "../loading/loading-dot";
// import { classnamesType } from "../../interface";
// import ButtonGroup from "./button-group";

// export type presetType =
//   | "default"
//   | "primary"
//   | "secondary"
//   | "danger"
//   | "text";

// export type Props = {
//   className?: classnamesType;
//   // ifFocusedColor?: string;
//   // elseFocusedColor?: string;
//   focusColor?: string[] | string;
//   ariaLabel?: string;
//   disabled?: boolean;
//   loading?: boolean;
//   selected?: boolean;
//   padding?: boolean | string;
//   icon?: string;
//   size?: string | boolean;
//   preset?: presetType;
//   color?: string;
//   iconMargin?: string;
//   iconColor?: string;
//   isOpen?: boolean;
//   extendIcon?: string;
//   zIndex?: string;
//   onClick?: Function;
//   onBlur?: Function;
//   onMousedown?: Function;
//   onMouseup?: Function;
//   onMouseOver?: ()=>void;
//   onMouseLeave?: ()=>void;
//   /**
//    * 用于从父类中引入ref
//    */
//   target?: any;
// } & Partial<typeof defaultProps>;

// interface State {
//   focused: boolean;
// }

// const defaultProps = {
//   text: "",
//   align: "justify-center items-center",
//   display: "inline-flex",
//   shrink: "flex-shrink-0",
//   font: "text-sm font-medium",
//   outline: "focus:outline-none",
//   radius: "rounded-md",
//   lineHeight: "leading-5",
//   // extendIcon: '#outline-small-down-16',
//   transition: "transition ease-in-out duration-200",
//   disabledColor: "border border-transparent bg-gray-2 text-gray-6",
// };

// class Button extends React.Component<Props, State> {
//   static Group = ButtonGroup;

//   static defaultProps = defaultProps;

//   input: React.RefObject<HTMLButtonElement> | undefined;

//   constructor(props: Readonly<Props>) {
//     super(props);
//     this.state = {
//       focused: false,
//     };
//     this.input = this.props.target || React.createRef();
//     this.onFocus = this.onFocus.bind(this);
//     this.onBlur = this.onBlur.bind(this);
//     this.onClick = this.onClick.bind(this);
//     this.onMousedown = this.onMousedown.bind(this);
//     this.onMouseup = this.onMouseup.bind(this);
//   }
//   componentDidMount() {
//     this.input = this.props.target || React.createRef();
//   }

//   get ariaLabel() {
//     return this.props.ariaLabel || this.props.text || undefined;
//   }

//   get zIndex() {
//     const zIndex = "zIndex" in this.props ? this.props.zIndex : "z-2";
//     return this.state.focused ? zIndex : null;
//   }

//   get cursor() {
//     const { disabled, loading, selected } = this.props;
//     if (loading) {
//       return "cursor-wait";
//     }
//     if (selected || disabled) {
//       return "cursor-default";
//     }
//     return "cursor-pointer";
//   }

//   get padding() {
//     const { padding, icon, text } = this.props;
//     if (typeof padding === "boolean" && padding === false) {
//       return null;
//     }
//     if (typeof padding === "string") {
//       return padding;
//     }
//     return icon && !text ? null : "px-4";
//   }

//   get size() {
//     const { size, icon, text } = this.props;
//     if (typeof size === "boolean" && size === false) {
//       return null;
//     }
//     if (typeof size === "string") {
//       return size;
//     }
//     return icon && !text ? "h-8 w-8" : "h-8";
//   }

//   get focusColor() {
//     const { focusColor } = this.props;

//     if (typeof focusColor === "string")
//       return this.state.focused ? focusColor : null;

//     if (typeof focusColor === "undefined" || focusColor.length > 2) return null;

//     if (focusColor && focusColor.length === 2) {
//       return this.state.focused ? focusColor[0] : focusColor[1];
//     } else if (focusColor && focusColor.length === 1) {
//       return this.state.focused ? focusColor[0] : null;
//     } else {
//       return null;
//     }
//   }

//   get focusState() {
//     const { preset } = this.props;
//     switch (preset) {
//       case "primary":
//         return this.state.focused
//           ? "shadow-outline border-primary-dark"
//           : "border-transparent";
//       case "secondary":
//         return this.state.focused
//           ? "shadow-outline border-primary-opacity-3"
//           : "border-transparent";
//       case "danger":
//         return this.state.focused
//           ? "shadow-outline-danger border-danger-dark"
//           : "border-transparent";
//       default:
//         return this.state.focused
//           ? "shadow-outline border-primary-opacity-4"
//           : "border-normal";
//     }
//   }

//   get color(): string | undefined {
//     const { preset, disabled, color } = this.props;
//     if (disabled) return this.props.disabledColor;
//     if (typeof color === "string" && color !== "") return color;
//     switch (preset) {
//       case "text":
//         return `${this.focusState} text-body hover:bg-gray-1 active:bg-gray-2 active:text-body-dark`;
//       case "primary":
//         return `border ${this.focusState} text-white bg-primary hover:bg-primary-bright active:bg-primary-dark`;
//       case "secondary":
//         return `border ${this.focusState} text-primary bg-primary-opacity-1 hover:bg-primary-opacity-05`;
//       case "danger":
//         return `border ${this.focusState} text-white bg-danger hover:bg-danger-bright active:bg-danger-dark`;
//       default:
//         return `border ${this.focusState} text-body bg-body hover:text-body-bright active:text-body-dark active:bg-gray-1`;
//     }
//   }

//   get iconMargin(): string | null {
//     const { iconMargin, text } = this.props;
//     if (iconMargin) return iconMargin;
//     return text ? "-ml-1 mr-2" : null;
//   }

//   get iconColor(): string | null {
//     const { iconColor, preset } = this.props;
//     if (iconColor) return iconColor;
//     if (preset === "text") return "text-secondary group-hover:text-body";
//     return null;
//   }

//   get extendOpacity(): string {
//     const { disabled, isOpen } = this.props;
//     if (disabled) return "opacity-50";
//     return isOpen ? "opacity-100" : "opacity-50 group-hover:opacity-100";
//   }

//   get classStr() {
//     const list = [
//       "Button relative group min-w-0 max-w-full",
//       this.props.className,
//       this.props.align,
//       this.color,
//       this.cursor,
//       this.props.display,
//       this.focusColor,
//       this.props.font,
//       this.props.lineHeight,
//       this.props.outline,
//       this.padding,
//       this.props.radius,
//       this.props.shrink,
//       this.size,
//       this.props.transition,
//       this.zIndex,
//     ];
//     return classnames(list);
//   }

//   render() {
//     let styles = {};
//     if (this.props.loading) {
//       styles = {
//         visibility: "hidden",
//       };
//     }
//     const loading = this.props.loading ? (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <LoaderDot color={"text-current"} />
//       </div>
//     ) : null;
//     const iconClass = classnames([
//       "Button__icon",
//       this.iconColor,
//       this.iconMargin,
//       { invisible: this.props.loading },
//     ]);
//     const textClass = classnames([
//       "Button__text truncate flex-grow",
//       { invisible: this.props.loading },
//     ]);
//     const icon = this.props.icon ? (
//       <Icon className={iconClass} icon={this.props.icon} style={styles} />
//     ) : null;
//     const text = this.props.text ? (
//       <span className={textClass} style={styles}>
//         {this.props.text}
//       </span>
//     ) : null;
//     const extendClass = classnames([
//       "Button__extend transform ml-2 -mr-1",
//       this.extendOpacity,
//       { invisible: this.props.extendIcon },
//     ]);
//     const extend = this.props.extendIcon ? (
//       <Icon
//         icon={this.props.extendIcon}
//         className={extendClass}
//         style={styles}
//       />
//     ) : null;
//     return (
//       <button
//         aria-disabled={this.props.disabled}
//         aria-label={this.ariaLabel}
//         aria-busy={this.props.loading}
//         className={this.classStr}
//         disabled={this.props.disabled}
//         type="button"
//         onFocus={this.onFocus}
//         onBlur={this.onBlur}
//         onClick={this.onClick}
//         onMouseDown={this.onMousedown}
//         onMouseUp={this.onMouseup}
//         onMouseLeave={this.props.onMouseLeave}
//         onMouseOver={this.props.onMouseOver}
//         ref={this.input || this.props.target}
//       >
//         {loading}
//         {icon}
//         {this.props.children}
//         {text}
//         {extend}
//       </button>
//     );
//   }

//   onFocus(e: React.FocusEvent<HTMLButtonElement>) {
//     this.setState({ focused: true });
//     e.target.focus();
//   }
//   onBlur(e: React.FocusEvent<HTMLButtonElement>) {
//     if (!this.props.disabled && typeof this.props.onBlur === "function") {
//       e.target.blur();
//     }
//     this.setState({ focused: false });
//     e.target.blur();
//   }
//   onClick(e: React.MouseEvent) {
//     if (!this.props.disabled && typeof this.props.onClick === "function") {
//       this.props.onClick(e);
//     }
//     this.setState({ focused: true });
//   }
//   onMousedown(e: React.MouseEvent) {
//     if (!this.props.disabled && typeof this.props.onMousedown === "function") {
//       this.props.onMousedown(e);
//     }
//   }
//   onMouseup(e: React.MouseEvent) {
//     if (!this.props.disabled && typeof this.props.onMouseup === "function") {
//       this.props.onMouseup(e);
//     }
//   }
// }

// export default Button;

import Button from "./button";

export default Button;
